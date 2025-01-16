import { ChangeEventHandler, createContext, ReactNode, useState } from "react";

interface FilterContextProviderProps {
  children: ReactNode;
}

interface FilterContext {
  dropDownValue: string;
  handleDropDownValueChange: ChangeEventHandler<HTMLSelectElement>;
  priceSliderValue: number;
  handlePriceSliderValueChange: ChangeEventHandler<HTMLInputElement>;
  checkBoxValue: string[]; // Update to an array for multiple checkbox selections
  handleCheckboxValueChange: (data: string) => void;
}

export const FilterContext = createContext({} as FilterContext);

const FilterContextProvider = ({ children }: FilterContextProviderProps) => {
  const [dropDownValue, setDropDownValue] = useState<string>("All");
  const [priceSliderValue, setPriceSliderValue] = useState<number>(155999);
  const [checkBoxValue, setCheckBoxValue] = useState<string[]>([]); // Initialize as an empty array

  const handleDropDownValueChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDropDownValue(e.target.value);
  };

  const handlePriceSliderValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPriceSliderValue(Number(e.target.value));
  };

  const handleCheckboxValueChange = (brand: string) => {
    setCheckBoxValue((prevValue) => {
      if (prevValue.includes(brand)) {
        return prevValue.filter((item) => item !== brand);
      } else {
        return [...prevValue, brand];
      }
    });
  };

  return (
    <FilterContext.Provider
      value={{
        dropDownValue,
        handleDropDownValueChange,
        priceSliderValue,
        handlePriceSliderValueChange,
        checkBoxValue,
        handleCheckboxValueChange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
