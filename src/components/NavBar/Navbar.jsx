import React from "react";
import Logo from "../../assets/food-logo.png";
import { FaInstagram } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { IoCallOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="shadow-md bg-slate-100 dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-4 sm:py-4">
        <div className="flex justify-between items-center">
          <div>
            <a
              href="#"
              className="flex justify-center items-center gap-2 text-[17px]  sm:text-[25px] font-bold"
            >
              <img src={Logo} alt="Foodie Zone" className="w-10" />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                Demo{" "}
              </span>
              Cloud Kitchen
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <DarkMode />
            </div>
            <ul className="hidden sm:flex gap-4">
              <li>
                <a
                  href="https://www.instagram.com/jj_nawaaz_?igsh=MnJxaWN6NzZ0b21t"
                  className=" py-4 px-4 hover:text-primary"
                >
                  <FaInstagram className="text-[25px] text-pink-300 drop-shadow-sm cursor-pointer" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+918555017248"
                  className="py-4 px-4 hover:text-primary"
                >
                  <IoCallOutline className="text-[25px] text-black dark:text-white drop-shadow-sm cursor-pointer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
