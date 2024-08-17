import { useState } from "react";
import { motion } from "framer-motion";
import { Envelope, MarkerCircle, Phone } from "@phosphor-icons/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <div className="bg-gray-50 py-24  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            We&apos;d love to hear from you! Whether you have a question about
            our services or want to discuss your project, our team is ready to
            answer all your questions.
          </p>
          <div className="space-y-4">
            <ContactInfo
              Icon={MarkerCircle}
              title="Address"
              detail="123 Main Street, Rio de Janeiro, Brazil"
            />
            <ContactInfo Icon={Phone} title="Phone" detail="+123 456 7890" />
            <ContactInfo
              Icon={Envelope}
              title="Email"
              detail="forge@forge.com"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              handleChange={handleChange}
              required
            />
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              handleChange={handleChange}
              required
            />
            <FormSelect
              label="Type of Service"
              name="service"
              value={formData.service}
              handleChange={handleChange}
              options={[
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Digital Marketing",
                "Other",
              ]}
              required
            />
            <FormTextArea
              label="Message"
              name="message"
              value={formData.message}
              handleChange={handleChange}
              rows={5}
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-md text-lg font-semibold shadow-md hover:bg-purple-700 transition duration-300"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const ContactInfo = ({ Icon, title, detail }) => (
  <div className="flex items-start space-x-4">
    <Icon className="text-purple-600 w-6 h-6 mt-1" />
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{detail}</p>
    </div>
  </div>
);

const FormInput = ({ label, type, name, value, handleChange, required }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>
);

const FormSelect = ({
  label,
  name,
  value,
  handleChange,
  options,
  required,
}) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
      <option value="">Select a service</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const FormTextArea = ({ label, name, value, handleChange, rows, required }) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      rows={rows}
      required={required}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
    ></textarea>
  </div>
);

export default Contact;
