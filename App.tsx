import { AppBar } from './src/components/common/app-bar/AppBar';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { theme } from './src/config/theme/theme';

const NavigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: theme.appBar.textPrimary,
    primary: theme.appBar.textSecondary,
    card: theme.appBar.primary,
    background: theme.background.primary,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppBar />
    </NavigationContainer>
  );
}
