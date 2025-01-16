import { FaMagnifyingGlass } from "react-icons/fa6";
import { ChangeEventHandler, FocusEventHandler } from "react";

interface SearchBarProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
}

const SearchBar = ({ value, onChange, onBlur }: SearchBarProps) => {
  return (
    <div className="items-center border bg-white py-2 rounded-full w-full hidden md:flex px-5">
      <input
        type="text"
        name="searchProduct"
        id="searchProduct"
        placeholder="Search Products..."
        className="outline-none border-none w-full bg-white bg-inherit text-sm"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <FaMagnifyingGlass size={20} className="cursor-pointer" />
    </div>
  );
};

export default SearchBar;
