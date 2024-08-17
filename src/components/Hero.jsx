import { ArrowRight } from "@phosphor-icons/react";

const Hero = () => {
  return (
    <section className="lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
          <span className="font-inter text-xs font-medium text-gray-900 ml-3">
            Explore how to use for brands.
          </span>
          <a
            href="/services"
            className="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
          >
            <ArrowRight className="text-white" />
          </a>
        </div>
        <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
          Transform Your Vision into Digital
          <span className="text-indigo-600"> Reality </span>
        </h1>
        <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
          Empowering businesses with innovative design, development, and
          marketing solutions that drive success.
        </p>
        <a
          href="/services"
          className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500 gap-2"
        >
          Get Started Today
          <ArrowRight className="text-white" />
        </a>
        <div className="flex justify-center">
          <img
            src="https://pagedone.io/asset/uploads/1691054543.png"
            alt="Dashboard image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
