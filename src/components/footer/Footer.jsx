import React from "react";
import { animate, textGradient } from "../../configs/Styles";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contacts" className="h-max py-3  bg-tertiary font-circular-web">
      <div
        className={`container mx-auto h-full py-2 flex max-sm:flex-col max-sm:gap-2 justify-between items-center`}
      >
        <div>
          <span className={` text-sm ${textGradient} bg-clip-text font-bold`}>
            Copyright © 2025 Melvins Simon Omari
          </span>
        </div>
        <div
          class={`${animate} w-max px-3 py-1 cursor-pointer text-blue-50 flex justify-between items-center gap-2 hover:bg-yellow-200`}
        >
          <div className={`h-full w-full `}>
            <a
              href="https://wa.me/+254793867001?text=Hello%20there!%20Melvins%20Simon"
              target="_blank"
            >
              Let's get in touch
            </a>
          </div>
          <FaWhatsapp />
        </div>
        <div className={`text-blue-50 flex gap-5`}>
          <div
            className={`hover:p-1 hover:bg-white hover:rounded-full hover:text-tertiary duration-300 ease-in-out cursor-pointer`}
          >
            <a href="https://www.github.com/Melvins-Simon" target="_blank">
              <FaGithub />
            </a>
          </div>
          <div
            className={`hover:p-1 hover:bg-white hover:rounded-full hover:text-blue-600 duration-300 ease-in-out cursor-pointer`}
          >
            <a
              href="https://www.linkedin.com/in/melvins-simon-123257293"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
          <div
            className={`hover:p-1 hover:bg-white hover:rounded-full hover:text-blue-600 duration-300 ease-in-out cursor-pointer`}
          >
            <a href="https://x.com/MelvinsSimon" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
