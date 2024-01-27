import { React, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className=" w-full top-0 py-2 font-poppins lg:px-[55px] px-4 md:flex justify-center items-center md:items-center">
      <div className="flex justify-between items-center lg:w-[130px] w-full">
        <div
          className="md:max-w-[480px] md:hidden mx-4 my-4 cursor-pointer"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      <div
        className={`${isMenuOpen ? "block" : "hidden"} 
        md:static md:min-h-fit min-h-fit relative left-0 top-[100%] md:w-auto w-full md:block`}
      >
        <div className="flex lg:space-x-4 md:flex-row flex-col md:items-start left-0 md:gap-[2vw] h-20 w-full bg-white p-2 font-semibold">
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 lg:space-x-[50px] 
      md:mt-0 md:border-0 text-[18px] md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mr-[70px]"
          >
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white bg-[#217930] rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white
           md:dark:text-blue-500"
                aria-current="page"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="/skills"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700
           md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
           dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
          md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
          md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
