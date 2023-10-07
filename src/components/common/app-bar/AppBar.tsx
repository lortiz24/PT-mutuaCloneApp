import { PropsWithChildren } from "react";
import { StyleSheet, View, StatusBar, ScrollView } from "react-native";
import { theme } from "../../../config/theme/theme";
import { Link } from "react-router-native";
import StyleText from "../../ui/style-text/StyleText";
import MenuList from "../../../utils/constants/menu/Menu";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
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

interface Props extends PropsWithChildren {
  active?: boolean;
  to: string;
}

const AppBarTab = ({ active, children, to }: Props) => {
  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to}>
      <StyleText fontWeight="bold" style={textStyles}>
        {children}
      </StyleText>
    </Link>
  );
};
export const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        {MenuList.map((menuItem) => (
          <AppBarTab to={menuItem.path} key={menuItem.path}>
            {menuItem.title}
          </AppBarTab>
        ))}
      </ScrollView>
    </View>
  );
};
