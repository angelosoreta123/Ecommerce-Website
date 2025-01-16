import useFilter from "../../hooks/useFilter";
import { formatPrice } from "../../utility/formatPrice";
import Button from "../shared/Button";

const PriceRangeSlider = () => {
  const { priceSliderValue, handlePriceSliderValueChange } = useFilter();

  return (
    <div className="hidden md:flex flex-col p-4 gap-4 h-fit">
      <p className="font-bold min-w-60">FILTER BY PRICE</p>
      <p className="text-sm text-white ">
        Price: <span>₱900.00</span> - {formatPrice(priceSliderValue)}
      </p>

      <input
        type="range"
        min="900"
        max="155999"
        value={priceSliderValue}
        onChange={handlePriceSliderValueChange}
        className="w-full appearance-none bg-gray-300 h-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      />
      <Button className="bg-yellow-300 hover:bg-yellow-400 rounded-full p-2 text-charcoalGray text-sm">
        FILTER
      </Button>
    </div>
  );
};

export default PriceRangeSlider;
