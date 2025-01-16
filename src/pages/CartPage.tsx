import { Link } from "react-router-dom";
import Button from "../components/shared/Button";
import useCart from "../hooks/useCart";
import { formatPrice } from "../utility/formatPrice";
import CartItem from "../components/CartPage/CartItem";

const CartPage = () => {
  const { cartQuantity, cartItems, cartTotal, clearCart } = useCart();

  return (
    <section className="max-w-7xl mx-auto p-4 w-full flex flex-col gap-10 text-white">
      <div className="flex gap-4">
        <Link to={"/"} className="font-bold">
          Home
        </Link>
        <p> &gt; </p>
        <p>Cart</p>
      </div>
      {!cartQuantity ? (
        <div className="flex flex-col gap-4 items-center text-2xl text-center m-20 mb-[157px]">
          <p>Your shopping cart is empty.</p>{" "}
          <Link
            to={"/"}
            className="font-bold border-b-2 border-b-yellow-300 hover:border-b-yellow-400"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-row justify-between">
            <p className="text-base font-semibold">Cart Total</p>
            <p className="text-base font-semibold">{formatPrice(cartTotal)}</p>
          </div>
          <div className="flex flex-col border border-yellow-300 p-4 gap-10">
            {cartItems?.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <Button
            className="bg-yellow-300 rounded-full px-4 py-2 w-fit mx-auto text-charcoalGray hover:bg-yellow-400"
            onClick={clearCart}
          >
            Clear cart
          </Button>
        </>
      )}
    </section>
  );
};

export default CartPage;
