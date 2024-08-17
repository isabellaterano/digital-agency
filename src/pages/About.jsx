import { motion } from "framer-motion";
import about1 from "../assets/images/services1.jpg";
import about2 from "../assets/images/services2.jpg";

const About = () => {
  return (
    <section className="min-h-screen py-24 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about Forge and how we help brands succeed in the digital
            world.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:space-x-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 mb-8 lg:mb-0"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src={about1} alt="Our Mission" className="rounded-md mb-6" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Forge is dedicated to providing exceptional UI/UX design,
                development, and marketing solutions. Our mission is to create
                compelling digital experiences that drive business growth and
                engage audiences effectively.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={about2}
                alt="Our Approach"
                className="rounded-md mb-6"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Approach
              </h2>
              <p className="text-gray-700 leading-relaxed">
                With years of expertise and a commitment to excellence, we
                deliver tailored solutions that meet our clients unique needs.
                Whether you&apos;re a new venture or an established brand, we
                work closely with you to achieve outstanding results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
