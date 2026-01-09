import React from "react";
import BandsList from "./BandsList";
import Button from "./Button";
import Banner from "./Banner";
import chave from "../assets/img/chave.svg";

const LineUp = () => {
  const sabadoBands = [
    "System of a DOM",
    "Python Maiden",
    "Apollo Client 2001",
    "Bom Java",
    "NickCallBack",
    "Linkin Promises",
    "Fullstack Fighters",
    "Papa React",
    "Angular in Chains",
    "Agnostic Front-end",
    "SlipkNode",
    "Pink Flutter",
    "Kiss",
  ];

  const dominogBands = [
    "Lana Del Ploy",
    "Dua Lib",
    "The Backnd",
    "CSS Styles",
    "ArrayAna Grande",
    "DJ Query",
    "Miley Cypress",
    "The Bootstrap Boys",
    "Json Derulo",
    "CloudPlay",
    "Dev Lovato",
    "Kylie MiLOG",
    "Jenkins Brothers",
    "Rubycat Dolls",
  ];

  return (
    <section className="lineUp">
      <Banner
        backgroundType="bannerBg lineUpBanner"
        containerType="headerContainer lineUpBannerContainer"
        images={[chave]}
        showLineUpTitle={true}
      />
      <div className="sabado">
        <h2>Sábado 10</h2>
        <BandsList bands={sabadoBands} />
      </div>
      <div className="domingo">
        <h2>Domingo 11</h2>
        <BandsList bands={dominogBands} />
      </div>
      <div className="bannerButton">
        <Button text="Garanta já o seu!" link="/ingresso" className="button" />
      </div>
    </section>
  );
};

export default LineUp;
