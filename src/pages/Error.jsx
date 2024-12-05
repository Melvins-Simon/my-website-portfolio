import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../utils/context/GlobalContext";

const Error = () => {
  const { darkTheme, pageDimension } = useContext(GlobalContext);
  return (
    <div
      className={`flex h-screen w-screen justify-center items-center bg-white bg-errImage bg-cover ${
        pageDimension >= 768 ? "bg-center " : "bg-left"
      }`}
    >
      <div className="flex  items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <span className="text-7xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            404
          </span>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Oops! We can't find that page.
          </h1>

          <p className="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>

          <Link
            to={"/"}
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Error;
