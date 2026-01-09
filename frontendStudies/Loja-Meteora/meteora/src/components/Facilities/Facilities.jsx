import "../Facilities/Facilities.sass";

function Facilities() {
  const facilities = [
    {
      id: 1,
      title: "Pague pelo pix",
      description: "Ganhe 5% OFF em pagamentos via PIX",
      className: "icon-pix",
    },
    {
      id: 2,
      title: "Troca grátis",
      description: "Fique livre para trocar em até 30 dias",
      className: "icon-troca",
    },
    {
      id: 3,
      title: "Sutentabilidade",
      description: "Moda responsável ue respeita o meio ambiente",
      className: "icon-sustentabilidade",
    },
  ];

  return (
    <section className="advantages">
      <h3 className="section-title">Conheça todas as nossas facilidades</h3>

      <ul className="advantages-list">
        {facilities.map((facilities) => (
          <li key={facilities.id} className="advantages-item">
            <span className={`icon ${facilities.className}`}></span>
            <div className="advantages-texts">
              <h3 className="advantages-title">{facilities.title}</h3>
              <p className="advantages-description">
                {facilities.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Facilities;
