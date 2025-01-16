import ProductCategoryPage from "./ProductCategoryPage";
import { filterSubCategory } from "../../utility/filterCategory";
import useFilter from "../../hooks/useFilter";

interface FilterBySubCategoryProps {
  category: string;
  subCategory: string;
}

const FilterBySubCategory = ({
  category,
  subCategory,
}: FilterBySubCategoryProps) => {
  const filteredCategory = filterSubCategory({ subCategory });
  const { dropDownValue, priceSliderValue, checkBoxValue } = useFilter();

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
    <ProductCategoryPage
      category={category}
      products={filteredProducts}
      subCategory={subCategory}
    />
  );
};

export default FilterBySubCategory;
