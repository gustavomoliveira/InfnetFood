import { Linking, View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { restaurantes } from "../data/restaurantes";
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";

export default function RestaurantesScreen({ navigation }) {
    const { isDarkMode } = useContext(ThemeContext);
    const styles = createStyles(isDarkMode);

    async function abrirMapa(latitude, longitude) {
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        await Linking.openURL(url);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Restaurantes</Text>
            <FlatList
                data={restaurantes}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.lista}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.cabecalho}>
                            <Text style={styles.nome}>{item.nome}</Text>
                            <Text style={styles.avaliacao}>⭐ {item.avaliacao}</Text>
                        </View>
                        <Text style={styles.categoria}>{item.categoria}</Text>
                        <View style={styles.botoes}>
                            <TouchableOpacity
                                style={styles.botaoSecundario}
                                onPress={() => abrirMapa(item.latitude, item.longitude)}
                                activeOpacity={0.85}
                            >
                                <Text style={styles.botaoSecundarioTexto}>📍 Ver Localização</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.botaoPrimario}
                                onPress={() => navigation.navigate("Detalhes", { restaurante: item })}
                                activeOpacity={0.85}
                            >
                                <Text style={styles.botaoPrimarioTexto}>Mais Informações</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
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
        card: {
            backgroundColor: tema.surface,
            borderRadius: 12,
            padding: 16,
            marginBottom: 12,
        },
        cabecalho: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 4,
        },
        nome: {
            fontSize: 16,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            flex: 1,
        },
        avaliacao: {
            fontSize: 14,
            fontWeight: 'bold',
            color: tema.destaqueSecundario,
        },
        categoria: {
            fontSize: 13,
            color: tema.textoPrimario,
            opacity: 0.6,
            marginBottom: 16,
        },
        botoes: {
            flexDirection: 'row',
            gap: 8,
        },
        botaoSecundario: {
            flex: 1,
            borderWidth: 1,
            borderColor: tema.destaqueSecundario,
            borderRadius: 8,
            padding: 10,
            alignItems: 'center',
        },
        botaoSecundarioTexto: {
            color: tema.destaqueSecundario,
            fontWeight: 'bold',
            fontSize: 13,
        },
        botaoPrimario: {
            flex: 1,
            backgroundColor: tema.destaquePrimario,
            borderRadius: 8,
            padding: 10,
            alignItems: 'center',
        },
        botaoPrimarioTexto: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 13,
        },
    });
}