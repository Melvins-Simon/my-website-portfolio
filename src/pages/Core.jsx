import React, { useContext } from "react";
import { Hero, TopPage } from "../components/Index.js";
import { GlobalContext } from "../utils/context/GlobalContext.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";

const Core = () => {
  const {
    pageDimension: { WIDTH },
  } = useContext(GlobalContext);
  return (
    <>
      <main className={`h-max w-screen bg-backbg bg-cover bg-no-repeat`}>
        <TopPage />
        <Hero />
      </main>
      <main
        className={`lg:h-screen h-max  w-screen bg-backbg bg-cover bg-no-repeat`}
      >
        <Skills />
      </main>
      <main
        className={`lg:h-screen h-max  w-screen bg-backbg bg-cover bg-no-repeat`}
      >
        <Projects />
      </main>
      <main className={`h-screen w-screen bg-backbg bg-cover bg-no-repeat`}>
        <Contact />
      </main>
    </>
  );
};
export default Core;
