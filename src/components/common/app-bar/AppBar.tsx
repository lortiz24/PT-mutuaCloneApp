import { StyleSheet, StatusBar } from 'react-native';
import { theme } from '../../../config/theme/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from '../../views/home/HomeView';
import PickupView from '../../views/pickup/PickupView';
import WalletView from '../../views/wallet/WalletView';
import ProfileView from '../../views/profile/ProfileView';
import IconFeather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import StyleText from '../../ui/style-text/StyleText';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.primary,
    flexDirection: 'row',
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
      <StatusBar barStyle="light-content" backgroundColor={styles.container.backgroundColor} />

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 100,
            borderTopWidth: 0,
          },
        }}
        initialRouteName="Inicio">
        <Tab.Screen
          name="Inicio"
          component={HomeView}
          options={{
            title: '',
            tabBarIcon: ({ color, size, focused }) => (
              <>
                <IconFeather name="home" size={size} color={color} style={{ paddingBottom: 5 }} />
                <StyleText
                  style={{
                    color: focused ? theme.appBar.textSecondary : theme.appBar.textPrimary,
                  }}>
                  Inicio
                </StyleText>
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Billetera"
          component={WalletView}
          options={{
            title: '',
            tabBarIcon: ({ color, size, focused }) => (
              <>
                <SimpleLineIcons
                  name="wallet"
                  size={size}
                  color={color}
                  style={{ paddingBottom: 5 }}
                />
                <StyleText
                  style={{
                    color: focused ? theme.appBar.textSecondary : theme.appBar.textPrimary,
                  }}>
                  Billetera
                </StyleText>
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Recolecciones"
          component={PickupView}
          options={{
            title: '',
            tabBarIcon: ({ color, size, focused }) => (
              <>
                <IconFeather
                  name="calendar"
                  size={size}
                  color={color}
                  style={{ paddingBottom: 5 }}
                />
                <StyleText
                  style={{
                    color: focused ? theme.appBar.textSecondary : theme.appBar.textPrimary,
                  }}>
                  Recolecciones
                </StyleText>
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={ProfileView}
          options={{
            title: '',
            tabBarIcon: ({ color, size, focused }) => (
              <>
                <IconFeather name="user" size={size} color={color} style={{ paddingBottom: 5 }} />
                <StyleText
                  style={{
                    color: focused ? theme.appBar.textSecondary : theme.appBar.textPrimary,
                  }}>
                  Perfil
                </StyleText>
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
