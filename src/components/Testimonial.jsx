import { useState } from "react";
import image from "../assets/images/user1.jpg";
import image2 from "../assets/images/user2.jpg";
import image3 from "../assets/images/user3.jpg";
import { GreaterThan, LessThan, Quotes } from "@phosphor-icons/react";

const Testimonial = () => {
  const Testimonial = [
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
  const length = Testimonial.length;

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className="flex p-2 md:p-8 justify-center items-center min-h-dvh flex-col">
      {" "}
      <h1 className="text-center font-bold uppercase text-xl md:text-3xl mb-8">
        Here's what our clients say.
      </h1>
      <div className="bg-zinc-400 rounded-md p-8">
        {Testimonial.map(
          (item, index) =>
            index === current && (
              <div key={index}>
                <div className="pb-10 flex items-start gap-4">
                  <Quotes size={68} color="#874fe8" weight="duotone" />
                  <h2 className="text-lg md:text-2xl font-bold">{item.text}</h2>
                </div>
                <div className="lg:flex justify-between items-end">
                  <div className="flex gap-4 items-center">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        width={110}
                        className="rounded-full border border-purple-700 p-1"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <span>{item.work}</span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 mt-8">
                    <div
                      onClick={previous}
                      className="bg-purple-700 p-4 cursor-pointer rounded-full hover:opacity-85"
                    >
                      <LessThan size={20} color="#fff" />
                    </div>
                    <div
                      onClick={next}
                      className="bg-purple-700 p-4 cursor-pointer rounded-full hover:opacity-85"
                    >
                      <GreaterThan size={20} color="#fff" />
                    </div>
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
