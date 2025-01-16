import ProductCategoryPage from "./ProductCategoryPage";
import { filterCategory } from "../../utility/filterCategory";
import useFilter from "../../hooks/useFilter";

interface FilterByCategoryProps {
  category: string;
}

const FilterByCategory = ({ category }: FilterByCategoryProps) => {
  const { dropDownValue, priceSliderValue, checkBoxValue } = useFilter();
  const filteredCategory = filterCategory({ category });

  const checkBoxBrand = checkBoxValue.map((brand) => brand);

  const filteredProducts = filteredCategory
    .sort((a, b) => {
      if (dropDownValue === "All") {
        return a.id - b.id;
      } else if (dropDownValue === "Latest") {
        return b.id - a.id;
      } else if (dropDownValue === "Lowest") {
        return a.price - b.price;
      } else if (dropDownValue === "Highest") {
        return b.price - a.price;
      }
      return 0;
    })
    .filter((product) => product.price <= priceSliderValue)
    .filter((product) =>
      checkBoxBrand.length === 0
        ? filteredCategory
        : checkBoxBrand.includes(product.brand)
    );

  return (
    <ProductCategoryPage category={category} products={filteredProducts} />
  );
};

export default FilterByCategory;
