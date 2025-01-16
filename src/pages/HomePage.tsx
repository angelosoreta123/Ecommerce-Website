import Hero from "../components/HomePage/Hero";
import Categories from "../components/HomePage/Categories";
import FeaturedProducts from "../components/HomePage/FeaturedProducts";
import NewProducts from "../components/HomePage/NewProducts";
import H1 from "../components/HomePage/H1";

const HomePage = () => {
  return (
    <div className="w-full text-white">
      <div className="flex flex-col max-w-7xl mx-auto gap-10 p-4">
        <Hero />
        <H1>Products</H1>
        <Categories />
        <H1>Featured Products</H1>
        <FeaturedProducts />
        <H1>New Products</H1>
        <NewProducts />
      </div>
    </div>
  );
};

export default HomePage;
