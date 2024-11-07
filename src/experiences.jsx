import React from "react";
import "./index.css";

const Experiences = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {/* Experience 1 */}
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2023 - June 2023
          </time>
          <h3 className="text-lg sm:text-xl font-semibold text-green-300">
            Detection of Skin Cancer using Neural Networks
          </h3>
          <p className=" text-base font-normal text-white">
            Grasped the basics of machine learning and conducted research on
            skin cancer diagnosis using online datasets. This experience taught
            me about image processing and classification techniques. Leveraged
            Kaggle for dataset acquisition and Google Colab for training Deep
            Learning and Machine Learning models using Python, employing Keras
            and NumPy libraries.
          </p>
        </li>

        {/* Experience 2 */}
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 2023 - August 2023
          </time>
          <h3 className="text-lg sm:text-xl font-semibold text-green-300">
            Frontend Developer
          </h3>
          <p className="text-base font-normal text-white">
            As a front-end developer, I developed and styled static web pages
            tailored to specific requirements. I collaborated with my team and
            learned both Vue.js and React.js to improve my frontend designs.
            Utilized these frameworks to build the websites based on provided
            Figma files and employed Tailwind CSS for styling.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Experiences;
