import React from "react";
import "./index.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animation from "./animate.json";
import resume from "/resume.pdf";
import Navbar from "./navbar";
import ScrollView from "./ScrollView";
import Contact from "./contact";
import Projects from "./project";
import Skills from "./Skills";
import Experiences from "./experiences";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Hello", "My Portfolio"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1500,
  });
const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
};
  return (
    <div className="container">
      <Navbar />
      <div className="container min-h-screen p-4" id="section1">
        <div>
          <h1 className="text-white text-4xl font-marker ml-12">
            cout &lt;&lt; &quot; <span className="text-white">{text}</span>
            &quot;
          </h1>
          <span>
            <Cursor cursorStyle="|" />
          </span>
        </div>
        <div className="flex items-center justify-between">
          {" "}
          <div className="text-left text-balance p-4 w-2/3">
            <h1 className=" text-green-300 font-mono font-extrabold text-7xl pb-6">
              {" "}
              &lt;/Niharika Garikapati>
            </h1>
            <div className="text-white text-xl font-light font-mono al">
              <span className="text-green-300 text-4xl p-4">&gt;&gt;</span> I am
              Niharika currently persuing my final year in B.Tech,computer
              science and business systems. Intially, I did not have much
              interest in programming and coding but later when i started
              learning, i found it much interesting and challenging as well.Now,
              I started creating new and innovative things.I am very passionate
              and focussed on learning new technologies.
            </div>
            <div className="flex justify-center items-center pt-5 pr-40">
              <button
                className="text-white text-lg bg-pink-600 rounded-lg p-4 w-1/3"
                onClick={scrollToContact}
              >
                Contact me
              </button>
            </div>
          </div>
          <div className="w-1/3 p-4">
            <Lottie animationData={animation} className="" />
            <div className="text-lg flex justify-center items-center border-2 border-pink-600 rounded-lg p-4">
              <a href={resume} className=" text-white " download>
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollView>
        <div id="project" className="h-[70vh]  text-white pb-24">
          <h1 className="text-5xl text-center font-marker pb-14">Projects</h1>
          <Projects />
        </div>
        <div id="achievements" className="h-[70vh] p-24 text-white">
          <p>
            <Skills />
          </p>
        </div>
        <div id="experiences" className="h-[70vh] p-24 text-white">
          <h1 className="font-marker text-5xl text-center pb-6">Experiences</h1>
          <Experiences />
        </div>
        <div id="contact" className="h-[70vh] pb-24 text-white">
          <h1 className="font-marker text-5xl text-center pb-14">Contact</h1>
          <Contact />
        </div>
      </ScrollView>
    </div>
  );
};

export default Home;
