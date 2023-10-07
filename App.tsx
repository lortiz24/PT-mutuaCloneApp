import { StyleSheet, View } from "react-native";
import AppRoutes from "./src/components/routes/AppRoutes";
import { NativeRouter } from "react-router-native";

export default function App() {
  return (
    <NativeRouter >
      <AppRoutes />
    </NativeRouter>
  );
}

