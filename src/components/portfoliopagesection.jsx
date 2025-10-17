import React from 'react';

const Portfoliopagesection = () => {
    return (
        <div>
            <div className="bg-[white] py-10 px-4 md:px-6 lg:px-8">
                <div className="max-w-[1240px] mx-auto grid grid-cols-7 gap-5">
                    <div className="col-span-5">
                        <div className="flex gap-5">
                            <div className=""><img src="/Elegant Wedding Decorations.svg" alt="" /></div>
                            <div className=""><img src="/Manavarai Decoration - Wedding Planners in Coimbatore Tamilnadu India.svg" alt="" /></div>
                        </div>
                        <div className="flex gap-5 pt-5">
                            <div className=""><img src="/latest wedding ceremony stage decoration ideas.svg" alt="" /></div>
                            <div className=""><img src="/Low Budget Wedding Stage Decoration Ideas - For Indian Weddings.svg" alt="" /></div>
                        </div>
                        <div className="pt-5">
                            <div>
                            <img src="/Anil Caterers - Wedding Caterers In Bangalore.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 h-full">
                        <div className="pb-5"><img className='h-full' src="/Home Decor Hacks For Your Wedding (1).svg" alt="" /></div>
                        <div className=""><img className='h-full' src="/Chicken Milega Kya_ (1).svg" alt="" /></div>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-6">
                    <button className='px-[42px] hover:bg-gradient-to-b from-[#A27806] to-[#D19B06] cursor-pointer transition-all duration-700 uppercase font-bold py-4 border-[2px] border-[#B68706] text-[#000000] hover:text-white '>Contact now</button>
                </div>
            </div>
        </div>
    );
}

export default Portfoliopagesection;
