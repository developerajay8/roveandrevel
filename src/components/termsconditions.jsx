import React, { useState } from 'react';
import { Shield, Lock, Eye, Users, Globe, Bell, Key, RefreshCw, Mail, MapPin, CheckCircle } from 'lucide-react';

const Termsconditions = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const sections = [
    {
      icon: Shield,
      number: "01",
      title: "Introduction",
      content: "At Rove and Revel Events & Hospitality Private Limited, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and services."
    },
    {
      icon: Eye,
      number: "02",
      title: "What Information We Collect",
      content: "We only collect the essential information you choose to provide through contact forms (Name, Email, Phone Number, Event Type, Message), inquiry forms for event services, and newsletter or marketing opt-ins. We do not collect sensitive personal data unless explicitly needed for service purposes and with your consent."
    },
    {
      icon: Lock,
      number: "03",
      title: "Use of Your Information",
      content: "We use your information solely to respond to your event inquiries, send booking or service-related communication, and send updates only if you've opted in. We never sell, rent, or trade your personal information to any third parties."
    },
    {
      icon: Globe,
      number: "04",
      title: "Third-Party Services",
      content: "We may integrate third-party tools to enhance your experience, such as Calendly for bookings, Google Maps for event locations, Instagram/Facebook Embeds for social showcases, and Analytics for understanding site performance. These services may use cookies or tracking tools as per their own privacy policies."
    },
    {
      icon: Users,
      number: "05",
      title: "Cookies",
      content: "Our website uses cookies to maintain session performance, understand site behavior via Google Analytics or similar tools, and improve load times for repeat visitors. You can manage or disable cookies via your browser settings."
    },
    {
      icon: Bell,
      number: "06",
      title: "Communication Preferences",
      content: "You can opt out of promotional communications at any time by clicking 'Unsubscribe' in our emails or writing to us at support@roveandrevel.com. We will still contact you for essential updates if you're an active client."
    },
    {
      icon: Key,
      number: "07",
      title: "Data Security",
      content: "We follow industry-standard data protection practices, including secure servers, access control for internal teams, and SSL encryption where applicable. While we strive for full protection, no digital system is 100% immune. In case of data breaches, affected users will be informed as per legal norms."
    },
    {
      icon: CheckCircle,
      number: "08",
      title: "Your Rights",
      content: "You have the right to request access to the data we hold about you, request correction or deletion of your data, and withdraw consent for communications at any time."
    },
    {
      icon: RefreshCw,
      number: "09",
      title: "Updates to This Policy",
      content: "This Privacy Policy may be updated periodically. All changes will be posted here. Continued use of our website after updates implies your acceptance."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDEFDF]">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2d3a67] to-[#1a2440] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D19B06] rounded-2xl mb-6 shadow-2xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Privacy Policy
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Your trust matters to us. Learn how we protect and handle your personal information.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <span className="px-5 py-2 text-[#2d3a67] font-bold bg-white bg-opacity-10 rounded-full border border-[#D19B06]">
                Effective Date: January 1, 2025
              </span>
              <span className="px-5 py-2 text-[#2d3a67] font-bold bg-white bg-opacity-10 rounded-full border border-[#D19B06]">
                Last Updated: January 1, 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:gap-10">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                  hoveredCard === index ? 'shadow-2xl transform scale-105' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Icon Section */}
                  <div className={`flex-shrink-0 p-8 sm:p-10 flex items-center justify-center ${
                    hoveredCard === index ? 'bg-[#D19B06]' : 'bg-[#2d3a67]'
                  } transition-colors duration-300`}>
                    <div className="text-center">
                      <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-3" />
                      <span className={`text-3xl sm:text-4xl font-bold ${
                        hoveredCard === index ? 'text-[#2d3a67]' : 'text-[#D19B06]'
                      } transition-colors duration-300`}>
                        {section.number}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-6 sm:p-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#2d3a67] mb-4">
                      {section.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#2d3a67] py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Contact Us
          </h3>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            For any privacy-related concerns, feel free to reach out to us.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Email Card */}
          <a
            href="mailto:support@roveandrevel.com"
            className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl 
                       transition-all duration-300 hover:scale-[1.03] flex items-center sm:items-start gap-4 sm:gap-5"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D19B06] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#2d3a67] mb-1 sm:mb-2">
                Email
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                support@roveandrevel.com
              </p>
            </div>
          </a>

          {/* Address Card */}
          <div
            className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl 
                       transition-all duration-300 hover:scale-[1.03] flex items-center sm:items-start gap-4 sm:gap-5"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#D19B06] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#2d3a67] mb-1 sm:mb-2">
                Address
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                Rove & Revel HQ, Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      {/* <footer className="bg-[#2d3a67] border-t border-[#D19B06] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-300 text-sm">
            © 2025 Rove and Revel Events & Hospitality Private Limited. All rights reserved.
          </p>
        </div>
      </footer> */}
    </div>
  );
};

export default Termsconditions;