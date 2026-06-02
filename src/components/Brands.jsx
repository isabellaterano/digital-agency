import brand1 from "../assets/brands/brand1.svg";
import brand2 from "../assets/brands/brand2.svg";
import brand3 from "../assets/brands/brand3.svg";
import brand4 from "../assets/brands/brand4.svg";
import brand5 from "../assets/brands/brand5.svg";

const Brands = () => {
  return (
    <section className="py-20 border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-slate-500 mb-12">
          Trusted by innovative companies worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
          {[brand1, brand2, brand3, brand4, brand5].map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`Brand ${index}`}
              className="
            h-10
            w-auto
            mx-auto
            opacity-50
            grayscale
            hover:opacity-100
            hover:grayscale-0
            transition-all
            duration-300
          "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
