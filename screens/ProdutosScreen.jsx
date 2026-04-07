import { ActivityIndicator, FlatList, Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import { ImagensContext } from "../contexts/ImagensContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";
import { produtos } from "../data/produtos";
import Card from "../components/Card";

export default function ProdutosScreen({ navigation, route }) {
    const { item } = route.params;
    const { imagensProdutos, loading } = useContext(ImagensContext);
    const { isDarkMode } = useContext(ThemeContext);
    const produtosFiltrados = produtos.filter(p => p.categoriaId === item.id);
    const styles = createStyles(isDarkMode);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{item.nome}</Text>
            {loading ? (
                <ActivityIndicator
                    size="large"
                    color={isDarkMode ? darkTheme.destaquePrimario : lightTheme.destaquePrimario}
                    style={styles.loading}
                />
            ) : (
                <FlatList
                    data={produtosFiltrados}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            imagem={imagensProdutos[item.id]}
                            nome={item.nome}
                            preco={item.preco}
                            onPress={() => navigation.navigate("Detalhes", { produto: item })}
                            textoBotao="Detalhes do Produto"
                            isDarkMode={isDarkMode}
                        />
                    )}
                    contentContainerStyle={styles.lista}
                />
            )}
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
        loading: {
            marginTop: 48,
        },
        lista: {
            paddingBottom: 24,
        },
    });
}