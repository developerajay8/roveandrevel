import React from 'react';

const Servicessection = () => {
    return (
        <div>
             <section
      className=" flex items-center justify-center text-center h-[450px] bg-cover bg-center"
      style={{
        backgroundImage: `url('/Group 1000004221.svg')`, // replace or remove (you said you'll add inline)
      }}
    >
      {/* Overlay for better text visibility */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8">
        

        {/* Tagline */}
        <p className="text-white font-serif md:text-[18px] py-5 text-base font-light mb-2">
          We bring dreams to life!
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif tracking-wide">
          ABOUT US
        </h1>

        
      </div>
    </section>
        </div>
    );
}

export default Servicessection;
