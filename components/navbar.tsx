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
              <h1 className="text-2xl font-semibold tracking-tighter text-center mx-4 hover:text-purple-500">
                Sanja Wetzel
              </h1>
            </span>
          </>
        </a>
        <ul className="hidden sm:flex">
          <li className="p-4 text-black hover:text-purple-500">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4 text-black hover:text-purple-500">
            <Link href="/about-me">About</Link>
          </li>
          <li className="p-4 text-black hover:text-purple-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div onClick={handleMobile} className="block sm:hidden z-20">
          {isMobile ? (
            <AiOutlineClose
              size={28}
              className="text-white hover:text-purple-500 cursor-pointer"
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
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleMobile}
              className="p-4 text-3xl focus:text-purple-500"
            >
              <Link href="/about-me">About</Link>
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
