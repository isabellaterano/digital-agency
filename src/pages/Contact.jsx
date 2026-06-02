import { useState } from "react";
import { motion } from "framer-motion";
import {
  EnvelopeSimple,
  MapPin,
  Phone,
  ArrowRight,
} from "@phosphor-icons/react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", service: "", message: "" });
  };
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {" "}
      {/* Glow */}{" "}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[150px]" />{" "}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/20 blur-[150px]" />{" "}
      <div className="relative max-w-7xl mx-auto px-6">
        {" "}
        <div className="text-center mb-20">
          {" "}
          <span className="inline-flex px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
            {" "}
            CONTACT US{" "}
          </span>{" "}
          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white">
            {" "}
            Let's build something{" "}
            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              amazing together{" "}
            </span>{" "}
          </h2>{" "}
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            {" "}
            Tell us about your project and let's discuss how we can help your
            business grow online.{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid lg:grid-cols-5 gap-10">
          {" "}
          {/* LEFT SIDE */}{" "}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {" "}
            <div className=" rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 ">
              {" "}
              <h3 className="text-2xl font-bold text-white mb-8">
                {" "}
                Contact Information{" "}
              </h3>{" "}
              <div className="space-y-8">
                {" "}
                <ContactCard
                  icon={<MapPin size={22} />}
                  title="Location"
                  detail="Rio de Janeiro, Brazil"
                />{" "}
                <ContactCard
                  icon={<Phone size={22} />}
                  title="Phone"
                  detail="+55 (21) 99999-9999"
                />{" "}
                <ContactCard
                  icon={<EnvelopeSimple size={22} />}
                  title="Email"
                  detail="hello@forgeagency.com"
                />{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
          {/* FORM */}{" "}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {" "}
            <form
              onSubmit={handleSubmit}
              className=" rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 "
            >
              {" "}
              <div className="grid md:grid-cols-2 gap-6">
                {" "}
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  handleChange={handleChange}
                />{" "}
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  handleChange={handleChange}
                />{" "}
              </div>{" "}
              <div className="mt-6">
                {" "}
                <label className="block text-slate-300 mb-3">
                  {" "}
                  Service{" "}
                </label>{" "}
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className=" w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white outline-none "
                >
                  {" "}
                  <option value="">Select a service</option>{" "}
                  <option>Web Development</option> <option>UI/UX Design</option>{" "}
                  <option>SEO</option> <option>Digital Marketing</option>{" "}
                </select>{" "}
              </div>{" "}
              <div className="mt-6">
                {" "}
                <label className="block text-slate-300 mb-3">
                  {" "}
                  Project Details{" "}
                </label>{" "}
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className=" w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white resize-none outline-none "
                />{" "}
              </div>{" "}
              <button
                type="submit"
                className=" mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:scale-105 transition-all "
              >
                {" "}
                Send Message <ArrowRight size={18} />{" "}
              </button>{" "}
            </form>{" "}
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
const ContactCard = ({ icon, title, detail }) => (
  <div className="flex items-start gap-4">
    {" "}
    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white">
      {" "}
      {icon}{" "}
    </div>{" "}
    <div>
      {" "}
      <h4 className="text-white font-semibold"> {title} </h4>{" "}
      <p className="text-slate-400"> {detail} </p>{" "}
    </div>{" "}
  </div>
);
const Input = ({ label, name, type = "text", value, handleChange }) => (
  <div>
    {" "}
    <label className="block text-slate-300 mb-3"> {label} </label>{" "}
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className=" w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white outline-none "
    />{" "}
  </div>
);
export default Contact;
