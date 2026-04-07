import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { lightTheme, darkTheme } from "../constants/theme";

export default function Card({ imagem, nome, preco, onPress, textoBotao, isDarkMode }) {
    const styles = createStyles(isDarkMode);

    return (
        <View style={styles.container}>
            <Image
                source={imagem ? { uri: imagem } : require("../assets/Image_not_available.png")}
                style={styles.imagem}
            />
            <View style={styles.conteudo}>
                <Text style={styles.nome}>{nome}</Text>
                {preco ? <Text style={styles.preco}>R$ {preco}</Text> : null}
                <TouchableOpacity style={styles.botao} onPress={onPress} activeOpacity={0.85}>
                    <Text style={styles.botaoTexto}>{textoBotao}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function createStyles(isDarkMode) {
    const tema = isDarkMode ? darkTheme : lightTheme;

    return StyleSheet.create({
        container: {
            backgroundColor: tema.surface,
            borderRadius: 12,
            marginHorizontal: 16,
            marginVertical: 8,
            overflow: 'hidden',
            elevation: 2,
        },
        imagem: {
            width: '100%',
            height: 180,
        },
        conteudo: {
            padding: 12,
        },
        nome: {
            fontSize: 16,
            fontWeight: 'bold',
            color: tema.textoPrimario,
            marginBottom: 4,
        },
        preco: {
            fontSize: 14,
            color: tema.destaqueSecundario,
            marginBottom: 8,
        },
        botao: {
            backgroundColor: tema.destaquePrimario,
            padding: 10,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 4,
        },
        botaoTexto: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 14,
        },
    });
}