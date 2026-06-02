import Brands from "../components/Brands";
import Business from "../components/Business";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <div>
        <Brands />
        <Business />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
