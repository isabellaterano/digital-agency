import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6">
            <h4 className=" text-lg font-semibold mb-4">About Us</h4>
            <p>
              We specialize in UI/UX design, development, and marketing
              solutions.
            </p>
          </div>
          <div className="mb-6">
            <h4 className=" text-lg font-semibold mb-4">Services</h4>
            <ul>
              <li>
                <a href="#" className=" hover:text-purple-700">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-purple-700">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-purple-700">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="">123 Rio de Janeiro, Brazil.</p>
            <p className="">forge@forge.com</p>
            <p className="">123-456-7890</p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex items-center">
              <a href="#" className=" hover:text-purple-700 mr-4">
                <FacebookLogo size={28} />
              </a>
              <a href="#" className=" hover:text-purple-700 mr-4">
                <XLogo size={28} />
              </a>
              <a href="#" className=" hover:text-purple-700 mr-4">
                <InstagramLogo size={28} />
              </a>
              <a href="#" className=" hover:text-purple-700 mr-4">
                <LinkedinLogo size={28} />
              </a>
              <a href="#" className=" hover:text-purple-700 mr-4">
                <TiktokLogo size={28} />
              </a>
              <a href="#" className=" hover:text-purple-700 mr-4">
                <YoutubeLogo size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
