import service1 from "../assets/images/business1.jpg";
import service2 from "../assets/images/business2.jpg";
import service3 from "../assets/images/business3.jpg";

const Business = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto md:p-7">
        <h2 className=" text-xl md:text-3xl font-bold text-center mb-8 uppercase">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={service2}
              alt="UI/UX Design"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-700">
                We specialize in creating intuitive and user-friendly interfaces
                that enhance user experience and drive engagement.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={service1}
              alt="Development"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-700">
                Our expert developers build robust and scalable solutions
                tailored to meet the unique needs of your business.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={service3}
              alt="Marketing Solutions"
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Marketing Solutions
              </h3>
              <p className="text-gray-700">
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
