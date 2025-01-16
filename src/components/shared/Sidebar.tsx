import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const nav: String[] = [
    "Home",
    "Processor",
    "Motherboard",
    "Monitor",
    "Peripherals",
    "Laptop",
  ];
  return (
    <div className="md:hidden relative flex">
      <Hamburger size={20} toggled={isOpen} toggle={setOpen} color="white" />
      {isOpen && (
        <div className="absolute bg-charcoalGray text-white top-16 z-50 right-5 rounded-lg w-52 border-4 border-yellow-300 p-4 text-center flex flex-col gap-4 font-bold">
          {nav.map((item, index) => (
            <Link
              key={index}
              to={`${
                item === "Home"
                  ? "/"
                  : `/product-category/${item.toLowerCase()}`
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
