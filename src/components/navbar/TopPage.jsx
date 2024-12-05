import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalContext";

const TopPage = () => {
  const { darkTheme } = useContext(GlobalContext);
  return (
    <div
      className={`fixed top-0 h-1 ${
        darkTheme
          ? "bg-gradient-to-r from-blue-500 to-fuchsia-600 text-blue-75"
          : "bg-gradient-to-br from-blue-500 to-teal-400 text-violet-900"
      }  w-screen flex justify-center items-center`}
    >
      <span className="text-xs font-bold tracking-tighter">
        DEVELOPED BY MELVINS SIMON
      </span>
    </div>
  );
};

export default TopPage;
