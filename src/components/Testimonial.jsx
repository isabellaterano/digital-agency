import { useState } from "react";
import image from "../assets/images/user1.jpg";
import image2 from "../assets/images/user2.jpg";
import image3 from "../assets/images/user3.jpg";
import { CaretLeft, CaretRight, Quotes, Star } from "@phosphor-icons/react";
const testimonials = [
  {
    image,
    text: "Forge transformed our digital presence and helped us generate significantly more leads. Their attention to detail and strategic thinking exceeded expectations.",
    name: "Sarah Smith",
    work: "Tech Solutions Inc.",
  },
  {
    image: image2,
    text: "The entire experience was seamless. From design to development, the Forge team delivered a website that truly elevated our brand.",
    name: "Michael Johnson",
    work: "Marketing Masters",
  },
  {
    image: image3,
    text: "Professional, creative and results-driven. Working with Forge has been one of the best investments we've made for our business.",
    name: "Emily Brown",
    work: "E-Commerce Emporium",
  },
];
export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const previous = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const testimonial = testimonials[current];
  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">
      {" "}
      {/* Glow */}{" "}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-600/20 blur-[120px]" />{" "}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/20 blur-[120px]" />{" "}
      <div className="relative max-w-6xl mx-auto px-6">
        {" "}
        {/* Heading */}{" "}
        <div className="text-center mb-16">
          {" "}
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
            {" "}
            TESTIMONIALS{" "}
          </span>{" "}
          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white">
            {" "}
            Loved by our clients{" "}
          </h2>{" "}
          <p className="mt-4 text-slate-400 text-lg">
            {" "}
            See what businesses say about working with Forge.{" "}
          </p>{" "}
        </div>{" "}
        {/* Card */}{" "}
        <div className=" relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16 ">
          {" "}
          {/* Giant Quote */}{" "}
          <Quotes
            size={160}
            className=" absolute right-8 top-8 text-white/5 "
          />{" "}
          {/* Stars */}{" "}
          <div className="flex gap-1 mb-8">
            {" "}
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={20}
                weight="fill"
                className="text-yellow-400"
              />
            ))}{" "}
          </div>{" "}
          {/* Testimonial */}{" "}
          <p className="text-2xl md:text-3xl leading-relaxed text-white font-medium max-w-4xl">
            {" "}
            "{testimonial.text}"{" "}
          </p>{" "}
          {/* Bottom */}{" "}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mt-12">
            {" "}
            <div className="flex items-center gap-5">
              {" "}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className=" w-16 h-16 rounded-full object-cover border-2 border-indigo-500 "
              />{" "}
              <div>
                {" "}
                <h4 className="font-bold text-white text-lg">
                  {" "}
                  {testimonial.name}{" "}
                </h4>{" "}
                <p className="text-slate-400"> {testimonial.work} </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Controls */}{" "}
            <div className="flex items-center gap-4">
              {" "}
              <button
                onClick={previous}
                className=" w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition "
              >
                {" "}
                <CaretLeft size={20} />{" "}
              </button>{" "}
              <button
                onClick={next}
                className=" w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:scale-105 transition "
              >
                {" "}
                <CaretRight size={20} />{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
          {/* Dots */}{" "}
          <div className="flex justify-center gap-3 mt-12">
            {" "}
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${current === index ? "w-10 bg-indigo-500" : "w-2 bg-slate-600"}`}
              />
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
