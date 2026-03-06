 // src/pages/Home.tsx
import React, { useState, useEffect } from "react";
import im1 from "../assets/t11.jpeg";
import im2 from "../assets/t12.jpeg";
import im3 from "../assets/t8.jpeg";
import OurServices from "./service";
import AboutUs from "./Aboutus";
import OurProcess from "./Ourprocess";
import Specialties from "./Speciality";

const images = [
  {
    src: im1,
    title: "Expert Engineering Solutions",
    description:
      "Leading the engineering sector with innovative solutions that drive competitive advantage and maximize value for our clients.",
  },
  {
    src: im2,
    title: "Client-Centric Approach",
    description:
      "We work closely with our clients to understand their unique needs and deliver solutions that exceed expectations.",
  },
  {
    src: im3,
    title: "Quality & Excellence",
    description:
      "Committed to delivering exceptional results through cutting-edge technology and expert craftsmanship.",
  },
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goToPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col">
      {/* Hero Slider Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0">
          <img
            src={images[currentIndex].src}
            alt="Slide"
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-start z-10">
          <div className="max-w-2xl mx-auto pl-8 md:pl-16 text-white">
            {/* Badge */}
            <div className="mb-6 inline-block">
              <span className="bg-blue-600/80 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Elevating Engineering Excellence
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              {images[currentIndex].title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              {images[currentIndex].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Request Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-6 md:left-12 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-blue-600"
                  : "w-3 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 z-20 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
      <AboutUs />

      <OurServices />

      <Specialties />
      <OurProcess />
    </div>
  );
};

export default Home;
