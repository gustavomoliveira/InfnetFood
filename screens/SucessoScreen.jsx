import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";
import LottieView from "lottie-react-native";

export default function SucessoScreen({ navigation, route }) {
    const { numeroPedido } = route.params;
    const { isDarkMode } = useContext(ThemeContext);
    const styles = createStyles(isDarkMode);
    const opacidade = useRef(new Animated.Value(0)).current;
    const escala = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacidade, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.spring(escala, {
                toValue: 1,
                friction: 5,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.conteudo, { opacity: opacidade, transform: [{ scale: escala }] }]}>
                <LottieView
                    source={require("../assets/Delivery guy out for delivery.json")}
                    autoPlay={true}
                    loop={true}
                    style={{ width: 300, height: 300, marginBottom: 16 }}
                />
                <Text style={styles.titulo}>Pedido Confirmado!</Text>
                <Text style={styles.numeroPedido}>#{numeroPedido}</Text>
                <Text style={styles.mensagem}>Seu pedido já está sendo preparado e em breve estará com você! 🎉</Text>
                <Text style={styles.agradecimento}>Obrigado por escolher o InfnetFood</Text>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate("Início")}
                    activeOpacity={0.85}
                >
                    <Text style={styles.botaoTexto}>Voltar para o Início</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

function createStyles(isDarkMode) {
    const tema = isDarkMode ? darkTheme : lightTheme;

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: tema.background,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
        },
        conteudo: {
            alignItems: 'center',
        },
        titulo: {
            fontSize: 26,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            marginBottom: 8,
        },
        numeroPedido: {
            fontSize: 18,
            fontWeight: 'bold',
            color: tema.destaqueSecundario,
            marginBottom: 24,
        },
        mensagem: {
            fontSize: 15,
            color: tema.textoPrimario,
            opacity: 0.7,
            textAlign: 'center',
            lineHeight: 22,
            marginBottom: 12,
        },
        agradecimento: {
            fontSize: 13,
            color: tema.textoPrimario,
            opacity: 0.5,
            marginBottom: 32,
        },
        botao: {
            backgroundColor: tema.destaquePrimario,
            paddingVertical: 14,
            paddingHorizontal: 32,
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