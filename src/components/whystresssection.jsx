import React from 'react';

const WhyStressSection = () => {
  return (
    <div className="min-h-screen bg-[white] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Why stress? We've got it all covered
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Column - Text + Stats + Image (WIDER) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Description Text */}
            <div className="">
            <div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Rove & Revels Events Company — your partners in designing unforgettable celebrations. 
                Welcome to Rove & Revels, where every detail reflects your story and every moment is 
                crafted with care. As a full-service wedding and event management company, we specialize 
                in creating seamless experiences that delight and inspire. With years of expertise and 100+ 
                successful events behind us, we know how to turn your vision into an extraordinary reality. 
                Trust us to make your occasion truly memorable, filled with memories that last a lifetime. 
                Let's celebrate together, the Rove & Revels way!
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                  253
                </div>
                <div className="text-sm sm:text-base font-medium text-orange-500">
                  Events Nailed
                </div>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                  82
                </div>
                <div className="text-sm sm:text-base font-medium text-orange-500">
                  Corporate Events
                </div>
              </div>
            </div>
            </div>

            {/* Image 1 - Golden Lights */}
            <div className="rounded-2xl col-span-5 overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop"
                alt="Event Decoration"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>

          {/* Right Column - Image + Stats + Image (NARROWER) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Image 2 - Event Setup (smaller width) */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=500&fit=crop"
                alt="Event Setup"
                className="w-full h-56 sm:h-64 lg:h-72 object-cover"
              />
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                  146
                </div>
                <div className="text-sm sm:text-base font-medium text-orange-500">
                  Weddings
                </div>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                  25
                </div>
                <div className="text-sm sm:text-base font-medium text-orange-500">
                  Birthday parties
                </div>
              </div>
            </div>

            {/* Image 3 - Corporate Event */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
                alt="Corporate Event"
                className="w-full h-56 sm:h-64 lg:h-72 object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default WhyStressSection;