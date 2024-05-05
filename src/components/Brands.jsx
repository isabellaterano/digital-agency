import brand1 from "../assets/brands/brand1.svg";
import brand2 from "../assets/brands/brand2.svg";
import brand3 from "../assets/brands/brand3.svg";
import brand4 from "../assets/brands/brand4.svg";
import brand5 from "../assets/brands/brand5.svg";

const Brands = () => {
  return (
    <section className="my-8 p-4 rounded-md">
      <p className="text-center mb-5 font-bold">
        a total of +1000 clients have trusted our services.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <img
          src={brand1}
          alt=""
          className="w-32 md:w-auto md:max-w-xs lg:w-auto lg:max-w-sm"
        />
        <img
          src={brand2}
          alt=""
          className="w-32 md:w-auto md:max-w-xs lg:w-auto lg:max-w-sm"
        />
        <img
          src={brand3}
          alt=""
          className="w-32 md:w-auto md:max-w-xs lg:w-auto lg:max-w-sm"
        />
        <img
          src={brand4}
          alt=""
          className="w-32 md:w-auto md:max-w-xs lg:w-auto lg:max-w-sm"
        />
        <img
          src={brand5}
          alt=""
          className="w-32 md:w-auto md:max-w-xs lg:w-auto lg:max-w-sm"
        />
      </div>
    </section>
  );
};

export default Brands;
