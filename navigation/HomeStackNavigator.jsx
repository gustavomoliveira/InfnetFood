import { useContext } from "react";
import { HomeScreen, ProdutosScreen, DetalhesProdutoScreen } from "../screens/_index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
    const { isDarkMode } = useContext(ThemeContext);
    const tema = isDarkMode ? darkTheme : lightTheme;

    const screenOptions = {
        headerStyle: { backgroundColor: tema.surface },
        headerTintColor: tema.textoPrimario,
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: tema.background },
    };

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Produtos" component={ProdutosScreen} />
            <Stack.Screen name="Detalhes" component={DetalhesProdutoScreen} />
        </Stack.Navigator>
    );
}