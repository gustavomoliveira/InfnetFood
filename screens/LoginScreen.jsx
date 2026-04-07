import { TextInput, TouchableOpacity, Text, StyleSheet, Animated } from "react-native";
import { useContext, useState, useRef, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { lightTheme } from "../constants/theme";
import LottieView from "lottie-react-native";

export default function LoginScreen() {
    const {user, setIsAuth} = useContext(UserContext);
    const [dadosLogin, setDadosLogin] = useState({email: '', senha: ''});
    const [error, setError] = useState(null);
    const opacidade = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacidade, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();
    }, []);

    function handleSubmit() {
        if (!dadosLogin.email || !dadosLogin.senha) {
            setError("Os campos não podem ser vazios");
            return;
        }
        if (dadosLogin.email.toLowerCase() !== user.email.toLowerCase() || dadosLogin.senha !== user.senha) {
            setError("Email ou senha incorreto");
            return;
        }
        setIsAuth(true);
    }

    const styles = createStyles();

    return (
        <Animated.View style={[styles.container, {opacity: opacidade}]}>
            <LottieView
                source={require("../assets/Restaurant Food Loading.json")}
                autoPlay={true}
                loop={true}
                style={{ width: 200, height: 200, marginBottom: 16 }}
            />
            <Text style={styles.titulo}>InfnetFood</Text>
            <Text style={styles.subtitulo}>Faça login para continuar</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                placeholderTextColor={lightTheme.textoPrimario + '88'}
                value={dadosLogin.email}
                onChangeText={(text) => setDadosLogin({...dadosLogin, email: text})}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor={lightTheme.textoPrimario + '88'}
                secureTextEntry
                value={dadosLogin.senha}
                onChangeText={(text) => setDadosLogin({...dadosLogin, senha: text})}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity style={styles.botao} onPress={handleSubmit} activeOpacity={0.85}>
                <Text style={styles.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

function createStyles() {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
            backgroundColor: lightTheme.background,
        },
        titulo: {
            fontSize: 32,
            fontWeight: 'bold',
            color: lightTheme.destaquePrimario,
            marginBottom: 8,
        },
        subtitulo: {
            fontSize: 14,
            color: lightTheme.textoPrimario,
            marginBottom: 32,
            opacity: 0.6,
        },
        input: {
            width: '100%',
            borderWidth: 1,
            borderColor: lightTheme.destaqueSecundario,
            borderRadius: 8,
            padding: 12,
            marginBottom: 16,
            color: lightTheme.textoPrimario,
            backgroundColor: lightTheme.surface,
        },
        error: {
            color: lightTheme.destaquePrimario,
            marginBottom: 12,
            fontSize: 13,
        },
        botao: {
            width: '100%',
            backgroundColor: lightTheme.destaquePrimario,
            padding: 14,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 8,
        },
        botaoTexto: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 16,
        },
    });
}