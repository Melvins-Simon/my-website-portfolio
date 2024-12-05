import React, { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalContext.jsx";
import { gradientText, styleHere, styleHere1 } from "../../configs/Styles.js";
import { melvins } from "../../../public/index.js";
import SimpleTypeWriter from "simple-typewriter-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Leftsection = () => {
  const { darkTheme } = useContext(GlobalContext);
  const AutoSkills = [
    "UI/UX Designer",
    "React JS",
    "Next JS",
    "TypeScript",
    "Express JS",
    "Tailwind CSS",
  ];
  return (
    <>
      <div className=" grid md:grid-rows-2 grid-cols-1">
        <div
          className={`${
            !darkTheme ? "text-tertiary" : "text-blue-75"
          }  flex flex-col justify-evenly gap-3 pt-5 pl-9`}
        >
          <div className={`text-4xl font-robert-medium font-extrabold`}>
            Hi,🖐 i'm <span className={gradientText}>Melvins Simon</span>,
          </div>
          <div>
            <span className="font-circular-web">
              I am an enthusiastic IT student with a passion for technology and
              innovation. My journey in the tech world spans from exploring the
              latest trends in artificial intelligence to diving deep into UI/UX
              design. I am always eager to learn and adapt, driven by my goal of
              becoming a skilled software developer. I believe that technology
              has the power to transform lives, and I’m excited to contribute to
              that change through my work.
            </span>
          </div>
          <div className={`flex justify-center items-center`}>
            <div
              className={`h-48 w-48 rounded-full overflow-hidden object-cover object-center`}
            >
              <img src={melvins} alt="profile img" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <span className={` ${gradientText} font-circular-web font-bold`}>
              <SimpleTypeWriter
                words={AutoSkills}
                loop={true}
                typeSpeed={120}
                deleteSpeed={80}
                delay={1500}
                cursor={true}
                cursorStyle="|"
              />
            </span>
          </div>
        </div>
        <div>
          <div
            className={`$ w-full mx-auto h-full bg-transparent-100 scale-75 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.8)] border border-violet-300 rounded-md overflow-hidden p-3 grid grid-rows-[1fr_3fr]`}
          >
            <div>
              <div className="w-full text-center">
                <span className="font-extrabold text-2xl font-circular-web">
                  Let's conect for tech treds!
                </span>
              </div>
              <div className="mt-2">
                <p className="text-center text-lg">
                  Together, we can stay ahead of emerging trends and create
                  valuable opportunities for collaboration. Let’s connect!
                </p>
              </div>
            </div>
            <div className="bg-blue-200 grid grid-cols-[4fr_1fr]">
              {/* CONNECT CARD */}
              <div>
                <form
                  className="bg-connect h-full w-full flex flex-col justify-center items-center space-y-4"
                  action="https://formspree.io/f/mvgoyqlz"
                  method="POST"
                >
                  <div className="flex flex-col space-y-4 w-full">
                    <input
                      className={styleHere}
                      type="text"
                      name="name"
                      placeholder="Your name..."
                      required
                    />
                    <input
                      className={styleHere}
                      type="email"
                      name="email"
                      placeholder="Your Email..."
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-50 rounded-md px-3 py-2 text-tertiary hover:bg-yellow-300 font-bold"
                    >
                      Let's connect!
                    </button>
                  </div>
                </form>
              </div>
              {/* SIDE CONAINER LINKS */}
              <div className="grid grid-rows-3">
                <div className={styleHere1}>
                  <div className="p-3 rounded-full bg-white">
                    <a
                      href="https://www.linkedin.com/in/melvins-simon-123257293"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl text-blue-600" />
                    </a>
                  </div>
                </div>
                <div className={styleHere1}>
                  <div className="p-3 rounded-full bg-white">
                    <a
                      href="https://www.github.com/Melvins-Simon"
                      target="_blank"
                    >
                      <FaGithub className="text-2xl text-black-100" />
                    </a>
                  </div>
                </div>

                <div className={styleHere1}>
                  <div className="p-3 rounded-full bg-white">
                    <a href="https://x.com/MelvinsSimon" target="_blank">
                      <FaTwitter className="text-2xl text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftsection;
