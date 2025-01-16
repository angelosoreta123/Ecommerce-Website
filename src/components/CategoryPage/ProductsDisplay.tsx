import { ProductsType } from "../../data/products";
import { formatPrice } from "../../utility/formatPrice";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import useCart from "../../hooks/useCart";

interface ProductsDisplayProps {
  products: ProductsType[];
}

const ProductsDisplay = ({ products }: ProductsDisplayProps) => {
  const { increaseCartQuantity } = useCart();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white rounded-md">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col cursor-pointer p-2">
          <div className="flex flex-col items-center border-4 border-yellow-300 mb-2 border-opacity-100 hover:border-opacity-0 transition-all duration-1000 ease-in-out relative group bg-white rounded-lg ">
            <Link to={`/product/${product.name}`}>
              <img
                src={product.image}
                alt={product.name}
                className="h-36 md:h-56 scale-75 transition-transform duration-1000 ease-in-out hover:scale-100 object-contain"
              />
            </Link>
            <Button
              className="bg-yellow-300 w-full p-2 hidden group-hover:flex justify-center items-center absolute bottom-0 transition-all duration-1000 ease-in-out"
              onClick={() => increaseCartQuantity(product.id)}
            >
              <FaCartShopping size={20} color="#222831" />
            </Button>
          </div>
          <p className="text-xs md:text-md ml-2 cursor-default">
            {product.brand}
          </p>
          <Link
            to={`/product/${product.name}`}
            className="line-clamp-1 text-xs md:text-base ml-2 underline text-white font-bold hover:text-yellow-300"
          >
            {product.name}
          </Link>
          <p className="font-bold text-md md:text-base ml-2 cursor-default">
            {formatPrice(product.price)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductsDisplay;
