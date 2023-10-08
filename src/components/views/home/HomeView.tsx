import { View, StyleSheet } from "react-native";
import StyleText from "../../ui/style-text/StyleText";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <StyleText>hola mundo</StyleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default HomeView;
