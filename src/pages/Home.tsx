 // src/pages/Home.tsx
import React, { useState, useEffect, useRef } from "react";
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
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (i: number) => { setCurrentIndex(i); resetTimer(); };
  const goToPrev = () => goTo((currentIndex - 1 + images.length) % images.length);
  const goToNext = () => goTo((currentIndex + 1) % images.length);

  return (
    <div className="flex flex-col">

      {/* ── Hero Slider ─────────────────────────── */}
      <div className="relative h-screen w-full overflow-hidden bg-black">

        {/* Sliding images — opacity fade only */}
        {images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              opacity:    i === currentIndex ? 1 : 0,
              transition: "opacity 1s ease",
              zIndex:     i === currentIndex ? 1 : 0,
            }}
          >
            <img
              src={img.src}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* ── Single constant overlay — sits above ALL slides, never moves ── */}
        <div
          className="absolute inset-0"
          style={{
            zIndex: 5,
            background: "linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.30) 100%)",
          }}
        />

        {/* Content — above the overlay */}
        <div className="relative h-full flex items-center justify-start" style={{ zIndex: 10 }}>
          <div className="max-w-2xl mx-auto pl-8 md:pl-16 text-white">
            {/* Badge */}
            <div className="mb-6 inline-block">
              <span className="bg-customBlue-950 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Elevating Engineering Excellence
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {images[currentIndex].title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
              {images[currentIndex].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="bg-customBlue-950 hover:bg-black text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Request Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-customBlue-950 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Prev button */}
        <button
          onClick={goToPrev}
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
          style={{ zIndex: 20 }}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={goToNext}
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"
          style={{ zIndex: 20 }}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 20 }}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-customBlue-950"
                  : "w-3 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce" style={{ zIndex: 20 }}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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