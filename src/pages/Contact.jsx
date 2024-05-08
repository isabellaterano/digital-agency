import { useState } from "react";

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
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form fields after submission
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:flex lg:justify-between pt-36 min-h-dvh gap-4">
      <div className="lg:w-1/3 bg-[--primary-color] p-4 rounded-sm ">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <p className="mb-2">Address: 123 Main Street, Rio de janeiro, Brazil</p>
        <p className="mb-2">Phone: +123 456 7890</p>
        <p className="mb-2">Email: forge@forge.com</p>
      </div>

      <div className="lg:w-2/3">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="service" className="block mb-1 font-medium">
              Type of Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-purple-500"
              required
            >
              <option value="">Select</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:border-purple-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-8 rounded-sm bg-[--primary-color] text-white py-2 transition duration-300 hover:opacity-85 uppercase"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
