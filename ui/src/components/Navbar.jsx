import { React, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, Link } from "react-router-dom"; // Import Link & useLocation

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("none");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollDirection(scrollY > prevScrollY ? "down" : "up");
      setPrevScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      } top-0 pb-2 z-10 mx-auto w-full font-poppins flex flex-wrap items-center justify-center bg-[#FBFBFB] text-neutral-500 border-b-2 dark:bg-neutral-600`}
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div
          className="md:max-w-[480px] md:hidden shadow-sm shadow-gray-200 rounded p-3 mx-4 ml-2 my-2 cursor-pointer"
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
          <ul className="font-medium flex flex-col py-2 px-4 md:p-0 mt-4 border border-gray-600 rounded-lg bg-gray-50 md:flex-row md:space-x-8 lg:space-x-[50px]
      md:mt-4 md:border-0 text-[18px] md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mr-[70px]">
            {[
              { name: "About me", path: "/" },
              { name: "Articles", path: "/articles" },
              { name: "Pricing", path: "#" },
              { name: "Contact", path: "#" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block p-1 transition duration-300 ${
                    location.pathname === item.path
                      ? "text-blue-700 border-t border-black"
                      : "text-black hover:text-blue-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
