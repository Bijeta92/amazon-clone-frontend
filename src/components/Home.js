import React, { useContext } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

import HeroSection from "./HeroSection";
import AmazonContext from "../Context/AmazonCloneContext";
import { CarouselImageData } from "../components/CarouselImageData";
import Footer from "../components/Footer";

const Home = () => {
  const { productCategory } = useContext(AmazonContext);

  return (
    <>
      <Header />
      <NavBar />
      <div className="browser__body">
        <HeroSection slides={CarouselImageData} />
      </div>
      <Footer />
      
    </>
  );
};

export default Home;
