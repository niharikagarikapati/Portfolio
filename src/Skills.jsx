import "./index.css";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 0.4},
    { name: "React", level: 0.6},
    { name: "CSS", level: 0.5 },
    { name: "Git", level: 0.45 },
    { name: "C++", level: 0.8 },
    { name: "Figma", level: 0.8 },
    { name: "C", level: 0.6 },
  ];

  const [loaded, setLoaded] = useState(false);

  // Function to determine the color of the progress bar
  const getBarColor = (level) => {
    if (level >= 0.8) return "bg-green-500"; // Advanced - Green
    if (level >= 0.4) return "bg-yellow-500"; // Intermediate - Yellow
    return "bg-red-500"; // Basic - Red
  };

  // IntersectionObserver hook to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow the component to be observed multiple times
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      // Trigger the gradual loading when the component comes into view
      setLoaded(true);
    } else {
      // Reset the loaded state when the component goes out of view
      setLoaded(false);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <h1 className='text-white font-marker text-5xl text-center mb-8'>
        Skills
      </h1>
      <div className='container md:w-2/3 mx-auto p-6'>
        <div className='space-y-6'>
          {skills.map((skill, index) => {
            const barColor = getBarColor(skill.level);

            return (
              <div key={index} className='flex items-center gap-4'>
                <label className='w-1/3 md:w-32 text-lg font-medium text-white'>
                  {skill.name}
                </label>
                <div className='flex-1 relative'>
                  <div className='w-full h-3 bg-slate-900 rounded-full'>
                    <div
                      className={`h-full rounded-full ${barColor}`}
                      style={{
                        width: loaded ? `${skill.level * 100}%` : "0%",
                        transition: "width 1.5s ease-out", // Smooth transition
                      }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
