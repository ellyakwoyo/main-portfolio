import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { Link } from "react-scroll";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Elly Opetu</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Reach out to me and i make your idea a reality.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+2547 1653 3839</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">ellyopetu@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
};

export default ContactLeft;
