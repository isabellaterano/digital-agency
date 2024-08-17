import brand1 from "../assets/brands/brand1.svg";
import brand2 from "../assets/brands/brand2.svg";
import brand3 from "../assets/brands/brand3.svg";
import brand4 from "../assets/brands/brand4.svg";
import brand5 from "../assets/brands/brand5.svg";

const Brands = () => {
  return (
    <section className="mb-4 py-8 px-4">
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
        <img
          src={brand1}
          alt="Brand 1"
          className="w-24 md:w-32 lg:w-40 transition-transform duration-300 hover:scale-110 hover:filter-none filter grayscale"
        />
        <img
          src={brand2}
          alt="Brand 2"
          className="w-24 md:w-32 lg:w-40 transition-transform duration-300 hover:scale-110 hover:filter-none filter grayscale"
        />
        <img
          src={brand3}
          alt="Brand 3"
          className="w-24 md:w-32 lg:w-40 transition-transform duration-300 hover:scale-110 hover:filter-none filter grayscale"
        />
        <img
          src={brand4}
          alt="Brand 4"
          className="w-24 md:w-32 lg:w-40 transition-transform duration-300 hover:scale-110 hover:filter-none filter grayscale"
        />
        <img
          src={brand5}
          alt="Brand 5"
          className="w-24 md:w-32 lg:w-40 transition-transform duration-300 hover:scale-110 hover:filter-none filter grayscale"
        />
      </div>
    </section>
  );
};

export default Brands;
