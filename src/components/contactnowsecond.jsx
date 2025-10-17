import React from 'react';

const Contactnowsecond = () => {
  
    return (
        <div>    
        

        <section
      className=" relative flex items-center justify-center text-center h-[450px] bg-cover bg-center"
      style={{
        backgroundImage: `url('/Group 1000004213.svg')`, // replace or remove (you said you'll add inline)
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8">
        

        {/* Tagline */}
        <p className="text-white font-serif md:text-[22px] py-5 text-[18px] font-light">
          Want Your Events To Be Perfect And Memorable?
        </p>
        <p className='text-[#D1D1D1] text-[15px] mb-10 text-center'>Your story deserves the perfect chapter of perfection. </p>

        {/* Title */}
        <button className='px-[42px] hover:bg-gradient-to-b from-[#A27806] to-[#D19B06] cursor-pointer transition-all duration-700 uppercase font-bold py-4 border-[2px] border-[#B68706] text-[#FFFFFF] '>Contact now</button>

        
      </div>
    </section>

      
        </div>
    );
}

export default Contactnowsecond;
