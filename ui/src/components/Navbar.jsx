import { React, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > prevScrollY) {
        setScrollDirection("down");
      } else if (scrollY < prevScrollY) {
        setScrollDirection("up");
      }

      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav
      className={`${
        scrollDirection === "up" || scrollDirection === "none"
          ? "fixed top-0"
          : "absolute"
      }
     top-0 pb-2 z-10 mx-auto w-full font-poppins flex flex-wrap items-center justify-center bg-[#FBFBFB] text-neutral-500 shadow-lg dark:bg-neutral-600`}
    >
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <div
          className="md:max-w-[480px] md:hidden shadow-lg shadow-gray-200 rounded p-3 mx-4 ml-2 my-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </div>
      </div>

      <div
        className={`${isMenuOpen ? "block" : "hidden"}
        md:static md:min-h-fit min-h-fit relative left-0 md:w-auto w-full md:block`}
      >
        <div className="flex lg:space-x-4 top-0 h-fit md:flex-row flex-col md:items-start left-0 md:gap-[2vw] w-full bg-transparent p-2 font-semibold">
          <ul
            className="font-medium flex flex-col py-2 px-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-gray-50 md:flex-row md:space-x-8 lg:space-x-[50px]
      md:mt-4 md:border-0 text-[18px] md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mr-[70px]"
          >
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white md:bg-transparent md:text-blue-700 md:p-0 dark:text-white
           md:dark:text-blue-500"
                aria-current="page"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="/skills"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700
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
