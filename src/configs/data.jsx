import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
export const urls = [
  {
    id: "hero",
    id2: "hero2",
    label: "Hero",
  },

  {
    id: "skills",
    id2: "skills2",
    label: "Skills",
  },
  {
    id: "projects",
    id2: "projects2",
    label: "Projects",
  },
  {
    id: "contacts",
    id2: "contacts2",
    label: "Contact",
  },
];

export const techs = [
  {
    id: 1,
    icon: <TbBrandNextjs className={`text-7xl text-blue-50`} />,
    label: "Next JS",
    cert: "YES",
    prog: "50%",
    dur: 1.5,
  },
  {
    id: 2,
    icon: <RiReactjsLine className={`text-7xl text-cyan-400`} />,
    label: "React JS",
    cert: "YES",
    prog: "100%",
    dur: 2.5,
  },
  {
    id: 3,
    icon: <SiMongodb className={`text-7xl text-green-500`} />,
    label: "MongoDB",
    cert: "YES",
    prog: "80%",
    dur: 3,
  },
  {
    id: 4,
    icon: <RiTailwindCssLine className={`text-7xl text-blue-600`} />,
    label: "TailwindCSS",
    cert: "YES",
    prog: "100%",
    dur: 5,
  },
  {
    id: 5,
    icon: <FaNodeJs className={`text-7xl text-green-400`} />,
    label: "Node JS",
    cert: "YES",
    prog: "90%",
    dur: 3.5,
  },
  {
    id: 6,
    icon: <BiLogoPostgresql className={`text-7xl text-blue-700`} />,
    label: "Postgres SQL",
    cert: "YES",
    prog: "50%",
    dur: 4,
  },
];
