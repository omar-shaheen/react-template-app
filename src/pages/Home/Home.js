import React from "react";
import HomeSlides from "../../components/HomeSlides/HomeSlides";
import AboutUs from "../AboutUs/AboutUs";
import TitleGallery from "../../components/TitleSections/TitleGallery";
import Gallery from "../../components/Gallery/Gallery";
import TitleBlog from "../../components/TitleSections/TitleBlog";
import Blog from "../../components/Blog/Blog";
// import TitleContactUs from "../../components/TitleSections/TitleContactUs";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/ContactUs";

function Home() {
  return (
    <div>
      <HomeSlides />
      <AboutUs />
      <TitleGallery />
      <Gallery />
      <TitleBlog />
      <Blog />
      {/* <TitleContactUs /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
