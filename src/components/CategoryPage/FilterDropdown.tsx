import useFilter from "../../hooks/useFilter";

const FilterDropdown = () => {
  const { dropDownValue, handleDropDownValueChange } = useFilter();
  return (
    <select
      name="Sort"
      id="Sort"
      aria-label="Sort options"
      className="border border-charcoal outline-none p-2 px-4 text-charcoalGray rounded-lg"
      value={dropDownValue}
      onChange={handleDropDownValueChange}
    >
      <option value="All">Sort</option>
      <option value="Latest">Sort by Latest</option>
      <option value="Lowest">Sort by price: Low to High</option>
      <option value="Highest">Sort by price: High to Low</option>
    </select>
  );
};

export default FilterDropdown;
