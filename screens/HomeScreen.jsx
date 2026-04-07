import { FlatList, View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useContext } from "react";
import { categorias } from "../data/categorias";
import { ImagensContext } from '../contexts/ImagensContext';
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";
import Card from "../components/Card";

export default function HomeScreen({ navigation }) {
    const { imagensCategorias, loading } = useContext(ImagensContext);
    const { isDarkMode } = useContext(ThemeContext);
    const styles = createStyles(isDarkMode);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Categorias</Text>
            {loading ? (
                <ActivityIndicator
                    size="large"
                    color={isDarkMode ? darkTheme.destaquePrimario : lightTheme.destaquePrimario}
                    style={styles.loading}
                />
            ) : (
                <FlatList
                    data={categorias}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Card
                            imagem={imagensCategorias[item.id]}
                            nome={item.nome}
                            onPress={() => navigation.navigate("Produtos", { item })}
                            textoBotao="Ver Produtos"
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