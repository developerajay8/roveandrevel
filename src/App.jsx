import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import NewsletterFooter from "./components/newsletterfooter";
import Services from "./pages/services/services";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";
import PrivacyPolicy from "./pages/privacypolicy/privacypolicy";
import Termsconditions from "./pages/termsconditions/termsconditions";


const App = () => {
  return (
    <Router>
      <Header />
      
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsconditions" element={<Termsconditions />} />
          
        </Routes>
      </main>
    <NewsletterFooter/>
    </Router>
  );
};

export default App;
