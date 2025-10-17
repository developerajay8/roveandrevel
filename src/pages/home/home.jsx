import React from "react";
import Hero from "../../components/hero";
import MarqueeLogos from "../../components/marqueelogos";
import Services from "../../components/services";
import PortfolioGallery from "../../components/portfoliogallery";
import AboutRoveRevel from "../../components/aboutroverevel";
import TestimonialsSection from "../../components/testimonialssection";
import ContactUsSection from "../../components/contactussection";

const Home = () => {
  return (
    <div className="">
      <Hero/>
      <MarqueeLogos/>
      <Services/>
      <PortfolioGallery/>
      <AboutRoveRevel/>
      <TestimonialsSection/>
      <ContactUsSection/>
      
    </div>
  );
};

export default Home;
