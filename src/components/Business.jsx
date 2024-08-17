import service1 from "../assets/images/business1.jpg";
import service2 from "../assets/images/business2.jpg";
import service3 from "../assets/images/business3.jpg";

const Business = () => {
  return (
    <section className="py-16 mb-4">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12 ">
          What we do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src={service2}
              alt="UI/UX Design"
              className="w-full h-64 object-cover object-center transition-opacity duration-300 hover:opacity-90"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                UI/UX Design
              </h3>
              <p className="text-gray-600">
                We specialize in creating intuitive and user-friendly interfaces
                that enhance user experience and drive engagement.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src={service1}
              alt="Development"
              className="w-full h-64 object-cover object-center transition-opacity duration-300 hover:opacity-90"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Development
              </h3>
              <p className="text-gray-600">
                Our expert developers build robust and scalable solutions
                tailored to meet the unique needs of your business.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src={service3}
              alt="Marketing Solutions"
              className="w-full h-64 object-cover object-center transition-opacity duration-300 hover:opacity-90"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Marketing Solutions
              </h3>
              <p className="text-gray-600">
                We offer strategic marketing solutions to help your business
                reach its target audience and drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
