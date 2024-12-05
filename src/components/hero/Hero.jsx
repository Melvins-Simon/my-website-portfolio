import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalContext.jsx";
import { BiArrowFromTop } from "react-icons/bi";
import {
  bgGradient,
  dbgGradient,
  gradientText,
  lbgGradient,
  textGradient,
} from "../../configs/Styles.js";

import Leftsection from "./Leftsection.jsx";
import { FaDownload } from "react-icons/fa6";
import SweetLine from "../sweetline/Index.jsx";
import { Tilt } from "react-tilt";
import CompModel from "../comp/Index.jsx";
import { resume } from "../../../public/index.js";

const Hero = () => {
  const {
    darkTheme,
    pageDimension: { WIDTH },
  } = useContext(GlobalContext);
  return (
    <div
      id="hero"
      className={` h-max pt-20 w-full text-blue-200 dark:text-blue-50 container mx-auto overflow-hidden animate-border `}
    >
      <div
        className={`${
          darkTheme
            ? "bg-[conic-gradient(var(--tw-gradient-stops))] from-[#010645] via-tertiary to-tertiary"
            : "bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-75 via-secondary to-[#ffffff]"
        }  h-full w-full rounded-t-md grid lg:grid-cols-2 max-md:grid-cols-1 pb-20 relative overflow-hidden`}
      >
        <SweetLine />
        <Leftsection />
        <div className="overflow-hidden grid grid-rows-[2fr_1fr]">
          <div className={`relative`}>
            <div
              className={`absolute right-0 left-0 mx-auto text-center mt-20 `}
            >
              <span
                className={` bg-gradient-to-r ${textGradient} bg-clip-text text-xl font-bold font-zentry tracking-wider`}
              >
                Developers' 3D Workstation
              </span>
            </div>
            <CompModel />
          </div>
          <div className=" flex flex-col p-3 items-center gap-3">
            <div>
              <span className={`${gradientText} text-xl font-bold`}>
                Get my Curriculum Vitae
              </span>
            </div>
            <Tilt>
              <div
                className={`h-40
                   w-40 flex justify-center items-center rounded-md ${bgGradient}`}
              >
                <a href={resume} download={"Resume.pdf"}>
                  <div className="bg-cv h-32 w-32 bg-cover bg-no-repeat"></div>
                </a>
              </div>
            </Tilt>
            <div className="bg-white dark:bg-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out flex gap-2 items-center justify-center px-3 py-2 rounded-full">
              <button>
                <a href={resume} download={"Melvins-Simon's_resume.pdf"}>
                  Download
                </a>
              </button>
              <FaDownload />
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            const element = document.getElementById("skills");
            element.scrollIntoView({ behavior: "smooth" });
          }}
          className={`absolute right-0 left-0 mx-auto ${
            WIDTH >= 768 ? "bottom-32" : "bottom-2"
          } max-md:bottom-4 h-10 w-6 rounded-full border-[2px] overflow-hidden cursor-pointer z-10`}
        >
          <div
            className={`${
              darkTheme ? dbgGradient : lbgGradient
            } w-full h-full relative`}
          >
            <BiArrowFromTop
              className={`text-xl rounded-full  absolute bottom-1 animate-bounce font-bold right-0 left-0 mx-auto text-yellow-300`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
