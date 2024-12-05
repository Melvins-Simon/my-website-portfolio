import { logo } from "/public/index.js";
import { urls } from "../../configs/data.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalContext.jsx";
import { FaMoon, FaPhone, FaSun } from "react-icons/fa";
import {
  bgGradient,
  gradientText,
  gradientText2,
} from "../../configs/Styles.js";
import Phone from "./Phone.jsx";
const Navbar = () => {
  const {
    darkTheme,
    setDarkTheme,
    pageDimension: { WIDTH, HEIGHT },
  } = useContext(GlobalContext);

  const HandleChangeTheme = () => {
    setDarkTheme((cs) => !cs);
  };
  const HandleView = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className={`fixed w-screen top-0 h-14 z-50`}>
      <div
        className={`md:container h-full rounded-full p-[1px] ${bgGradient} lg:w-[80%]  w-[95%] mx-auto`}
      >
        <div
          className={` py-1 px-3 h-full w-full  flex justify-between items-center rounded-full hover:bg-blue-75 dark:hover:bg-tertiary transition-all ease-in duration-100 bg-blue-75 dark:bg-tertiary`}
        >
          <div
            onClick={() => {
              document
                .getElementById("hero")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img className={`h-8`} src={logo} />
            {WIDTH >= 768 && (
              <div>
                <span className={` font-zentry tracking-wider ${gradientText}`}>
                  Melvins | Simon
                </span>
              </div>
            )}
          </div>

          {WIDTH >= 768 && (
            <div className={`invisible md:visible flex space-x-3  `}>
              {urls.map(({ id, label, path }) => (
                <Link
                  className={`text-sm font-bold font-circular-web tracking-wide ${
                    darkTheme ? "hover:text-blue-75" : "hover:text-tertiary"
                  } duration-300 ease-in-out ${gradientText2}`}
                  key={id}
                  onClick={() => HandleView(id)}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
          <div
            className={`h-max w-max p-[1px] ${bgGradient} rounded-md grid ${
              WIDTH >= 768 ? "grid-cols-2" : "grid-cols-3"
            } place-content-center place-items-center gap-[0.17rem]`}
          >
            <div
              onClick={HandleChangeTheme}
              className={`h-8 w-8 ${
                darkTheme ? "bg-tertiary" : "bg-white"
              } rounded-l-xl cursor-pointer flex justify-center items-center`}
            >
              {darkTheme ? (
                <FaSun className="text-yellow-200" />
              ) : (
                <FaMoon className="text-gray-600" />
              )}
            </div>
            <div
              onClick={() => {
                const element = document.getElementById("contacts");
                element.scrollIntoView({ behavior: "smooth" });
              }}
              className={`h-8 w-8 ${
                darkTheme ? "bg-tertiary" : "bg-white"
              } rounded-r-xl cursor-pointer flex justify-center items-center`}
            >
              <FaPhone
                className={`${darkTheme ? "text-blue-50" : "text-blue-600"}`}
              />
            </div>

            {WIDTH < 768 && (
              <div
                className={`h-8 w-8 ${
                  darkTheme ? "bg-tertiary" : "bg-white"
                } rounded-r-xl cursor-pointer flex justify-center items-center`}
              >
                <Phone />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
