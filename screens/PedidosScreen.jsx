import { View, Text, FlatList, StyleSheet } from "react-native";
import { useContext } from "react";
import { PedidosContext } from "../contexts/PedidosContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";

export default function PedidosScreen() {
    const { historicoPedidos } = useContext(PedidosContext);
    const { isDarkMode } = useContext(ThemeContext);
    const styles = createStyles(isDarkMode);
    const tema = isDarkMode ? darkTheme : lightTheme;

    function corStatus(status) {
        if (status === 'Entregue') return '#4CAF50';
        if (status === 'A caminho') return tema.destaqueSecundario;
        return tema.destaquePrimario;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Últimos Pedidos</Text>
            <FlatList
                data={historicoPedidos}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.lista}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.cabecalho}>
                            <Text style={styles.restaurante}>{item.restaurante}</Text>
                            <Text style={[styles.status, { color: corStatus(item.status) }]}>
                                {item.status}
                            </Text>
                        </View>
                        <View style={styles.separador} />
                        {item.itens.map((i, index) => (
                            <Text key={index} style={styles.item}>• {i}</Text>
                        ))}
                        <View style={styles.rodape}>
                            <Text style={styles.data}>{item.data}</Text>
                            <Text style={styles.total}>R$ {item.total.toFixed(2)}</Text>
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
            marginBottom: 12,
        },
        restaurante: {
            fontSize: 16,
            fontWeight: 'bold',
            color: tema.textoPrimario,
        },
        status: {
            fontSize: 13,
            fontWeight: 'bold',
        },
        separador: {
            height: 1,
            backgroundColor: tema.background,
            marginBottom: 8,
        },
        item: {
            fontSize: 13,
            color: tema.textoPrimario,
            opacity: 0.7,
            marginBottom: 2,
        },
        rodape: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 12,
        },
        data: {
            fontSize: 12,
            color: tema.textoPrimario,
            opacity: 0.5,
        },
        total: {
            fontSize: 15,
            fontWeight: 'bold',
            color: tema.destaqueSecundario,
        },
    });
}