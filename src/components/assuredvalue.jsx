import React from 'react'

export default function Assuredvalue() {
  return (
    <div className='bg-white max-w-[1240px] py-10 px-4 md:px-6 lg:px-8 mx-auto'>
      <h2 className="text-3xl font-bold text-[#121212] text-center mb-12">Assured value for money</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="">
        <div className="bg-[#fff4d6] px-8 md:py-30 py-20 flex items-center justify-center rounded-[12px]">
            <div className="">
                <img src="/new-logo 2.svg" className='sm:w-[270px] w-[200px]' alt="" />
            </div>
        </div>
        <h2 className='text-center py-[24px] md:text-[30px] text-[22px] font-bold font-serif'>Price Beat <br /> Challenge</h2>
        </div>
        

        <div className="">
        <div className="bg-[#fff4d6] px-8 md:py-30 py-20 flex items-center justify-center rounded-[12px]">
            <div className="">
                <img src="/new-logo 2.svg" className='sm:w-[270px] w-[200px]' alt="" />
            </div>
        </div>
        <h2 className='text-center py-[24px] md:text-[30px] text-[22px] font-bold font-serif'>Competitive <br /> Planning Free</h2>
        </div>
      </div>
    </div>
  )
}
