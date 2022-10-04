import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1280px] m-auto flex justify-between items-center p-4">
        <a href="/">
          <>
            <span className="flex font-3xl cursor-pointer">
              <svg
                className="text-black w-8 mr-2 fill-current hover:text-purple-500"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Capa 1"
                viewBox="0 0 16.16 12.57"
              >
                <defs></defs>
                <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
                <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
              </svg>
            </span>
          </>
        </a>
        <ul className="hidden sm:flex">
          <li className="p-4 text-black hover:text-purple-500">
            <Link href="/about-me">About Me</Link>
          </li>
          <li className="p-4 text-black hover:text-purple-500">
            <Link href="/recent-projects">Recent Projects</Link>
          </li>
          <li className="p-4 text-black hover:text-purple-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div onClick={handleMobile} className="block sm:hidden z-20">
          {isMobile ? (
            <AiOutlineClose
              size={28}
              className="text-white"
              aria-label="Close mobile menu"
            />
          ) : (
            <AiOutlineMenu
              size={28}
              className="text-black hover:text-purple-500 cursor-pointer"
              aria-label="Open mobile menu"
            />
          )}
        </div>
        <div
          className={
            isMobile
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen z-10 bg-black text-white text-center ease-in duration-300"
              : "hidden absolute top-0 left-[-100%] right-0 bottom-0 justify-center items-center w-full h-screen z-10 bg-black text-white text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleMobile}
              className="p-4 text-3xl focus:text-purple-500"
            >
              <Link href="/about-me">About Me</Link>
            </li>
            <li
              onClick={handleMobile}
              className="p-4 text-3xl focus:text-purple-500"
            >
              <Link href="/recent-projects">Recent Projects</Link>
            </li>
            <li
              onClick={handleMobile}
              className="p-4 text-3xl focus:text-purple-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
