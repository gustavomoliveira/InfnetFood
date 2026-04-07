import { FlatList, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";

export default function CarrinhoScreen({ navigation }) {
    const { carrinho, removeItem, atualizarQtde } = useContext(CarrinhoContext);
    const [mensagem, setMensagem] = useState(null);
    const { isDarkMode } = useContext(ThemeContext);
    const styles = createStyles(isDarkMode);

    const totalCarrinho = carrinho.reduce((acc, item) => {
        return acc + (item.preco * item.quantidade);
    }, 0);

    function finalizarPedido() {
        if (carrinho.length === 0) {
            setMensagem("Carrinho vazio. Adicione um produto antes de continuar.");
            setTimeout(() => {
                setMensagem(null);
            }, 3000);
            return;
        }
        navigation.navigate("Checkout");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Carrinho</Text>
            <FlatList
                data={carrinho}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.lista}
                ListEmptyComponent={<Text style={styles.vazio}>Seu carrinho está vazio.</Text>}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.nomeProduto}>{item.nome}</Text>
                        <Text style={styles.precoProduto}>R$ {item.preco}</Text>
                        <View style={styles.quantidadeContainer}>
                            <TouchableOpacity
                                style={styles.botaoQuantidade}
                                onPress={() => item.quantidade > 1 && atualizarQtde({ ...item, quantidade: item.quantidade - 1 })}
                                activeOpacity={0.85}
                            >
                                <Text style={styles.botaoQuantidadeTexto}>−</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantidade}>{item.quantidade}</Text>
                            <TouchableOpacity
                                style={styles.botaoQuantidade}
                                onPress={() => atualizarQtde({ ...item, quantidade: item.quantidade + 1 })}
                                activeOpacity={0.85}
                            >
                                <Text style={styles.botaoQuantidadeTexto}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.botaoRemover}
                            onPress={() => removeItem(item)}
                            activeOpacity={0.85}
                        >
                            <Text style={styles.botaoRemoverTexto}>Remover</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <View style={styles.rodape}>
                <Text style={styles.total}>Total: R$ {totalCarrinho.toFixed(2)}</Text>

                {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

                <TouchableOpacity
                    style={styles.botaoFinalizar}
                    onPress={finalizarPedido}
                    activeOpacity={0.85}
                >
                    <Text style={styles.botaoFinalizarTexto}>Finalizar Pedido</Text>
                </TouchableOpacity>
            </View>
        </View>
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
            paddingBottom: 8,
        },
        lista: {
            paddingHorizontal: 16,
            paddingBottom: 24,
        },
        vazio: {
            textAlign: 'center',
            color: tema.textoPrimario,
            opacity: 0.5,
            marginTop: 48,
            fontSize: 16,
        },
        card: {
            backgroundColor: tema.surface,
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
        },
        nomeProduto: {
            fontSize: 16,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            marginBottom: 4,
        },
        precoProduto: {
            fontSize: 14,
            color: tema.destaqueSecundario,
            marginBottom: 12,
        },
        quantidadeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 12,
        },
        botaoQuantidade: {
            backgroundColor: tema.background,
            borderWidth: 1,
            borderColor: tema.destaqueSecundario,
            borderRadius: 8,
            width: 36,
            height: 36,
            alignItems: 'center',
            justifyContent: 'center',
        },
        botaoQuantidadeTexto: {
            fontSize: 18,
            color: tema.destaqueSecundario,
            fontWeight: 'bold',
        },
        quantidade: {
            fontSize: 16,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            marginHorizontal: 20,
        },
        botaoRemover: {
            borderWidth: 1,
            borderColor: tema.destaquePrimario,
            borderRadius: 8,
            padding: 8,
            alignItems: 'center',
        },
        botaoRemoverTexto: {
            color: tema.destaquePrimario,
            fontWeight: 'bold',
            fontSize: 14,
        },
        rodape: {
            padding: 16,
            borderTopWidth: 1,
            borderTopColor: tema.surface,
        },
        total: {
            fontSize: 18,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            marginBottom: 12,
        },
        mensagem: {
            color: tema.destaqueSecundario,
            fontSize: 13,
            marginBottom: 12,
            textAlign: 'center',
        },
        botaoFinalizar: {
            backgroundColor: tema.destaquePrimario,
            padding: 14,
            borderRadius: 8,
            alignItems: 'center',
        },
        botaoFinalizarTexto: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 16,
        },
    });
}