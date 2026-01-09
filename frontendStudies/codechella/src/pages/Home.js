import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import LineUp from "../components/LineUp";
import Footer from "../components/Footer";
import mainLogo from "../assets/img/main-logo.svg"

function Home() {
  return (
    <>
      <Header />
      <Banner
        backgroundType="bannerBg homeBanner"
        containerType="headerContainer homeBannerContainer"
        altText="Codechella"
        buttonText="Compre agora"
        buttonLink="/ingresso"
        images={[mainLogo]}
        showMainText={true}
      />
      <Cards />
      <LineUp />
      <Footer />
    </>
  );
}

export default Home;
