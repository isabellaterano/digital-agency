import service1 from "../assets/images/business1.jpg";
import service2 from "../assets/images/business2.jpg";
import service3 from "../assets/images/business3.jpg";
import {
  GraduationCap,
  Code,
  Briefcase,
  ChartBar,
  ArrowRight,
} from "@phosphor-icons/react";
const features = [
  {
    icon: GraduationCap,
    title: "Industry Expertise",
    description:
      "Our team combines creativity and technical expertise to deliver impactful digital solutions.",
  },
  {
    icon: Code,
    title: "Modern Development",
    description:
      "Fast, scalable and secure websites built with the latest technologies.",
  },
  {
    icon: ChartBar,
    title: "Growth Focused",
    description:
      "Every decision is backed by data and focused on generating measurable business results.",
  },
  {
    icon: Briefcase,
    title: "Client Partnership",
    description:
      "We work as an extension of your team, helping you achieve long-term success.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Innovation",
    description:
      "We stay ahead of trends to keep your brand competitive in a fast-changing market.",
  },
  {
    icon: ChartBar,
    title: "Proven Results",
    description:
      "A track record of successful projects that drive conversions, growth and engagement.",
  },
];
const services = [
  {
    image: service2,
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive digital experiences designed to increase engagement and conversions.",
  },
  {
    image: service1,
    title: "Web Development",
    description:
      "High-performance websites and applications built for speed, scalability and growth.",
  },
  {
    image: service3,
    title: "Digital Marketing",
    description:
      "Strategic campaigns that attract the right audience and accelerate business growth.",
  },
];
const Business = () => {
  return (
    <>
      {" "}
      {/* WHY CHOOSE US */}{" "}
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        {" "}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 blur-[120px]" />{" "}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/20 blur-[120px]" />{" "}
        <div className="relative max-w-7xl mx-auto px-6">
          {" "}
          <div className="max-w-3xl mb-16">
            {" "}
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
              {" "}
              WHY FORGE{" "}
            </span>{" "}
            <h2 className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight">
              {" "}
              More than a{" "}
              <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Digital Agency{" "}
              </span>{" "}
            </h2>{" "}
            <p className="mt-6 text-lg text-slate-400 max-w-2xl">
              {" "}
              We combine strategy, design and technology to create digital
              experiences that help ambitious brands grow faster.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className=" group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-indigo-500/40 hover:-translate-y-2 transition-all duration-300 "
                >
                  {" "}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center mb-6">
                    {" "}
                    <Icon size={28} className="text-white" />{" "}
                  </div>{" "}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {" "}
                    {feature.title}{" "}
                  </h3>{" "}
                  <p className="text-slate-400 leading-relaxed">
                    {" "}
                    {feature.description}{" "}
                  </p>{" "}
                </div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* SERVICES */}{" "}
      <section className="py-28 bg-white">
        {" "}
        <div className="max-w-7xl mx-auto px-6">
          {" "}
          <div className="text-center max-w-3xl mx-auto">
            {" "}
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold">
              {" "}
              OUR SERVICES{" "}
            </span>{" "}
            <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
              {" "}
              Everything your business{" "}
              <span className="block"> needs to grow online </span>{" "}
            </h2>{" "}
            <p className="mt-6 text-lg text-slate-600">
              {" "}
              From strategy and design to development and marketing, we help
              brands build a powerful digital presence.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid lg:grid-cols-3 gap-8 mt-20">
            {" "}
            {services.map((service, index) => (
              <div
                key={index}
                className=" group overflow-hidden rounded-3xl border border-slate-200 bg-white hover:border-indigo-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 "
              >
                {" "}
                <div className="overflow-hidden">
                  {" "}
                  <img
                    src={service.image}
                    alt={service.title}
                    className=" h-72 w-full object-cover group-hover:scale-110 transition-transform duration-700 "
                  />{" "}
                </div>{" "}
                <div className="p-8">
                  {" "}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {" "}
                    {service.title}{" "}
                  </h3>{" "}
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {" "}
                    {service.description}{" "}
                  </p>{" "}
                  <button className=" inline-flex items-center gap-2 font-semibold text-indigo-600 hover:gap-3 transition-all ">
                    {" "}
                    Learn More <ArrowRight size={18} />{" "}
                  </button>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
};
export default Business;
