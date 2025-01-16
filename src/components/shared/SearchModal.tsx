import { ProductsType } from "../../data/products";
import { formatPrice } from "../../utility/formatPrice";
import { Link } from "react-router-dom";

interface SearchModalProps {
  products: ProductsType[];
  value: string;
  showSearchModal: boolean;
}

const SearchModal = ({
  products,
  value,
  showSearchModal = false,
}: SearchModalProps) => {
  // Filter products based on the search value
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(value.toLowerCase()) ||
      product.brand.toLowerCase().includes(value.toLowerCase()) ||
      product.category.toLowerCase().includes(value.toLowerCase()) ||
      product.subCategory?.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div
      className={`${
        showSearchModal
          ? "absolute p-4 bg-white text-charcoalGray border-none text-sm max-h-[500px] z-50 w-full top-12 overflow-y-auto"
          : "hidden"
      }`}
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Link
            to={`/product/${product.name}`}
            key={product.id}
            className="flex flex-row gap-2 items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-50 w-20 object-contain"
            />
            <div className="flex-1 w-full">
              <p>{product.name}</p>
              <p className="font-bold">{formatPrice(product.price)}</p>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-charcoalGray">No products found.</p>
      )}
    </div>
  );
};

export default SearchModal;
