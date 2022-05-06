import React from "react";
import About from "./components/About/About";
import CustomCarousel from "./components/Carousel/Carousel";
import NavBar from "./components/NavBar/NavBar";
import OurServices from "./components/OurServices/OurServices";
import OurTestimonial from "./components/OurTestimonial/OurTestimonial";
import FeaturedListings from "./components/FeaturedListings/FeaturedListings";
import Footer from "./components/Footer/Footer";
import SearchSection from "./components/smallerComponents/SearchSection";
import TopmostNav from "./components/TopmostNav/TopmostNav";

const Home = () => {
  return (
    <div>
      <TopmostNav />
      <NavBar />
      <CustomCarousel />
      <SearchSection />
      <About />
      <OurServices />
      <FeaturedListings />
      <OurTestimonial />
      <Footer />
    </div>
  );
};

export default Home;
