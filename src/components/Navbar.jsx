import { useState } from "react";
import { NavLink } from "react-router-dom";
import { DotsThreeOutline, XCircle } from "@phosphor-icons/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header className="shadow-lg fixed w-full z-10 bg-zinc-900 text-zinc-100">
      <div className="container mx-auto px-4 py-3 md:flex md:justify-between md:items-center ">
        <div className="flex justify-between items-center">
          <div>
            <NavLink>
              <img
                src="/logo.svg"
                alt="logo"
                width={50}
                className="bg-zinc-50 "
              />
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" focus:outline-none"
            >
              {isOpen ? (
                <XCircle size={28} color="#a679f6" weight="duotone" />
              ) : (
                <DotsThreeOutline size={28} color="#a679f6" weight="duotone" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`mt-3 md:mt-0 ${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center`}
        >
          <nav className="md:flex-grow uppercase">
            <NavLink
              to={"/"}
              onClick={closeNavbar}
              className="block mt-4 md:inline-block md:mt-0 mr-4"
            >
              Home
            </NavLink>

            <NavLink
              to={"/about"}
              onClick={closeNavbar}
              className="block mt-4 md:inline-block md:mt-0  mr-4"
            >
              About
            </NavLink>
            <NavLink
              to={"/services"}
              onClick={closeNavbar}
              className="block mt-4 md:inline-block md:mt-0  mr-4"
            >
              Services
            </NavLink>
            <NavLink
              to={"/contact"}
              onClick={closeNavbar}
              className="block mt-4 md:inline-block md:mt-0  mr-4"
            >
              Contact
            </NavLink>
            <NavLink
              to={"/contact"}
              onClick={closeNavbar}
              className="block mt-4 md:inline-block md:mt-0  mr-4 bg-purple-700 hover:opacity-90 p-2"
            >
              Let's Talk
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
