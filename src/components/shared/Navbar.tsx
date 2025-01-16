import LinkNav from "./LinkNav";

const Navbar = () => {
  const nav: String[] = [
    "Home",
    "Processor",
    "Motherboard",
    "Monitor",
    "Peripherals",
    "Laptop",
  ];

  return (
    <nav className="max-w-7xl mx-auto hidden md:block text-dark-blue p-4 text-base font-semibold w-full text-white">
      <div className="flex gap-10 justify-center w-full">
        {nav.map((item, index) => (
          <LinkNav
            key={index}
            to={`${
              item === "Home" ? "/" : `/product-category/${item.toLowerCase()}`
            }`}
          >
            {item}
          </LinkNav>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
