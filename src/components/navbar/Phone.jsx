import React, { useContext, useEffect, useRef, useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import { urls } from "../../configs/data.jsx";
import { Link } from "react-router-dom";
import { gradientText2 } from "../../configs/Styles";
import { GlobalContext } from "../../utils/context/GlobalContext";

const Phone = () => {
  const [displayMenu, setdisplayMenu] = useState(false);
  const { darkTheme } = useContext(GlobalContext);
  const menuRef = useRef(null);
  const HandleDisplayMenu = () => {
    setdisplayMenu((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setdisplayMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const HandleView = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="scale-up-ver-center-normal">
      <div>
        {!displayMenu ? (
          <FaBars
            className={`text-tertiary dark:text-blue-75`}
            onClick={HandleDisplayMenu}
          />
        ) : (
          <FaX
            className={`text-tertiary dark:text-blue-75`}
            onClick={HandleDisplayMenu}
          />
        )}
      </div>
      {displayMenu && (
        <div
          ref={menuRef}
          className={`absolute right-0 left-0 mx-auto top-16 h-max w-64 ${
            darkTheme ? "bg-black-200" : "bg-blue-75"
          } overflow-hidden rounded-md flex justify-center`}
        >
          <div className="h-full w-full relative border border-violet-300 overflow-hidden rounded-md">
            <div className="absolute top-2 right-2">
              <FaX
                className={`text-tertiary dark:text-blue-75`}
                onClick={HandleDisplayMenu}
              />
            </div>
            <div className=" mt-5">
              <div className="flex flex-col">
                {urls.map(({ label, id, id2 }) => (
                  <div
                    key={id}
                    className={`hover:bg-white dark:hover:bg-tertiary py-2 cursor-pointer`}
                  >
                    <Link
                      id={id2}
                      className={` pl-2 text-center font-bold font-circular-web tracking-wide ${gradientText2}`}
                      onClick={() => HandleView(id)}
                    >
                      {label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Phone;
