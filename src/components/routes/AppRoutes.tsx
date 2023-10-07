import { Text } from "react-native";
import { Routes, Route } from "react-router-native";
import HomeView from "../views/home/HomeView";
import MainLayout from "../layouts/main-layaout/MainLayout";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/wallet" element={<Text>Billetera</Text>} />
        <Route path="/pickups" element={<Text>Recolecciones</Text>} />
        <Route path="/profile" element={<Text>Perfil</Text>} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
