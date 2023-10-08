import { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";
import { AppBar } from "../../common/app-bar/AppBar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <View style={styles.container}>
      <AppBar />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
  },
});

export default MainLayout;
