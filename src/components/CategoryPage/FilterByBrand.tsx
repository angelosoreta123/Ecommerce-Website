import { filterCategory } from "../../utility/filterCategory";
import useFilter from "../../hooks/useFilter";

const FilterByBrand = ({ category }: { category: string }) => {
  const filteredCategory = filterCategory({ category });
  const brands = [...new Set(filteredCategory.map((product) => product.brand))];
  const { checkBoxValue, handleCheckboxValueChange } = useFilter();

  return (
    <div className="hidden md:flex flex-col p-4 gap-4 h-fit">
      <p className="font-bold min-w-60">Brand</p>
      <div className="flex flex-col gap-4">
        {brands.map((brand) => (
          <label
            className="flex items-center gap-2 text-sm cursor-pointer hover:font-bold"
            key={brand}
          >
            <input
              type="checkbox"
              name={brand}
              id={brand}
              value={brand}
              checked={checkBoxValue.includes(brand)}
              onChange={() => handleCheckboxValueChange(brand)} // Handle the checkbox change
            />
            {brand}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterByBrand;
