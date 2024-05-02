import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center py-4 px-8">
        <img
          className="cursor-pointer"
          src={Logo}
          alt="Logo"
          width={35}
          height={35}
          priority
        />
        <ul className="hidden md:flex lg:flex space-x-12">
          <li>
            <p className="hover:text-gray-500 font-bold cursor-pointer">Home</p>
          </li>
          <li>
            <p className="hover:text-gray-500 font-bold cursor-pointer">
              About
            </p>
          </li>
          <li>
            <p className="hover:text-gray-500 font-bold cursor-pointer">
              Contact
            </p>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
