import React, { useContext } from "react";
import { GlobalContext } from "../utils/context/GlobalContext";
import { Proj, Scroller } from "../components/Index";
import { textGradient } from "../configs/Styles";
import { schl, watch, xen, xenec } from "../../public";

const Projects = () => {
  const {
    darkTheme,
    pageDimension: { WIDTH },
  } = useContext(GlobalContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="projects"
      className={`lg:h-screen h-max ${
        darkTheme ? "bg-tertiary text-blue-75" : "bg-secondary text-tert"
      } container mx-auto text-blue-200 dark:text-blue-50 relative flex flex-col gap-10 justify-center items-center  max-lg:py-16`}
    >
      <div className="flex container w-[80%] mx-auto justify-center items-center flex-col gap-10 font-circular-web">
        <div>
          <span className={`font-bold ${textGradient} bg-clip-text text-4xl`}>
            My Works
          </span>
        </div>
        <div>
          <p className="text-center">
            Explore a curated selection of my projects that showcase my skills
            and creativity. Each project highlights my ability to tackle complex
            challenges with innovative solutions, reflecting my commitment to
            quality and excellence in my work.
          </p>
        </div>
      </div>
      <div
        className={`w-[80%]  grid mx-auto h-[40%] gap-4 lg:grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 `}
      >
        <Proj
          tech={`#Tailwindcss#ReactJS`}
          img={xen}
          text={"Technologies landing page"}
          path={
            "https://github.com/Melvins-Simon/Xeniex-Technologies-Landing-Page"
          }
          parag={`A frontend portfolio landing page displays work and skills with a clean design, with ReactJS and Tailwindcss. It emphasizes a minimalistic and professional aesthetic.`}
        />
        <Proj
          tech={`#Javascript#CSS#HTML5`}
          img={xenec}
          text={"E-commerce mockup page"}
          path={"https://github.com/Melvins-Simon/Xeniex_E-Commerce"}
          parag={`A mockup page for Jumia's e-commerce site features  a navigation header,  product categories in a grid, highlighted bestsellers, daily deals,  and a footer with useful links.`}
        />
        <Proj
          tech={`#Tailwindcss#ReactJS`}
          img={schl}
          text={"School website"}
          path={
            "https://github.com/Melvins-Simon/aic-olago-aluoch-alara-girls-school"
          }
          parag={`The Alara Girls High School website, created with React JS and Tailwind CSS. It features  a responsive design that enhances user experience and showcases community involvement.`}
        />
        <Proj
          tech={`#HTML5#VanillaCSS#JavaScript`}
          img={watch}
          text={"Fun: Analogue watch"}
          path={
            "https://github.com/Melvins-Simon/Fully-Responsive-Analog-Watch"
          }
          parag={`The analog stopwatch, built with HTML5, CSS, and JavaScript, displays the current system time using moving hour, minute, and second hands. `}
        />
      </div>
    </div>
  );
};

export default Projects;
