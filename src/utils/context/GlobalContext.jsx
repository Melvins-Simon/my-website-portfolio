import { createContext, useEffect, useState, useRef } from "react";

const defaultContext = {
  darkTheme: true,
  setDarkTheme: () => {},
  pageDimension: {
    WIDTH: window.innerWidth,
    HEIGHT: window.innerHeight,
  },
  setpageDimension: () => {},
};
export const GlobalContext = createContext(defaultContext);

const ToggleAttribute = (darkTheme) => {
  document.body.setAttribute("class", darkTheme ? "dark" : "");
};

const HandlePageResize = (setpageDimension) => {
  setpageDimension({
    WIDTH: window.innerWidth,
    HEIGHT: window.innerHeight,
  });
};

function GlobalProvider({ children }) {
  const resizeListener = useRef();
  const [darkTheme, setDarkTheme] = useState(defaultContext.darkTheme);
  const [pageDimension, setpageDimension] = useState(
    defaultContext.pageDimension
  );

  useEffect(() => {
    ToggleAttribute(darkTheme);
  }, [darkTheme]);

  useEffect(() => {
    resizeListener.current = () => HandlePageResize(setpageDimension);

    window.addEventListener("resize", resizeListener.current);

    return () => {
      window.removeEventListener("resize", resizeListener.current);
    };
  }, []);

  // UPDATED VALUES
  const updatedValues = {
    darkTheme,
    setDarkTheme,
    pageDimension,
  };

  return (
    <GlobalContext.Provider value={updatedValues}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
