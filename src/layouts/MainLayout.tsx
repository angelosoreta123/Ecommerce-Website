import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import CartContextProvider from "../context/CartContext";
import FilterContextProvider from "../context/FilterContext";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <FilterContextProvider>
      <CartContextProvider>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </CartContextProvider>
    </FilterContextProvider>
  );
};

export default MainLayout;
