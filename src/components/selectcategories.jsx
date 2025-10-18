import React from 'react';

const Selectcategories = () => {
    return (
        <div>
             <section
      className="relative py-[80px] h-full bg-cover bg-center"
      style={{
        backgroundImage: `url('/Premium Photo _ Elegant floral wedding backdrop wallpaper 1.svg')`, // replace or remove (you said you'll add inline)
      }}
    >
        <div className="max-w-[1240px] mx-auto">
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8">

        {/* Title */}
       <h1 className="text-[28px] pb-[40px] md:text-5xl font-bold text-white mb-4 font-serif tracking-wide text-center md:text-left">
  Select Categories
</h1>


        <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            <div className="">
                <div className="flex items-center justify-center">
                    <img src="/Group 3 (1).svg" alt="" />
                </div>
                <div className="text-[#FFFFFF] text-[16px] font-medium pt-2 text-center">Stages & Backdrops</div>
            </div>
             <div className="">
                <div className="flex items-center justify-center">
                    <img src="/Group 2.svg" alt="" />
                </div>
                <div className="text-[#FFFFFF] text-[16px] font-medium pt-2 text-center">Baby Shower</div>
            </div>
             <div className="">
                <div className="flex items-center justify-center">
                    <img src="/Union.svg" alt="" />
                </div>
                <div className="text-[#FFFFFF] text-[16px] font-medium pt-2 text-center">House Warming</div>
            </div>
             <div className="">
                <div className="flex items-center justify-center">
                    <img src="/Group 6.svg" alt="" />
                </div>
                <div className="text-[#FFFFFF] text-[16px] font-medium pt-2 text-center">Birthday parties </div>
            </div>
             <div className="">
                <div className="flex items-center justify-center">
                    <img src="/Group 7.svg" alt="" />
                </div>
                <div className="text-[#FFFFFF] text-[16px] font-medium pt-2 text-center">Corporate Events</div>
            </div>
             <div className="">
                <div className="flex items-center justify-center">
                    <img src="/Group 4.svg" alt="" />
                </div>
                <div className="text-[#FFFFFF] text-[16px] font-medium pt-2 text-center">Decorations</div>
            </div>
        </div>

        
      </div>
      </div>
    </section>
        </div>
    );
}

export default Selectcategories;
