import React from "react";
import Card from "./Card";

const Cards = () => {
  const cardsData = [
    {
      icon:"confirmation_number",
      title:"Tickets",
      text:"Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências.",
      link:'#'
    },
    {
      icon:"local_activity",
      title:"Vip",
      text:"Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências.",
      link:'#'
    },
    {
      icon:"camping",
      title:"Camping",
      text:"Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências.",
      link:'#'
    },
  ];

  return (
    <section className="cards">
      <div className="presentation">
        <p className="textParagraph">
          Hora de programar nossa memória com novas lembranças! 
          <br />
          <br />
          Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências.
        </p>
        <p className="textEmphasis"><span>//</span>Divirta-se<span>!</span></p>
      </div>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </section>
  )
}

export default Cards