import image1 from "../../assets/images/hero/image1.png";
import image2 from "../../assets/images/hero/image2.png";
import image3 from "../../assets/images/hero/image3.png";
import { TECarousel, TECarouselItem } from "tw-elements-react";

const Hero = () => {
  return (
      <TECarousel showIndicators ride="carousel">
        <section className="max-w-7xl mx-auto last:mx-auto relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded-lg">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={image1}
              className="block w-full h-60 md:h-[500px]"
              alt="Desktop Hero 1"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={image2}
              className="block w-full h-60 md:h-[500px]"
              alt="Desktop Hero 2"
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={image3}
              className="block w-full h-60 md:h-[500px]"
              alt="Desktop Hero 3"
            />
          </TECarouselItem>
        </section>
      </TECarousel>
  );
};

export default Hero;
