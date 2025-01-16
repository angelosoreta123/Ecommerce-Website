import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchModal from "./SearchModal";
import products from "../../data/products";

const SearchProduct = () => {
  const [value, setValue] = useState<string>("");
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);

  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue === "") {
      setShowSearchModal(false);
    } else {
      setShowSearchModal(true);
    }
  };

  const handleBlur = () => {
    setShowSearchModal(false);
  };
  return (
    <div className="relative w-full">
      <SearchBar
        value={value}
        onChange={handleSearchBarChange}
        onBlur={handleBlur}
      />
      <SearchModal
        products={products}
        value={value}
        showSearchModal={showSearchModal}
      />
    </div>
  );
};

export default SearchProduct;
