import React, { useContext } from "react";
import { GlobalContext } from "../utils/context/GlobalContext";
import { techs } from "../configs/data.jsx";
import { motion } from "framer-motion";
import { animate, textGradient } from "../configs/Styles.js";
import { Scroller } from "../components/Index.js";

const Skills = () => {
  const {
    darkTheme,
    pageDimension: { WIDTH },
  } = useContext(GlobalContext);

  const iconVariants = (duration) => ({
    initial: { y: 0 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  return (
    <div
      id="skills"
      className={`${darkTheme ? "bg-tertiary" : "bg-secondary"} ${
        WIDTH >= 768 ? "h-screen" : "h-max"
      } container mx-auto text-blue-200 dark:text-blue-50 py-20 relative font-circular-web`}
    >
      <div className="container mx-auto w-[80%] h-full  flex items-center">
        <div
          className={` ${
            WIDTH >= 768
              ? "flex justify-center items-center flex-col"
              : "flex  flex-col"
          }  gap-10 h-max  w-full -mt-20`}
        >
          <div className={`place-items-center`}>
            <h2
              className={`${textGradient} bg-clip-text text-4xl font-bold text-center`}
            >
              Skills
            </h2>
          </div>
          <div className="text-center">
            <span>
              I am skilled in building dynamic web applications using Next.js
              and React, leveraging Tailwind CSS for responsive design. My
              expertise includes working with both PostgreSQL and MongoDB for
              efficient data management, and I utilize Node.js for server-side
              development. This combination allows me to create robust,
              scalable, and user-friendly applications.
            </span>
          </div>

          <div
            className={`flex flex-wrap justify-between h-[40%] w-full gap-3`}
          >
            {techs.map(({ id, icon, label, dur, cert, prog }) => (
              <motion.div
                variants={iconVariants(dur)}
                initial="initial"
                animate="animate"
                className={`${animate} overflow-hidden grid grid-rows-[2fr_2fr_0.5fr]`}
                key={id}
              >
                <div className="p-4 bg-blue-200 flex justify-center items-center">
                  {icon}
                </div>
                <div
                  className={`flex flex-col justify-center gap-2 font-circular-web font-bold text-blue-75  h-full  p-3`}
                >
                  <div>
                    Skill:{" "}
                    <span
                      className={` ${textGradient} bg-clip-text text-sm font-normal`}
                    >
                      {label}
                    </span>
                  </div>
                  <div>
                    Certified:{" "}
                    <span
                      className={` ${textGradient} bg-clip-text text-sm font-normal`}
                    >
                      {cert}
                    </span>{" "}
                  </div>
                  <div>
                    Profficiency:{" "}
                    <span
                      className={` ${textGradient} bg-clip-text text-sm font-normal`}
                    >
                      {prog}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center items-center text-blue-75 hover:bg-blue-600 duration-300 ease-in-out bg-blue-800">
                  <button>Certificate</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Scroller up={"hero"} down={"projects"} />
    </div>
  );
};

export default Skills;
