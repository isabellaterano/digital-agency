import { useState } from "react";
import image from "../assets/images/user1.jpg";
import image2 from "../assets/images/user2.jpg";
import image3 from "../assets/images/user3.jpg";
import { GreaterThan, LessThan, Quotes } from "@phosphor-icons/react";

const Testimonial = () => {
  const testimonials = [
    {
      image: image,
      text: "Forge provided exceptional service, exceeding our expectations at every turn. Their team's attention to detail and commitment to excellence truly set them apart. We highly recommend Forge for any digital project.",
      name: "Sarah Smith",
      work: "Tech Solutions Inc.",
    },
    {
      image: image2,
      text: "Forge transformed our online presence with their innovative design and development solutions. Their expertise and professionalism were evident throughout the entire process. Working with Forge was a game-changer for our business.",
      name: "Michael Johnson",
      work: "Marketing Masters",
    },
    {
      image: image3,
      text: "We couldn't be happier with the results delivered by Forge. Their team's creativity, expertise, and dedication helped us achieve our goals and elevate our brand. Forge is a trusted partner we'll continue to collaborate with in the future.",
      name: "Emily Brown",
      work: "E-Commerce Emporium",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className="flex justify-center items-center flex-col py-24 px-4 md:px-8">
      <h1 className="text-center font-extrabold text-2xl md:text-4xl mb-12">
        Here&apos;s what our clients say
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
        {testimonials.map(
          (item, index) =>
            index === current && (
              <div key={index}>
                <div className="flex items-start gap-4 pb-6">
                  <Quotes size={48} color="#874fe8" weight="duotone" />
                  <h2 className="text-lg md:text-xl font-semibold text-gray-700">
                    {item.text}
                  </h2>
                </div>
                <div className="lg:flex justify-between items-end">
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={90}
                      className="rounded-full border-4 border-purple-600 p-1"
                    />
                    <div>
                      <p className="font-bold text-gray-800">{item.name}</p>
                      <span className="text-sm text-gray-500">{item.work}</span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 mt-8 lg:mt-0">
                    <button
                      onClick={previous}
                      className="bg-purple-700 p-3 rounded-full text-white hover:bg-purple-800 transition-colors"
                    >
                      <LessThan size={20} />
                    </button>
                    <button
                      onClick={next}
                      className="bg-purple-700 p-3 rounded-full text-white hover:bg-purple-800 transition-colors"
                    >
                      <GreaterThan size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Testimonial;
