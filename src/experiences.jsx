import React from 'react'
import "./index.css";

const experiences = () => {
  return (
    <div>
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-s, font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2023 - June 2023
          </time>
          <h3 class="text-lg font-semibold text-green-300">
            Detection of Skin cancer using neural networks
          </h3>
          <p class="mb-4 text-base font-normal text-white">
            Grasped the basics of machine learning and conducted research on
            skin cancer diagnosis using online datasets.This experience taught
            me about image processing and image classification techniques.
            Leveraged Kaggle for dataset acquisition and Google Colab for
            training Deep Learning and Machine Learning models using Python,
            employing Keras and NumPy libraries. Researched and documented my
            study on Skin Cancer Detection, outlining methodologies and
            findings.
          </p>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 2023 - August 2023
          </time>
          <h3 class="text-lg font-semibold text-green-300">
            Frontend Developer
          </h3>
          <p class="text-base font-normal text-white">
            As a front-end developer, I developed and styled static web pages
            tailored to specific requirements. 2. I've been collaborating with
            my team and learning both Vue.js and React.js to improve my frontend
            designs. 3. Utilized Vue.js and React.js to develop the websites
            based on the provided Figma files. 4. Used ReactJs and VueJs for
            designing the pages. Employed External and Tailwind CSS for Styling
            the pages.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default experiences
