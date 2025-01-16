import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { formatPrice } from "../utility/formatPrice";
import Button from "../components/shared/Button";
import useCart from "../hooks/useCart";

const ProductPage = () => {
  const { productName } = useParams<{ productName: string }>();
  const product = products.find((p) => p.name === productName);
  const { increaseCartQuantity, getItemQuantity } = useCart();
  return (
    <section className="max-w-7xl mx-auto mt-10 px-4 flex flex-col gap-10 md:gap-40 text-white">
      {!product ? (
        <div className="flex flex-col gap-4 items-center text-2xl text-center">
          <p>Product not found.</p>{" "}
          <Link
            to={"/"}
            className="font-bold border-b-2 border-b-yellow-300 hover:border-b-yellow-400"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="flex gap-4">
            <Link to={"/"} className="font-bold">
              Home
            </Link>
            <p> &gt; </p>
            <p>{product.category}</p>
            <p> &gt; </p>
            {product.subCategory && (
              <>
                <p>{product.subCategory}</p>
                <p> &gt; </p>
              </>
            )}
            <p>{product.name}</p>
          </div>
          <div className="grid md:grid-cols-2 grid-rows-2 items-center">
            <img
              src={product.image}
              alt={product.name}
              className="h-96 w-96 rounded-lg border-4 border-yellow-300 object-contain bg-white"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-2xl font-bold">{formatPrice(product.price)}</p>
              <p>-Available for Delivery</p>
              <p>-Available for Pick Up</p>
              <Button
                className="bg-yellow-300 hover:bg-yellow-400 rounded-full h-fit text-sm w-40 p-3 text-charcoalGray"
                onClick={() => increaseCartQuantity(product.id)}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductPage;
