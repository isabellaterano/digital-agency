import Brands from "../components/Brands";
import Businness from "../components/Business";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="md:mx-8 mx-2">
        <Stats />
        <Businness />
        <Testimonial />
        <Brands />
      </div>
    </div>
  );
};

export default Home;
