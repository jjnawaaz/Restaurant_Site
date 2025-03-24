import React from "react";
import Logo from "../../assets/food-logo.png";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-4 sm:py-4">
        <div className="flex justify-between items-center">
          <div>
            <a
              href="#"
              className="flex justify-center items-center gap-2 text-2xl sm:text-3xl font-bold"
            >
              <img src={Logo} alt="Foodie Zone" className="w-10" />
              Foodie
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <DarkMode />
            </div>
            <ul className=" hidden sm:flex gap-4">
              <li>
                <a href="#" className=" py-4 px-4 hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className=" py-4 px-4 hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className=" py-4 px-4 hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-110 duration-500 flex items-center gap-2">
              Order
              <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
