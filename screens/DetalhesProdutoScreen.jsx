import { TouchableOpacity, View, Text, ActivityIndicator, Image, StyleSheet, ScrollView } from "react-native";
import { useContext, useState } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoContext";
import { ImagensContext } from "../contexts/ImagensContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";

export default function DetalhesProdutoScreen({ route }) {
    const { produto } = route.params;
    const { addItem } = useContext(CarrinhoContext);
    const { imagensProdutos, loading } = useContext(ImagensContext);
    const { isDarkMode } = useContext(ThemeContext);
    const [quantidade, setQuantidade] = useState(1);
    const [mensagem, setMensagem] = useState(null);
    const styles = createStyles(isDarkMode);

    function incrementarQuantidade() {
        setQuantidade(quantidade + 1);
    }

    function decrementarQuantidade() {
        if (quantidade > 1) setQuantidade(quantidade - 1);
    }

    function adicionarAoCarrinho() {
        addItem({ ...produto, quantidade });
        setMensagem(`${produto.nome} adicionado com sucesso!`);
        setTimeout(() => {
            setMensagem(null);
        }, 3000);
    }

    return (
        <ScrollView style={styles.container}>
            {loading ? (
                <ActivityIndicator
                    size="large"
                    color={isDarkMode ? darkTheme.destaquePrimario : lightTheme.destaquePrimario}
                    style={styles.loading}
                />
            ) : (
                <Image
                    source={imagensProdutos[produto.id] ?
                        { uri: imagensProdutos[produto.id] } : require("../assets/Image_not_available.png")}
                    style={styles.imagem}
                />
            )}
            <View style={styles.conteudo}>
                <Text style={styles.nome}>{produto.nome}</Text>
                <Text style={styles.descricao}>{produto.descricao}</Text>
                <Text style={styles.preco}>R$ {produto.preco}</Text>

                <Text style={styles.labelQuantidade}>Quantidade</Text>
                <View style={styles.quantidadeContainer}>
                    <TouchableOpacity style={styles.botaoQuantidade} onPress={decrementarQuantidade} activeOpacity={0.85}>
                        <Text style={styles.botaoQuantidadeTexto}>−</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantidade}>{quantidade}</Text>
                    <TouchableOpacity style={styles.botaoQuantidade} onPress={incrementarQuantidade} activeOpacity={0.85}>
                        <Text style={styles.botaoQuantidadeTexto}>+</Text>
                    </TouchableOpacity>
                </View>

                {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

                <TouchableOpacity style={styles.botao} onPress={adicionarAoCarrinho} activeOpacity={0.85}>
                    <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </View>
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
        loading: {
            marginTop: 48,
        },
        imagem: {
            width: '100%',
            height: 260,
        },
        conteudo: {
            padding: 20,
        },
        nome: {
            fontSize: 22,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            marginBottom: 8,
        },
        descricao: {
            fontSize: 14,
            color: tema.textoPrimario,
            opacity: 0.7,
            marginBottom: 12,
            lineHeight: 20,
        },
        preco: {
            fontSize: 20,
            fontWeight: 'bold',
            color: tema.destaqueSecundario,
            marginBottom: 24,
        },
        labelQuantidade: {
            fontSize: 14,
            color: tema.textoPrimario,
            opacity: 0.7,
            marginBottom: 8,
        },
        quantidadeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 24,
        },
        botaoQuantidade: {
            backgroundColor: tema.surface,
            borderWidth: 1,
            borderColor: tema.destaqueSecundario,
            borderRadius: 8,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
        },
        botaoQuantidadeTexto: {
            fontSize: 20,
            color: tema.destaqueSecundario,
            fontWeight: 'bold',
        },
        quantidade: {
            fontSize: 18,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            marginHorizontal: 24,
        },
        mensagem: {
            color: tema.destaqueSecundario,
            fontSize: 13,
            marginBottom: 12,
            textAlign: 'center',
        },
        botao: {
            backgroundColor: tema.destaquePrimario,
            padding: 14,
            borderRadius: 8,
            alignItems: 'center',
        },
        botaoTexto: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 16,
        },
    });
}