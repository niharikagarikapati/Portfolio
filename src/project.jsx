import React, { useState } from "react";

const Carousel = () => {
  const images = [
    { src: "/dumbell.jpg", alt: "Slide 1" },
    { src: "weather.png", alt: "Slide 2" },
    { src: "text-to-voice.png", alt: "Slide 3" },
    { src: "todo.png", alt: "Slide 4" },
    { src: "pf.png", alt: "Slide 5" },
    { src: "Ecommerce.jpg", alt: "Slide 6" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className='relative max-w-screen-lg mx-auto overflow-hidden pt-14 px-4'>
      {/* Image container with smooth sliding effect */}
      <div
        className='flex transition-transform duration-500 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className='flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
            <img
              className='w-full h-auto rounded-lg shadow-md block'
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      {/* Previous slide button */}
      <button
        className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none'
        onClick={prevSlide}
        aria-label='Previous Slide'>
        &#10094;
      </button>

      {/* Next slide button */}
      <button
        className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none'
        onClick={nextSlide}
        aria-label='Next Slide'>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
