import React, { useContext } from "react";
import { dbgGradient, lbgGradient } from "../../configs/Styles";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
import { GlobalContext } from "../../utils/context/GlobalContext";

const Scroller = ({ up, down }) => {
  const { darkTheme } = useContext(GlobalContext);
  return (
    <div
      className={`absolute right-0 left-0 mx-auto bottom-2 h-10 w-20 p-1 rounded-md border-[2px] overflow-hidden cursor-pointer z-10`}
    >
      <div className="w-full h-full grid grid-cols-2">
        <div className="flex justify-center items-center">
          <div
            onClick={() => {
              const element = document.getElementById(down);
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${
              darkTheme ? dbgGradient : lbgGradient
            } w-6 h-full rounded-sm  relative`}
          >
            <BiArrowFromTop
              className={`text-xl  absolute bottom-0 animate-bounce font-bold right-0 left-0 mx-auto text-yellow-300`}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            onClick={() => {
              const element = document.getElementById(up);
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${
              darkTheme ? dbgGradient : lbgGradient
            } w-6 h-full relative rounded-sm flex justify-center items-center`}
          >
            <BiArrowFromBottom
              className={`text-xl absolute bottom-0 animate-bounce font-bold right-0 left-0 mx-auto text-yellow-300`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
