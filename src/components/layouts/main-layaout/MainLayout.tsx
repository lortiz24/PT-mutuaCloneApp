import { PropsWithChildren } from "react";
import { View } from "react-native";
import { AppBar } from "../../common/app-bar/AppBar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <View style={{ flex: 1 , backgroundColor:'#212121'}}>
      <AppBar />
      {children}
    </View>
  );
};

export default MainLayout;
