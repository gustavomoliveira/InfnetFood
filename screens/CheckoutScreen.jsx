import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useContext, useEffect, useState } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoContext";
import { UserContext } from "../contexts/UserContext";
import { PedidosContext } from "../contexts/PedidosContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";
import { pagamentos } from "../data/pagamentos";
import * as Notifications from "expo-notifications";

export default function CheckoutScreen({ navigation }) {
    const { user } = useContext(UserContext);
    const { carrinho, gerarNumeroPedido, limparCarrinho } = useContext(CarrinhoContext);
    const { addPedido } = useContext(PedidosContext);
    const { isDarkMode } = useContext(ThemeContext);
    const [pagamentoSelecionado, setPagamentoSelecionado] = useState(null);
    const [error, setError] = useState(null);
    const styles = createStyles(isDarkMode);
    const tema = isDarkMode ? darkTheme : lightTheme;

    const totalCarrinho = carrinho.reduce((acc, item) => {
        return acc + (item.preco * item.quantidade);
    }, 0);

    async function confirmarPedido() {
        if (pagamentoSelecionado === null) {
            setError("Selecione uma forma de pagamento válida.");
            return;
        }

        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Pedido confirmado! 🎉",
                body: "Seu pedido está sendo preparado."
            },
            trigger: null
        });

        const numeroPedido = gerarNumeroPedido();
        addPedido(carrinho, totalCarrinho)
        limparCarrinho();
        navigation.navigate("Sucesso", { numeroPedido });
    }

    useEffect(() => {
        Notifications.requestPermissionsAsync();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Checkout</Text>
            <Text style={styles.subtitulo}>Revise os dados abaixo para finalizar</Text>

            <View style={styles.secao}>
                <Text style={styles.secaoTitulo}>Dados de Entrega</Text>
                <View style={styles.card}>
                    <Text style={styles.campo}>{user.nome}</Text>
                    <Text style={styles.campo}>{user.telefone}</Text>
                    <Text style={styles.campo}>
                        {user.endereco.rua}, {user.endereco.numero}
                    </Text>
                    <Text style={styles.campo}>
                        {user.endereco.bairro} — {user.endereco.cidade}
                    </Text>
                    <Text style={styles.campo}>CEP: {user.endereco.cep}</Text>
                </View>
                <TouchableOpacity
                    style={styles.botaoSecundario}
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.85}
                >
                    <Text style={styles.botaoSecundarioTexto}>Editar Carrinho</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.secao}>
                <Text style={styles.secaoTitulo}>Resumo do Pedido</Text>
                <View style={styles.card}>
                    <Text style={styles.total}>Total: R$ {totalCarrinho.toFixed(2)}</Text>
                </View>
            </View>

            <View style={styles.secao}>
                <Text style={styles.secaoTitulo}>Forma de Pagamento</Text>
                <View style={[styles.card, styles.pickerContainer]}>
                    <Picker
                        selectedValue={pagamentoSelecionado}
                        onValueChange={(valor) => setPagamentoSelecionado(valor)}
                        style={{ color: tema.textoPrimario }}
                        dropdownIconColor={tema.textoPrimario}
                    >
                        <Picker.Item label="Selecione..." value={null} />
                        {pagamentos.map((p) => (
                            <Picker.Item key={p.id} label={p.nome} value={p.id} />
                        ))}
                    </Picker>
                </View>
                {error ? <Text style={styles.error}>{error}</Text> : null}
            </View>

            <TouchableOpacity
                style={styles.botaoConfirmar}
                onPress={confirmarPedido}
                activeOpacity={0.85}
            >
                <Text style={styles.botaoConfirmarTexto}>Realizar Pagamento</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

function createStyles(isDarkMode) {
    const tema = isDarkMode ? darkTheme : lightTheme;

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: tema.background,
        },
        titulo: {
            fontSize: 22,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            paddingHorizontal: 16,
            paddingTop: 24,
            marginBottom: 4,
        },
        subtitulo: {
            fontSize: 14,
            color: tema.textoPrimario,
            opacity: 0.6,
            paddingHorizontal: 16,
            marginBottom: 24,
        },
        secao: {
            paddingHorizontal: 16,
            marginBottom: 24,
        },
        secaoTitulo: {
            fontSize: 14,
            fontWeight: 'bold',
            color: tema.destaqueSecundario,
            marginBottom: 8,
            textTransform: 'uppercase',
            letterSpacing: 0.8,
        },
        card: {
            backgroundColor: tema.surface,
            borderRadius: 12,
            padding: 16,
        },
        campo: {
            fontSize: 14,
            color: tema.textoPrimario,
            marginBottom: 4,
        },
        total: {
            fontSize: 18,
            fontWeight: 'bold',
            color: tema.textoPrimario,
        },
        pickerContainer: {
            padding: 0,
        },
        botaoSecundario: {
            borderWidth: 1,
            borderColor: tema.destaquePrimario,
            borderRadius: 8,
            padding: 10,
            alignItems: 'center',
            marginTop: 8,
        },
        botaoSecundarioTexto: {
            color: tema.destaquePrimario,
            fontWeight: 'bold',
            fontSize: 14,
        },
        error: {
            color: tema.destaquePrimario,
            fontSize: 13,
            marginTop: 8,
        },
        botaoConfirmar: {
            backgroundColor: tema.destaquePrimario,
            margin: 16,
            padding: 14,
            borderRadius: 8,
            alignItems: 'center',
            marginBottom: 32,
        },
        botaoConfirmarTexto: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 16,
        },
    });
}