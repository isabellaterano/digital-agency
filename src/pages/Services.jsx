import { motion } from "framer-motion";
import path from "../assets/services/path.svg";
import chart from "../assets/services/chart.svg";
import light from "../assets/services/light.svg";
import integration from "../assets/services/integration.svg";
import trend from "../assets/services/trend.svg";
import support from "../assets/services/support.svg";
import services1 from "../assets/images/services1.jpg";
import services2 from "../assets/images/services2.jpg";
const features = [
  {
    icon: path,
    title: "Growth Strategy",
    description:
      "Data-driven strategies designed to maximize conversions and long-term business growth.",
  },
  {
    icon: integration,
    title: "Technology Integration",
    description:
      "Modern technologies and automation systems seamlessly integrated into your workflow.",
  },
  {
    icon: support,
    title: "Expert Support",
    description:
      "Dedicated specialists helping you scale and optimize every step of your journey.",
  },
  {
    icon: chart,
    title: "Advanced Analytics",
    description:
      "Track performance, uncover opportunities and make smarter decisions.",
  },
  {
    icon: light,
    title: "Custom Solutions",
    description:
      "Tailored digital experiences built specifically around your business goals.",
  },
  {
    icon: trend,
    title: "Continuous Innovation",
    description:
      "Stay ahead of the competition through ongoing improvements and innovation.",
  },
];
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
export default function Services() {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {" "}
      {/* Glow Effects */}{" "}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[150px]" />{" "}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/20 blur-[150px]" />{" "}
      <div className="relative max-w-7xl mx-auto px-6">
        {" "}
        {/* Heading */}{" "}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-4xl mx-auto"
        >
          {" "}
          <span className="inline-flex px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
            {" "}
            OUR SERVICES{" "}
          </span>{" "}
          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white">
            {" "}
            Digital solutions built{" "}
            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              to accelerate growth{" "}
            </span>{" "}
          </h2>{" "}
          <p className="mt-6 text-lg text-slate-400">
            {" "}
            We help ambitious brands scale through strategy, design, development
            and performance marketing.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* Showcase */}{" "}
        <div className="grid lg:grid-cols-2 gap-10 mt-24">
          {" "}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl "
          >
            {" "}
            <img
              src={services1}
              alt="Services"
              className=" h-full w-full object-cover hover:scale-105 transition-transform duration-700 "
            />{" "}
          </motion.div>{" "}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" rounded-[32px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl "
          >
            {" "}
            <img
              src={services2}
              alt="Services"
              className=" h-full w-full object-cover hover:scale-105 transition-transform duration-700 "
            />{" "}
          </motion.div>{" "}
        </div>{" "}
        {/* Features Grid */}{" "}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {" "}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className=" p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:-translate-y-2 transition-all duration-300 "
            >
              {" "}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center mb-6">
                {" "}
                <img
                  src={feature.icon}
                  alt=""
                  className="w-7 h-7 brightness-0 invert"
                />{" "}
              </div>{" "}
              <h3 className="text-xl font-bold text-white mb-4">
                {" "}
                {feature.title}{" "}
              </h3>{" "}
              <p className="text-slate-400 leading-relaxed">
                {" "}
                {feature.description}{" "}
              </p>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
