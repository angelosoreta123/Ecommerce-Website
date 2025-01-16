import processor from "../../assets/images/productsBanner/Processor.jpg";
import motherboard from "../../assets/images/productsBanner/Motherboard.jpg";
import monitor from "../../assets/images/productsBanner/Monitor.jpg";
import keyboard from "../../assets/images/productsBanner/Keyboard.jpg";
import mouse from "../../assets/images/productsBanner/Mouse.jpg";
import headset from "../../assets/images/productsBanner/Headset.jpg";
import laptop from "../../assets/images/productsBanner/Laptop.jpg";
import { Link } from "react-router-dom";

interface Category {
  src: string;
  alt: string;
}

const Categories = () => {
  const categories: Category[] = [
    { src: processor, alt: "Processor" },
    { src: motherboard, alt: "Motherboard" },
    { src: monitor, alt: "Monitor" },
    { src: keyboard, alt: "Keyboard" },
    { src: mouse, alt: "Mouse" },
    { src: headset, alt: "Headset" },
    { src: laptop, alt: "Laptop" },
  ];

  return (
    <section className="grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-7 justify-between w-full grid-flow-row gap-6">
      {categories.map((category) => {
        const path: string = ["keyboard", "mouse", "headset"].includes(
          category.alt.toLowerCase()
        )
          ? `/product-category/peripherals/${category.alt.toLowerCase()}`
          : `/product-category/${category.alt.toLowerCase()}`;

        return (
          <Link to={path} key={category.alt}>
            <img
              src={category.src}
              alt={category.alt}
              className="cursor-pointer hover:shadow-2xl rounded-lg hover:shadow-slate-400 h-52 bg-white p-4 w-52 bg-contain"
            />
          </Link>
        );
      })}
    </section>
  );
};

export default Categories;
