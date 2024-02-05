import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(navLinks);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-normal text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } cursor-pointer z-[5] hover:text-[#33bbcf] duration-200`}
          >
            <a className="cursor-pointer" href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex sm:hidden  flex-1 justify-end items-center">
        <img
          onClick={() => {
            setToggle((prevToggle) => !prevToggle);
          }}
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient absolute top-20 right-0 mx-4 p-4 min-w-[140px] my-2 rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                onClick={() => setToggle((prevToggle) => !prevToggle)}
                key={nav.id}
                className={` font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
