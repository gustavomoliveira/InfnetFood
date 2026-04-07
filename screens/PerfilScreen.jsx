import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { lightTheme, darkTheme } from "../constants/theme";

export default function PerfilScreen() {
    const { user } = useContext(UserContext);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const styles = createStyles(isDarkMode);
    const tema = isDarkMode ? darkTheme : lightTheme;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Perfil</Text>

            <View style={styles.card}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarTexto}>
                        {user.nome.charAt(0).toUpperCase()}
                    </Text>
                </View>
                <Text style={styles.nome}>{user.nome}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>

            <View style={styles.secao}>
                <Text style={styles.secaoTitulo}>Informações</Text>
                <View style={styles.infoCard}>
                    <View style={styles.infoLinha}>
                        <Text style={styles.infoLabel}>Telefone</Text>
                        <Text style={styles.infoValor}>{user.telefone}</Text>
                    </View>
                    <View style={styles.separador} />
                    <View style={styles.infoLinha}>
                        <Text style={styles.infoLabel}>Cidade</Text>
                        <Text style={styles.infoValor}>{user.endereco.cidade}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.secao}>
                <Text style={styles.secaoTitulo}>Preferências</Text>
                <View style={styles.infoCard}>
                    <View style={styles.infoLinha}>
                        <Text style={styles.infoLabel}>Tema Escuro</Text>
                        <Switch
                            value={isDarkMode}
                            onValueChange={toggleTheme}
                            trackColor={{ false: '#ccc', true: tema.destaqueSecundario }}
                            thumbColor={isDarkMode ? tema.destaquePrimario : '#f4f3f4'}
                        />
                    </View>
                </View>
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
            padding: 16,
        },
        titulo: {
            fontSize: 22,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            paddingTop: 24,
            marginBottom: 24,
        },
        card: {
            backgroundColor: tema.surface,
            borderRadius: 12,
            padding: 24,
            alignItems: 'center',
            marginBottom: 24,
        },
        avatar: {
            width: 72,
            height: 72,
            borderRadius: 36,
            backgroundColor: tema.destaquePrimario,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 12,
        },
        avatarTexto: {
            fontSize: 32,
            fontWeight: 'bold',
            color: '#FFFFFF',
        },
        nome: {
            fontSize: 18,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            marginBottom: 4,
        },
        email: {
            fontSize: 14,
            color: tema.textoPrimario,
            opacity: 0.6,
        },
        secao: {
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
        infoCard: {
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
            opacity: 0.7,
        },
        infoValor: {
            fontSize: 14,
            fontWeight: 'bold',
            color: tema.textoPrimario,
        },
    });
}