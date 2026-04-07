import { useContext } from "react";
import { RestaurantesScreen, DetalhesRestauranteScreen } from "../screens/_index";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";

const Stack = createNativeStackNavigator();

export default function RestaurantesStackNavigator() {
    const { isDarkMode } = useContext(ThemeContext);
    const tema = isDarkMode ? darkTheme : lightTheme;

    const screenOptions = {
        headerStyle: { backgroundColor: tema.surface },
        headerTintColor: tema.textoPrimario,
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: tema.background },
    };

    return (
        <Stack.Navigator initialRouteName="Restaurantes" screenOptions={screenOptions}>
            <Stack.Screen name="Restaurantes" component={RestaurantesScreen} />
            <Stack.Screen name="Detalhes" component={DetalhesRestauranteScreen} />
        </Stack.Navigator>
    );
}