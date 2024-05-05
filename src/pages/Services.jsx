import path from "../assets/services/path.svg";
import chart from "../assets/services/chart.svg";
import light from "../assets/services/light.svg";
import integration from "../assets/services/integration.svg";
import trend from "../assets/services/trend.svg";
import support from "../assets/services/support.svg";
import services1 from "../assets/images/services1.jpg";
import services2 from "../assets/images/services2.jpg";

const Services = () => (
  <div className="max-w-screen overflow-x-hidden min-h-dvh">
    <section className="text-black">
      <div className="container max-w-xl p-6 py-12 mx-auto space-y-12 lg:p-8 lg:max-w-7xl lg:space-y-24">
        <div className="pt-20">
          <h1 className="text-3xl font-bold tracking-tight text-center sm:text-5xl ">
            Empowering Businesses Digitally
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-center lg:text-xl">
            Accelerate Growth Through Cutting-Edge Digital Solutions and
            Expertise
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Where Innovation Thrives
            </h3>
            <p className="mt-3 text-base">
              Propel your business forward with our range of digital solutions,
              optimizing operations, integrating innovative technologies, and
              receiving personalized support.
            </p>
            <div className="mt-8 space-y-6">
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
          </div>
          <div>
            <img
              src={services1}
              alt="image1"
              className="w-full rounded-lg shadow-lg lg:max-w-none"
            />
          </div>
        </div>
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src={services2}
              alt="image2"
              className="w-full rounded-lg shadow-lg lg:max-w-none"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Data-Driven Decisions, Personalized Solutions
            </h3>
            <p className="mt-3 text-base">
              Drive your business with data-driven decisions and personalized
              solutions, continuously innovating and future-proofing your
              strategies.
            </p>
            <div className="mt-8 space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  </div>
);

const FeatureItem = ({ imgSrc, title, description }) => (
  <div className="flex space-x-4">
    <img src={imgSrc} alt="logo" className="w-12 h-12 flex-shrink-0" />
    <div className="flex flex-col">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

export default Services;
