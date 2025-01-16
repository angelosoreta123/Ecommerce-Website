import { useState, useEffect } from "react";
import products from "../../data/products";
import ProductsDisplay from "./ProductsDisplay";
import { ProductsType } from "../../data/products";
import { shuffleArray } from "../../utility/shuffleArray";

const NewProducts = () => {
  const [visibleItemsCount, setVisibleItemsCount] = useState<number>(0);

  const newProducts: ProductsType[] = shuffleArray(products);

  const updateVisibleItems = (): void => {
    const screenWidth: number = window.innerWidth;
    if (screenWidth >= 1024) {
      setVisibleItemsCount(5); // For large screens
    } else if (screenWidth >= 640) {
      setVisibleItemsCount(3); // For medium screens
    } else {
      setVisibleItemsCount(2); // For small screens
    }
  };

  useEffect(() => {
    updateVisibleItems(); // Set initial visible items based on the screen size
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems); // Cleanup listener
  }, []);

  return (
    <ProductsDisplay
      products={newProducts}
      visibleItemsCount={visibleItemsCount}
    />
  );
};

export default NewProducts;
