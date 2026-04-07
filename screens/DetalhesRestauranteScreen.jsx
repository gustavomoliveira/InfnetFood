import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";

export default function DetalhesRestauranteScreen({ route }) {
    const { restaurante } = route.params;
    const { isDarkMode } = useContext(ThemeContext);
    const styles = createStyles(isDarkMode);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>{restaurante.nome}</Text>
            <Text style={styles.categoria}>{restaurante.categoria}</Text>

            <View style={styles.secao}>
                <Text style={styles.secaoTitulo}>Informações</Text>
                <View style={styles.card}>
                    <View style={styles.infoLinha}>
                        <Text style={styles.infoLabel}>Endereço</Text>
                        <Text style={styles.infoValor}>{restaurante.endereco}</Text>
                    </View>
                    <View style={styles.separador} />
                    <View style={styles.infoLinha}>
                        <Text style={styles.infoLabel}>Avaliação</Text>
                        <Text style={styles.infoValor}>⭐ {restaurante.avaliacao}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.secao}>
                <Text style={styles.secaoTitulo}>Mais Pedido</Text>
                <View style={styles.card}>
                    <Text style={styles.itemDestaque}>{restaurante.itemDestaque}</Text>
                </View>
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
        titulo: {
            fontSize: 24,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            paddingHorizontal: 16,
            paddingTop: 24,
            marginBottom: 4,
        },
        categoria: {
            fontSize: 14,
            color: tema.destaqueSecundario,
            paddingHorizontal: 16,
            marginBottom: 24,
            opacity: 0.8,
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
            paddingHorizontal: 16,
        },
        infoLinha: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 14,
        },
        separador: {
            height: 1,
            backgroundColor: tema.background,
        },
        infoLabel: {
            fontSize: 14,
            color: tema.textoPrimario,
            opacity: 0.6,
        },
        infoValor: {
            fontSize: 14,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            flexShrink: 1,
            textAlign: 'right',
            marginLeft: 16,
        },
        itemDestaque: {
            fontSize: 15,
            color: tema.textoPrimario,
            paddingVertical: 14,
        },
    });
}