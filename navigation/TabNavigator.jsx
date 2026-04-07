import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { HomeStackNavigator, RestaurantesStackNavigator, CarrinhoStackNavigator } from "./_index";
import { PerfilScreen, PedidosScreen } from "../screens/_index";
import { ThemeContext } from "../contexts/ThemeContext";
import { lightTheme, darkTheme } from "../constants/theme";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    const { isDarkMode } = useContext(ThemeContext);
    const tema = isDarkMode ? darkTheme : lightTheme;

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: tema.surface,
                    borderTopColor: tema.background,
                },
                tabBarActiveTintColor: tema.destaquePrimario,
                tabBarInactiveTintColor: isDarkMode ? '#888' : '#aaa',
                headerStyle: {
                    backgroundColor: tema.surface,
                },
                headerTintColor: tema.textoPrimario,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Tab.Screen
                name="Início"
                component={HomeStackNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Pedidos"
                component={PedidosScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="bag" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Restaurantes"
                component={RestaurantesStackNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="storefront" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ItensCarrinho"
                component={CarrinhoStackNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: "Carrinho",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cart" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}