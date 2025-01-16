import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProcessorPage from "./pages/ProcessorPage";
import MotherboardPage from "./pages/MotherboardPage";
import MonitorPage from "./pages/MonitorPage";
import PeripheralsPage from "./pages/PeripheralsPage/PeripheralsPage";
import LaptopPage from "./pages/LaptopPage";
import ProductPage from "./pages/ProductPage";
import MousePage from "./pages/PeripheralsPage/MousePage";
import KeyboardPage from "./pages/PeripheralsPage/KeyboardPage";
import HeadsetPage from "./pages/PeripheralsPage/HeadsetPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/product-category/processor"
            element={<ProcessorPage />}
          />
          <Route
            path="/product-category/motherboard"
            element={<MotherboardPage />}
          />
          <Route path="/product-category/monitor" element={<MonitorPage />} />
          <Route
            path="/product-category/peripherals"
            element={<PeripheralsPage />}
          />
          <Route
            path="/product-category/peripherals/mouse"
            element={<MousePage />}
          />
          <Route
            path="/product-category/peripherals/keyboard"
            element={<KeyboardPage />}
          />
          <Route
            path="/product-category/peripherals/headset"
            element={<HeadsetPage />}
          />
          <Route path="/product-category/laptop" element={<LaptopPage />} />
          <Route path="/product/:productName" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
