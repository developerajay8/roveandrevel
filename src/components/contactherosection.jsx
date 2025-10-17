import React from 'react';

const Contactherosection = () => {
    return (
        <div>
            <div>
             <section
      className=" flex relative items-center justify-center text-center h-[450px] bg-cover bg-center"
      style={{
        backgroundImage: `url('/Wedding stage decorations 1.svg')`, // replace or remove (you said you'll add inline)
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8">
        

        {/* Tagline */}
        <p className="text-white font-serif md:text-[18px] py-5 text-base font-light mb-2">
          Reach Out For Perfection
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold uppercase text-white mb-4 font-serif tracking-wide">
         Contact Us
        </h1>

        
      </div>
    </section>
        </div>
        </div>
    );
}

export default Contactherosection;
