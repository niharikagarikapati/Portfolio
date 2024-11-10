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
    <div className='container md:pb-12'>
      <Navbar />
      <div className='min-h-screen p-4' id='section1'>
        <div className='text-center'>
          <h1 className='text-white text-xl md:text-5xl font-marker md:ml-12'>
            cout &lt;&lt; &quot; <span className='text-white'>{text}</span>
            &quot;
          </h1>
          <span>
            <Cursor cursorStyle='|' />
          </span>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between mt-12'>
          <div className='text-left text-white p-4 w-full md:w-2/3'>
            <h1 className='text-green-300 font-mono font-extrabold text-5xl sm:text-6xl md:text-7xl pb-6'>
              &lt;/Niharika Garikapati&gt;
            </h1>
            <div className='text-white text-lg sm:text-xl font-light font-mono'>
              <span className='text-green-300 text-3xl sm:text-4xl p-4'>
                &gt;&gt;
              </span>{" "}
              I am Niharika, currently pursuing my final year in B.Tech,
              Computer Science and Business Systems. Initially, I did not have
              much interest in programming, but later I found it exciting and
              challenging. Now, I am passionate about learning new technologies
              and creating innovative solutions.
            </div>
            <div className='flex justify-center items-center pt-5'>
              <button
                className='text-white text-lg bg-pink-600 rounded-lg p-4 w-1/2 sm:w-1/3 md:w-1/4'
                onClick={scrollToContact}>
                Contact Me
              </button>
            </div>
          </div>
          <div className='w-full md:w-1/3 p-4'>
            <Lottie animationData={animation} className='w-full h-auto' />
            <div className='text-lg flex justify-center items-center border-2 border-pink-600 rounded-lg p-4 mt-6'>
              <a href={resume} className='text-white' download>
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollView>
        <div
          id='project'
          className='md:h-[70vh] text-white pb-24 px-6 sm:px-12'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl text-center font-marker pb-14'>
            Projects
          </h1>
          <Projects />
        </div>
        <div id='skills' className='md:h-[70vh] text-white'>
          <Skills />
        </div>
        <div id='experiences' className='md:h-[70vh]  text-white'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl text-center font-marker '>
            Experiences
          </h1>
          <Experiences />
        </div>
        <div id='contact' className='min-h-screen  text-white px-6'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl text-center font-marker '>
            Contact
          </h1>
          <Contact />
        </div>
      </ScrollView>
    </div>
  );
};

export default Home;
