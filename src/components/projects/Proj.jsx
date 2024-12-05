import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalContext";
import { gradientText } from "../../configs/Styles";
import { FaGithub } from "react-icons/fa";

const Proj = ({ img, text, tech, path, parag }) => {
  const { darkTheme } = useContext(GlobalContext);
  return (
    <div
      className={`h-96  ${
        darkTheme ? "bg-blue-200  text-blue-75" : "bg-blue-75 text-tertiary"
      } grid grid-rows-[1fr_1fr] p-2 rounded-2xl border-violet-300 border-[1px] `}
    >
      <div
        className={`rounded-3xl bg-white overflow-hidden object-cover object-center relative`}
      >
        <img src={img} />
        <div className="absolute top-2 right-2 cursor-pointer hover:dark:bg-violet-300 hover:bg-violet-300 duration-300 ease-in-out z-10 p-2 rounded-full bg-white dark:bg-black-200">
          <a href={path} target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className={` relative font-circular-web py-2`}>
        <div>
          <div>
            <span className={`font-extrabold ${gradientText}`}>{text}</span>
          </div>
          <div>
            <span className="text-sm">{parag}</span>
          </div>
          <div className="text-sm absolute right-0 left-0 bottom-0 mx-auto w-max ">
            <span className={`text-blue-600 text-sm`}>{tech}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proj;
