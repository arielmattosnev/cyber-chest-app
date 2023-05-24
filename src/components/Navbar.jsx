import { useState } from "react";

import { close, logo, menu } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-6">
      <img src={logo} alt="CyberChest" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map(({ id, title }) => (
          <li
            key={id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white hover:text-slate-400 hover:scale-110 duration-200`}
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={isOpen ? close : menu}
          alt="menu for mobiles"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setIsOpen((prev) => !prev)}
        />

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map(({ id, title }) => (
              <li
                key={id}
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white hover:text-slate-400 hover:scale-110 duration-100`}
              >
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
