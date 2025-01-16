import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  const nav: String[] = [
    "Home",
    "Processor",
    "Motherboard",
    "Monitor",
    "Peripherals",
    "Laptop",
  ];
  return (
    <footer className="flex w-full bg-charcoal text-white">
      <div className="max-w-7xl w-full mx-auto min-h-[40dvh] p-4 flex flex-col gap-10 justify-center md:flex-row md:items-center md:justify-evenly">
        <Logo />
        <div className="flex flex-col gap-4">
          <p className="font-bold">Menu</p>
          <div className="flex flex-col gap-2">
          {nav.map((item, index) => (
            <Link
            className="border-b border-b-charcoalGray"
              key={index}
              to={`${
                item === "Home"
                  ? "/"
                  : `/product-category/${item.toLowerCase()}`
              }`}
            >
             <span className="mr-4">&gt;</span> {item}
            </Link>
          ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
