import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/TabNavigator';
import CarrinhoProvider from "./contexts/CarrinhoContext";
import UserProvider from "./contexts/UserContext";
import ThemeProvider from "./contexts/ThemeContext";
import ImagensProvider from "./contexts/ImagensContext";
import PedidosProvider from "./contexts/PedidosContext";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";
import { LoginScreen } from "./screens/_index";
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

function AppNavigator() {
    const { isAuth } = useContext(UserContext);
    return isAuth ? <TabNavigator /> : <LoginScreen />;
}

export default function App() {
  return (
      <ThemeProvider>
          <UserProvider>
              <CarrinhoProvider>
                  <ImagensProvider>
                      <PedidosProvider>
                          <NavigationContainer>
                              <AppNavigator />
                          </NavigationContainer>
                      </PedidosProvider>
                  </ImagensProvider>
              </CarrinhoProvider>
          </UserProvider>
      </ThemeProvider>

  );
}