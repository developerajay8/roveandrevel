import React from "react";

const ServicesHorizontalScroll = () => {
  const services = [
    {
      id: 1,
      stitle: "Royal Wedding",
      image: "/White orchids (1).svg",
      offsetTop: true,
    },
    {
      id: 2,
      title: "Corporate Events",
      image: "/Chicken Milega Kya_.svg",
      offsetTop: false,
    },
    {
      id: 3,
      stitle: "Birthday",
      image: "/IMG-20240217-WA0059 1.svg",
      offsetTop: true,
    },
    {
      id: 4,
      title: "Music",
      image: "/Create an inspiring professional poster for an indian music school _ Postcard, flyer or print contest.svg",
      offsetTop: false,
    },
    {
      id: 5,
      stitle: "House Warming",
      image: "/Home Decor Hacks For Your Wedding.svg",
      offsetTop: true,
    },
    {
      id: 6,
      title: "Photography",
      image: "/Photo by Sergey Sokolov on Unsplash.svg",
      offsetTop: false,
    },
    {
      id: 7,
      stitle: "Lightings",
      image: "/download (2).svg",
      offsetTop: true,
    },
    {
      id: 9,
      title: "Corporate Events",
      image: "/Chicken Milega Kya_.svg",
      offsetTop: false,
    },
    {
      id: 10,
      stitle: "Birthday",
      image: "/IMG-20240217-WA0059 1.svg",
      offsetTop: true,
    },
    {
      id: 11,
      title: "Music",
      image: "/Create an inspiring professional poster for an indian music school _ Postcard, flyer or print contest.svg",
      offsetTop: false,
    },
    {
      id: 12,
      stitle: "House Warming",
      image: "/Home Decor Hacks For Your Wedding.svg",
      offsetTop: true,
    },
    {
      id: 13,
      title: "Photography",
      image: "/Photo by Sergey Sokolov on Unsplash.svg",
      offsetTop: false,
    },
    {
      id: 14,
      stitle: "Lightings",
      image: "/download (2).svg",
      offsetTop: true,
    },
    
  ];

  return (
    <div className="bg-white md:py-16 py-10 overflow-hidden">
      <div className="w-full">
        {/* Horizontal Scrollable Container */}
        <div className="overflow-x-auto overflow-y-visible hide-scrollbar">
          <div className="inline-flex gap-3 px-4 sm:px-6 lg:px-8  items-start">
            {services.map((service) => (
              <div
                key={service.id}
                className={`flex-shrink-0 w-45 ${
                  service.offsetTop ? "mt-0" : "mt-12 sm:mt-16 md:mt-20"
                }`}
              >
                <h3 className="mb-2 text-[21px] font-serif font-semibold text-[#000000] whitespace-pre-line">
                  {service.stitle}
                </h3>
                <div className=" overflow-hidden shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full sm:h-full h-[340px] object-cover"
                  />
                </div>

              <h3 className="mt-2 text-[21px] font-serif font-semibold text-[#000000] whitespace-pre-line">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .hide-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .hide-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        .hide-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
        @media (max-width: 768px) {
          .hide-scrollbar::-webkit-scrollbar {
            height: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesHorizontalScroll;
