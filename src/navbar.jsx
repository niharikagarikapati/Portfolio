import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaCertificate,
} from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";


const Navbar = () => {
  return (
    <nav className="text-white font-marker pt-5">
      <div className="max-w-screen-xl flex  justify-end  mx-auto p-4">
        <ul className="flex space-x-6 text-3xl text-yellow-500">
          <li>
            <Link smooth to="#section1" className="hover:text-yellow-300">
              About
            </Link>
          </li>
          <li>
            <Link smooth to="#project" className="hover:text-yellow-300">
              projects
            </Link>
          </li>
          <li>
            <Link smooth to="#achievements" className="hover:text-yellow-300">
              Skills
            </Link>
          </li>
          <li>
            <Link smooth to="#experiences" className="hover:text-yellow-300">
              Experiences
            </Link>
          </li>
          <li>
            <Link smooth to="#contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-end space-y-2 mb-0">
        <a
          href="https://www.instagram.com/niharikagarikapati"
          className="hover:text-gray-600"
        >
          <FaInstagram className="mr-3  text-2xl " />
        </a>
        <a
          href="https://www.linkedin.com/in/niharikagarikapati"
          className="hover:text-gray-600"
        >
          <FaLinkedin className="mr-3  text-2xl" />
        </a>
        <a
          href="https://github.com/niharikagarikapati"
          className="hover:text-gray-600"
        >
          <FaGithub className="mr-3 text-2xl" />
        </a>
        <a href="https://drive.google.com/drive/u/0/folders/11xopbTWwh6ZTzWIop0wrmkDMm4m0QpE_">
          <FaCertificate className="mr-3 text-2xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
