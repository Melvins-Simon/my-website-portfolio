import React, { useContext } from "react";
import { GlobalContext } from "../utils/context/GlobalContext";
import { BiArrowFromBottom } from "react-icons/bi";
import { dbgGradient, lbgGradient } from "../configs/Styles";
import { ContactSect } from "../components/Index.js";
const Contact = () => {
  const { darkTheme } = useContext(GlobalContext);
  return (
    <div
      className={`${
        darkTheme ? "bg-tertiary" : "bg-secondary"
      } h-screen container mx-auto text-blue-200 dark:text-blue-50 relative flex justify-center items-center`}
    >
      <div
        className={`md:w-[70%] md:h-[70%] m-auto ${
          darkTheme ? "bg-blue-200" : "bg-blue-75"
        } rounded-2xl border-violet-300 border-[1px] shadow-[1px_1px_10px_rgba(114,35,204)] overflow-hidden`}
      >
        <ContactSect />
      </div>
      <div className="absolute right-0 left-0 mx-auto bottom-2 h-10 w-6 rounded-full border-[2px] overflow-hidden cursor-pointer z-10">
        <div
          onClick={() => {
            const element = document.getElementById("projects");
            element.scrollIntoView({ behavior: "smooth" });
          }}
          className={`${
            darkTheme ? dbgGradient : lbgGradient
          } w-full h-full relative`}
        >
          <BiArrowFromBottom
            className={`text-xl rounded-full  absolute bottom-1 animate-bounce font-bold right-0 left-0 mx-auto text-yellow-300`}
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
