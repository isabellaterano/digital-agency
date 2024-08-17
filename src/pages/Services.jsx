import { motion } from "framer-motion";
import path from "../assets/services/path.svg";
import chart from "../assets/services/chart.svg";
import light from "../assets/services/light.svg";
import integration from "../assets/services/integration.svg";
import trend from "../assets/services/trend.svg";
import support from "../assets/services/support.svg";
import services1 from "../assets/images/services1.jpg";
import services2 from "../assets/images/services2.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Services = () => (
  <div className="max-w-screen overflow-x-hidden min-h-screen text-gray-800 py-24 ">
    <section className="pb-20">
      <motion.div
        className="container mx-auto space-y-12 lg:space-y-24 px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="text-center pt-12" variants={fadeInUp}>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Empowering Businesses Digitally
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 lg:text-xl">
            Accelerate Growth Through Cutting-Edge Digital Solutions and
            Expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 lg:items-center">
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Where Innovation Thrives
            </h3>
            <p className="text-base text-gray-600 mb-6">
              Propel your business forward with our range of digital solutions,
              optimizing operations, integrating innovative technologies, and
              receiving personalized support.
            </p>
            <div className="space-y-8">
              <FeatureItem
                imgSrc={path}
                title="Advanced Algorithmic Solutions"
                description="Leverage our advanced algorithms to optimize your operations and make data-driven decisions with actionable insights."
              />
              <FeatureItem
                imgSrc={integration}
                title="Innovative Technology Integration"
                description="Seamlessly integrate cutting-edge technologies like AI, IoT, and cloud computing to automate tasks and unlock growth potential."
              />
              <FeatureItem
                imgSrc={support}
                title="Trained Personnel Support"
                description="Benefit from our trained experts who ensure smooth implementation and provide ongoing guidance for effective software utilization."
              />
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={fadeInUp}
          >
            <img
              src={services1}
              alt="Digital services"
              className="rounded-lg shadow-lg w-full lg:max-w-lg"
            />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 lg:items-center">
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={fadeInUp}
          >
            <img
              src={services2}
              alt="Digital solutions"
              className="rounded-lg shadow-lg w-full lg:max-w-lg"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Data-Driven Decisions, Personalized Solutions
            </h3>
            <p className="text-base text-gray-600 mb-6">
              Drive your business with data-driven decisions and personalized
              solutions, continuously innovating and future-proofing your
              strategies.
            </p>
            <div className="space-y-8">
              <FeatureItem
                imgSrc={chart}
                title="Powerful Analytics Capabilities"
                description="Extract valuable insights from your data with comprehensive visualizations, monitoring KPIs and identifying areas for improvement."
              />
              <FeatureItem
                imgSrc={light}
                title="Personalized Solutions"
                description="Receive tailored software solutions addressing your unique needs, aligning with your business objectives for sustainable growth."
              />
              <FeatureItem
                imgSrc={trend}
                title="Continuous Innovation and Upgrades"
                description="Stay ahead with the latest features and functionalities, adapting to market dynamics and gaining a competitive edge through continuous innovation."
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  </div>
);

const FeatureItem = ({ imgSrc, title, description }) => (
  <motion.div className="flex space-x-4 items-start" variants={fadeInUp}>
    <img src={imgSrc} alt={title} className="w-12 h-12 flex-shrink-0" />
    <div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default Services;
