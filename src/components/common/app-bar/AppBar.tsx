import { StyleSheet, StatusBar } from "react-native";
import { theme } from "../../../config/theme/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeView from "../../views/home/HomeView";
import PickupView from "../../views/pickup/PickupView";
import WalletView from "../../views/wallet/WalletView";
import ProfileView from "../../views/profile/ProfileView";
import TabBarCustom from "./TabBarCustom";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.primary,
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight ?? 0,
  },
  text: {
    color: theme.appBar.textPrimary,
    paddingHorizontal: 10,
  },
  scroll: {
    paddingBottom: 15,
  },
  active: {
    color: theme.appBar.textSecondary,
  },
});

const Tab = createBottomTabNavigator();

export const AppBar = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.container.backgroundColor}
      />

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 75,
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          },
        }}
        initialRouteName="Inicio"
        // tabBar={(props) => <TabBarCustom {...props} />}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeView}
          options={{
            title: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Billetera"
          component={WalletView}
          options={{
            title: "Billetera",
            /* tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            ), */
          }}
        />
        <Tab.Screen
          name="Recolecciones"
          component={PickupView}
          options={{
            title: "Recolecciones",
            /* tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            ), */
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileView}
          options={{
            title: "Perfil",
            /* tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" size={size} color={color} />
            ), */
          }}
        />
      </Tab.Navigator>
    </>
  );
};
