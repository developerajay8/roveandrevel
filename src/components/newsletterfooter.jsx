import React, { useState } from "react";
import { Twitter, Facebook, Linkedin } from "lucide-react";

export default function NewsletterFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  return (
    <div
      className=" text-white"
      style={{
        backgroundImage: 'url("/bg.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Newsletter Section */}
      <div className="relative px-4 py-16 md:py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute left-34 top-1/2 -translate-y-1/2 hidden lg:block">
          <img src="/Vector 2.svg" alt="" />
        </div>

        <div className="absolute right-34 top-1/4 hidden lg:block">
          <img src="/Group 3 (2).svg" alt="" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] font-bold mb-4 md:mb-6">
            Never miss a single news
          </h2>
          <p className="text-[#DBDADB] text-sm md:text-base mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Stay informed with all the latest updates and news about our events.
            Never miss a moment of our exciting and innovative gatherings in the
            world of technology and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter your email address"
              className="w-full sm:w-80 md:w-96 px-6 py-3 md:py-4 rounded-lg bg-white       text-[16px]          text-[#3F3C3D] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              onClick={handleSubscribe}
              className="w-full sm:w-auto cursor-pointer px-8 py-3 md:py-4 font-semibold rounded-lg  duration-300 bg-gradient-to-b from-[#A27806] to-[#D19B06] hover:bg-[#a07700] text-[#FFFFFF] text-[16px] transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="">
        <div className="max-w-[1240px] mx-auto px-4 py-8 md:py-10">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
            {/* Brand */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold">Rove & Revel</h3>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center items-center font-medium gap-4 md:gap-8 text-sm md:text-base">
              <a
                href="#about"
                className="hover:text-[#D19B06] transition-colors"
              >
                About
              </a>
              <a
                href="#tickets"
                className="hover:text-[#D19B06] transition-colors"
              >
                Tickets
              </a>
              <a
                href="#speakers"
                className="hover:text-[#D19B06] transition-colors"
              >
                Speakers
              </a>
              <a
                href="#gallery"
                className="hover:text-[#D19B06] transition-colors"
              >
                Gallery
              </a>
              <a
                href="#pricing"
                className="hover:text-[#D19B06] transition-colors"
              >
                Pricing
              </a>
              <a href="#faq" className="hover:text-[#D19B06] transition-colors">
                FAQ
              </a>
              <a
                href="#contact"
                className="hover:text-[#D19B06] transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#twitter"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full  hover:bg-gradient-to-b from-[#A27806] to-[#D19B06] border-[1px] border-[#7A38FC] font-bold text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#facebook"
                className="w-10 h-10 md:w-12 md:h-12 hover:bg-gradient-to-b from-[#A27806] to-[#D19B06] border-[1px] border-[#7A38FC] rounded-full  flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 md:w-12 md:h-12 hover:bg-gradient-to-b from-[#A27806] to-[#D19B06] border-[1px] border-[#7A38FC] rounded-full  flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#vimeo"
                className="w-10 h-10 md:w-12 hover:bg-gradient-to-b from-[#A27806] to-[#D19B06] border-[1px] border-[#7A38FC] md:h-12 rounded-full  flex items-center justify-center transition-colors"
              >
                <span className="text-lg font-bold">V</span>
              </a>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t-2 border-[#6F6D6D] text-[16px] ">
            <p className="text-center md:text-left text-[#DBDADB]">
             © 2025 Rove and Revel Events & Hospitality Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#terms"
                className="text-[#DBDADB] transition-colors hover:text-[#D19B06]"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacypolicy"
                className="text-[#DBDADB] transition-colors hover:text-[#D19B06]"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
