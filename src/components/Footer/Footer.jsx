import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="py-5 sm:hidden">
      <div className="text-center max-w-[400px] mx-auto">
        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Contact US
        </p>
        {/*  */}
        <ul className="flex gap-4 justify-center items-center">
          <li>
            <a
              href="https://www.instagram.com/jj_nawaaz_?igsh=MnJxaWN6NzZ0b21t"
              className="py-4 px-4 hover:text-primary"
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
  );
};

export default Footer;
