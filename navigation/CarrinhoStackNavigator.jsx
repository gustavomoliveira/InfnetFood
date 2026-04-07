import { useContext } from "react";
import { CarrinhoScreen, CheckoutScreen, SucessoScreen } from "../screens/_index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";

const Stack = createNativeStackNavigator();

export default function CarrinhoStackNavigator() {
    const { isDarkMode } = useContext(ThemeContext);
    const tema = isDarkMode ? darkTheme : lightTheme;

    const screenOptions = {
        headerStyle: { backgroundColor: tema.surface },
        headerTintColor: tema.textoPrimario,
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: tema.background },
    };

    return (
        <Stack.Navigator initialRouteName="Carrinho" screenOptions={screenOptions}>
            <Stack.Screen name="Carrinho" component={CarrinhoScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen name="Sucesso" component={SucessoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}