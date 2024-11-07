import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaCertificate,
} from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  // State to handle mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white font-marker pt-5">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        {/* Logo or Brand Name */}

        {/* Hamburger button for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <ul
          className={`lg:flex space-x-6 text-3xl text-yellow-500 ${
            isMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <li>
            <Link smooth to="#section1" className="hover:text-yellow-300">
              About
            </Link>
          </li>
          <li>
            <Link smooth to="#project" className="hover:text-yellow-300">
              Projects
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

      {/* Social Media Icons (always visible) */}
      <div className="flex flex-col items-end space-y-2 mb-0 mt-4 lg:mt-0">
        <a
          href="https://www.instagram.com/niharikagarikapati"
          className="hover:text-gray-600"
        >
          <FaInstagram className="mr-3 text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/niharikagarikapati"
          className="hover:text-gray-600"
        >
          <FaLinkedin className="mr-3 text-2xl" />
        </a>
        <a
          href="https://github.com/niharikagarikapati"
          className="hover:text-gray-600"
        >
          <FaGithub className="mr-3 text-2xl" />
        </a>
        <a
          href="https://drive.google.com/drive/u/0/folders/11xopbTWwh6ZTzWIop0wrmkDMm4m0QpE_"
          className="hover:text-gray-600"
        >
          <FaCertificate className="mr-3 text-2xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
