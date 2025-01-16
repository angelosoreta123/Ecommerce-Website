import Logo from "./Logo";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import SearchProduct from "./SearchProduct";
import Sidebar from "./Sidebar";

const Header = () => {
  const { cartQuantity } = useCart();

  return (
    <header className="flex w-full bg-charcoalGray mx-auto text-charcoal">
      <div className="max-w-7xl flex items-center mx-auto w-full justify-between md:gap-20 p-4">
        <Logo />
        <SearchProduct />
        <div className="flex items-center gap-6 relative">
          <Link to={"/login"}>
            <FaUser color="white" />
          </Link>
          <Link to={"/cart"} className="relative">
            <FaCartShopping color="white" />
            <span className="bg-yellow-300 text-gunmetal rounded-full w-4 h-4 text-center text-xs absolute -top-2 left-3">
              {cartQuantity}
            </span>
          </Link>
          <Sidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
