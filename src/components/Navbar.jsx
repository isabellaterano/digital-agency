import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { DotsThreeOutline, XCircle } from "@phosphor-icons/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-50 fixed w-full transition-opacity duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            className="inline-flex justify-center items-center gap-2 text-2xl font-black text-[--primary-color] hover:opacity-90 transition-opacity duration-200"
            onClick={closeNavbar}
          >
            <img
              src="/logo.svg"
              alt="logo"
              width={35}
              height={35}
              className="hover:scale-105 transition-transform duration-200"
            />
            FORGE
          </NavLink>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="focus:outline-none"
            >
              {isOpen ? (
                <XCircle size={28} color="#5417d7" weight="duotone" />
              ) : (
                <DotsThreeOutline size={28} color="#5417d7" weight="duotone" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`mt-3 md:mt-0 ${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center rounded-none transition-all duration-300 `}
        >
          <nav className="md:flex-grow">
            <NavLink
              to="/"
              onClick={closeNavbar}
              className="block mt-4 md:inline-block md:mt-0 mr-6 text-lg font-semibold hover:text-[--primary-color] text-neutral-950 transition-colors duration-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeNavbar}
              className="block mt-4 md:inline-block md:mt-0 mr-6 text-lg font-semibold hover:text-[--primary-color]  text-neutral-950 transition-colors duration-200"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              onClick={closeNavbar}
              className="block text-neutral-950 mt-4 md:inline-block md:mt-0 mr-6 text-lg font-semibold hover:text-[--primary-color] transition-colors duration-200"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeNavbar}
              className="block mt-4 md:inline-block md:mt-0 mr-6 text-lg font-semibold hover:text-[--primary-color] text-neutral-950 transition-colors duration-200"
            >
              Contact
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeNavbar}
              className="block mt-4 md:inline-block md:mt-0 mr-4 bg-[--primary-color] hover:opacity-90 px-4 py-2 rounded-md text-white font-bold shadow-lg transition-all duration-200"
            >
              Let&apos;s Talk
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
