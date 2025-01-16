import useCart from "../../hooks/useCart";
import products from "../../data/products";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import { formatPrice } from "../../utility/formatPrice";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useCart();
  const item = products.find((product) => product.id === id);
  if (item == null) return null;

  return (
    <div
      key={item.id}
      className="flex flex-col gap-4 border-b border-b-yellow-300 p-4"
    >
      <div className="flex flex-row items-center gap-4">
        <img src={item.image} alt={item.name} className="w-24 md:w-36 border-4 border-yellow-300 rounded-lg object-contain bg-white p-4" />
        <div className="flex flex-col gap-4">
          <Link
            to={`/product/${item.name}`}
            className="text-sm hover:text-yellow-300 md:text-lg"
          >
            {item.name}
          </Link>
          <p className="text-sm font-semibold md:text-lg">
            {formatPrice(item.price)}
          </p>
        </div>
      </div>
      <div className="flex gap-4 w-fit">
        <div className="flex border rounded-full border-yellow-300">
          <input
            type="text"
            className="w-10 outline-none bg-inherit px-4 text-sm"
            value={quantity}
          />
          <div className="flex gap-4">
            <Button
              className="w-5"
              onClick={() => increaseCartQuantity(item.id)}
            >
              +
            </Button>
            <Button
              className="w-5"
              onClick={() => decreaseCartQuantity(item.id)}
            >
              -
            </Button>
          </div>
        </div>
        <Button
          onClick={() => removeFromCart(item.id)}
          className="text-sm bg-yellow-300 hover:bg-yellow-400 rounded-full py-2 px-4 text-charcoalGray"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
