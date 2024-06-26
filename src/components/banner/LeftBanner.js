import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaVuejs,
  FaLinkedinIn,
  FaReact,
  FaLaravel,
} from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { Link } from "react-scroll";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Software Engineer.",
      "Full Stack Developer.",
      "Value provider.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Elly Opetu</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Empowering your business with cutting-edge web solutions, I transform
          ideas into dynamic, full-stack applications. Let's build the future of
          your digital presence together.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <Link
              activeClass="active"
              to="#"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </Link>
            <Link
              activeClass="active"
              to="#"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </Link>
            <Link
              activeClass="active"
              to="#"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILLED ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiPhp />
            </span>
            <span className="bannerIcon">
              <FaLaravel />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaVuejs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
