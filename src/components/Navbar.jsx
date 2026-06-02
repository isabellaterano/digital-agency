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
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`flex items-center justify-between px-6 py-4 rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl border-white/20 shadow-2xl"
              : "bg-white/10 backdrop-blur-xl border-white/10"
          }`}
        >
          <NavLink
            to="/"
            className="flex items-center gap-3 text-xl font-black"
          >
            <img src="/logo.svg" alt="logo" className="w-10 h-10" />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              FORGE
            </span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="font-medium text-slate-700 hover:text-indigo-600 transition"
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className="font-medium text-slate-700 hover:text-indigo-600 transition"
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              className="font-medium text-slate-700 hover:text-indigo-600 transition"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="font-medium text-slate-700 hover:text-indigo-600 transition"
            >
              Contact
            </NavLink>

            <NavLink
              to="/contact"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition"
            >
              Book a Call
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
