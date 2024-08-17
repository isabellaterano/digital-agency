import Brands from "../components/Brands";
import Business from "../components/Business";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mx-8">
        <Brands />
        <Stats />
        <Business />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
