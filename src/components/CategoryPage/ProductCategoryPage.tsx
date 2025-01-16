import { ProductsType } from "../../data/products";
import ProductsDisplay from "./ProductsDisplay";
import FilterByBrand from "./FilterByBrand";
import FilterDropDown from "./FilterDropdown";
import PriceRangeSlider from "./PriceRangeSlider";
import { Link } from "react-router-dom";
import { ChangeEventHandler } from "react";

interface ProductCategoryPageProps {
  products: ProductsType[];
  category: string;
  subCategory?: string;
}

const ProductCategoryPage = ({
  products,
  category,
  subCategory,
}: ProductCategoryPageProps) => {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4 flex flex-col gap-10 md:gap-20 text-white">
      <div className="flex gap-4">
        <Link to={"/"} className="font-bold">
          Home
        </Link>
        <p> &gt; </p>
        <p>{category}</p>
        {subCategory && (
          <>
            <p> &gt; </p>
            <p>{subCategory}</p>
          </>
        )}
      </div>
      <div className="flex md:justify-between flex-col md:flex-row items-center gap-4">
        <h1 className="text-2xl font-bold">{category}</h1>
        <FilterDropDown />
      </div>
      <div className="flex flex-row">
        <div>
          <PriceRangeSlider />
          <FilterByBrand category={category} />
        </div>
        <div>
          <ProductsDisplay products={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryPage;
