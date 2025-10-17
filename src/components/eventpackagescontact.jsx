import React, { useState } from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const EventPackagesContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#252D41] leading-tight">
              Perfectly Designed Complete Event Packages!
            </h1>

            {/* Description */}
            <p className="text-[#3A4664] text-sm sm:text-base leading-relaxed">
              Unlock the magic of our expertly crafted event packages! From weddings to corporate gatherings, parties, and special celebrations, we design every detail with elegance and precision. Our tailored offerings ensure a seamless experience that reflects your vision. Contact us today and let's create an event that becomes an unforgettable masterpiece.
            </p>

            {/* Follow Us Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-semibold text-[#252D41]">
                Follow Us:
              </h3>
              
              {/* Social Icons */}
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#B68706] hover:bg-yellow-700 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#B68706] hover:bg-yellow-700 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#B68706] hover:bg-yellow-700 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-[#B68706] hover:bg-yellow-700 flex items-center justify-center transition-colors"
                  aria-label="Pinterest"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Subject Textarea */}
            <div>
              <textarea
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none text-sm sm:text-base"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto text-sm sm:text-base         px-[42px] hover:bg-gradient-to-b from-[#A27806] to-[#D19B06] cursor-pointer transition-all duration-700 uppercase font-bold py-4 border-[2px] border-[#B68706] text-[#000000] hover:text-white"
              >
                CONTACT NOW
              </button>
              
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-12 lg:mt-16">
          <div className=" overflow-hidden shadow-lg h-64 sm:h-80 lg:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d73.0!3d22.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventPackagesContact;