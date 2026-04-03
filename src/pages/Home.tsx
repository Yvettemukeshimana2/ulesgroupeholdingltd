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

      {/* ── Hero Slider — height fits viewport below fixed nav ─────────────────────────── */}
      <div className="relative min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)] w-full overflow-hidden bg-black">

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
        <div className="relative h-full min-h-[inherit] flex items-center justify-start" style={{ zIndex: 10 }}>
          <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 md:pl-16 md:pr-8 text-white py-8 sm:py-10">
            {/* Badge */}
            <div className="mb-4 sm:mb-6 inline-block">
              <span className="bg-customBlue-950 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-semibold">
                Elevating Engineering Excellence
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {images[currentIndex].title}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              {images[currentIndex].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap">
              <button type="button" className="w-full sm:w-auto min-h-[48px] text-center bg-customBlue-950 hover:bg-black text-white px-6 sm:px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105">
                Request Consultation
              </button>
              <button type="button" className="w-full sm:w-auto min-h-[48px] text-center border-2 border-white text-white hover:bg-white hover:text-customBlue-950 px-6 sm:px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Prev button */}
        <button
          onClick={goToPrev}
          className="absolute left-2 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 min-w-[44px] min-h-[44px] rounded-full transition-all duration-300 flex items-center justify-center"
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
          className="absolute right-2 sm:right-6 md:right-12 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 min-w-[44px] min-h-[44px] rounded-full transition-all duration-300 flex items-center justify-center"
          style={{ zIndex: 20 }}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 20 }}>
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
        <div className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 animate-bounce hidden sm:block" style={{ zIndex: 20 }}>
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