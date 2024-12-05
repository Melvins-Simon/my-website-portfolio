import { useContext } from "react";
import { GlobalContext } from "../../utils/context/GlobalContext";
import { gradientText } from "../../configs/Styles";
import { FaLocationPin } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TbSend } from "react-icons/tb";

const ContactSect = () => {
  const { darkTheme } = useContext(GlobalContext);
  return (
    <div
      className={` ${
        darkTheme ? "text-blue-75" : "text-tertiary"
      } max-w-6xl max-lg:max-w-3xl mx-auto h-full  rounded-lg`}
    >
      <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]  h-full">
        <div>
          <h1 className={`${gradientText} text-4xl font-bold `}>
            Lets get in touch
          </h1>
          <p className="text-sm  mt-4 leading-relaxed">
            I’d love to hear from you! Whether you have a question, want to
            discuss a project, or just want to say hello, feel free to reach
            out. I look forward to connecting!
          </p>

          <ul
            className={`mt-12 space-y-8 ${
              darkTheme ? "text-blue-75" : "text-tertiary"
            }`}
          >
            <li className="flex items-center">
              <FaLocationPin />
              <a className="text-sm ml-4">Nairobi,Kenya.</a>
            </li>
          </ul>

          <ul className="flex mt-12 space-x-4">
            <li className=" hover:bg-white hover:text-black-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="https://www.github.com/Melvins-Simon" target="_blank">
                <FaGithub />
              </a>
            </li>
            <li className=" hover:bg-white hover:text-blue-600 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a
                href="https://www.linkedin.com/in/melvins-simon-123257293"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="hover:text-blue-300 hover:bg-white h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="https://x.com/MelvinsSimon" target="_blank">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>

        <div className="h-full w-full flex justify-center items-center ">
          <div
            className={`${
              darkTheme ? "bg-tertiary" : "bg-gray-100"
            } p-6 rounded-lg `}
          >
            <form
              className="mt-8 space-y-4"
              action="https://formspree.io/f/mwpkzqwl"
              method="POST"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-violet-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-violet-300"
              />
              <textarea
                placeholder="Message"
                name="message"
                rows="5"
                className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-violet-300"
              ></textarea>
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-300 transition-all duration-300 ease-in-out tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
              >
                <TbSend />
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSect;
