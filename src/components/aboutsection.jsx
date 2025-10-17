"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section
      className="relative flex items-center justify-center text-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/White orchids.svg')`, // replace or remove (you said you'll add inline)
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8">
        {/* Decorative top border */}
        <div className="flex justify-center mb-3">
          <img src="/pic10-free-img.png.svg" alt="" />
        </div>

        {/* Tagline */}
        <p className="text-white font-serif md:text-[18px] py-5 text-base font-light mb-2">
          We bring dreams to life!
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif tracking-wide">
          ABOUT US
        </h1>

        {/* Button */}
        <button className="mt-2 text-white px-6 py-2  text-[20px] md:text-[24px] font-medium font-serif">
          Start Planning
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
