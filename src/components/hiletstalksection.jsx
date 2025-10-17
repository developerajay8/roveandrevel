import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const HiLetsTalkSection = () => {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252D41] font-serif">
              Hi Let's Talk!
            </h1>

            {/* Company Name */}
            <h2 className="text-base sm:text-[16px] font-semibold text-gray-900 uppercase tracking-wide">
              ROVE & REVEL'S EVENTS
            </h2>

            {/* Description */}
            <div className="space-y-4 text-[#000000] text-sm sm:text-base leading-relaxed">
              <p>
                Have a question or ready to turn your event dreams into reality? 
                We'd love to hear from you! Our team is here to guide you, answer 
                your inquiries, and discuss your unique event needs. At Rove & 
                Revels, we're excited to create something truly special for you.
              </p>
              <p>
                Let's begin your celebration journey today!
              </p>
            </div>

            {/* We're here! */}
            <p className="text-[#252D41] font-semibold font-serif text-[16px]">
              We're here!
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <a 
                  href="tel:+919326048920" 
                  className="text-[#252D41] text-base sm:text-[18px] hover:text-orange-500 transition-colors"
                >
                  +91 93260 48920
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <a 
                  href="mailto:info@rovenrevel.com" 
                  className="text-[#252D41] text-base sm:text-[18px] hover:text-orange-500 transition-colors"
                >
                  info@rovenrevel.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <p className="text-[#252D41] sm:text-[18px] text-base leading-relaxed">
                  B Wing Ground Floor, Shop No.13, Aum Heights, Master Road, Chippwad, Vaiead-396001
                </p>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className=" overflow-hidden ">
              <img
                src="/e4b44fe1-a592-42fe-81a3-829b6af06950.svg"
                alt="Wedding Stationery"
                className="w-full  object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HiLetsTalkSection;