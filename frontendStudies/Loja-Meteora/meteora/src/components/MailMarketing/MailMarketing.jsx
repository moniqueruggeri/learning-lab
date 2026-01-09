import "../MailMarketing/MailMarketing.sass";

function MailMarketing() {
  return (
    <section className="subscribe">
      <div className="subscribe-container">
        <h3 className="subscribe-text">
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </h3>
        <div className="input-container">
          <input type="text" id="sbscribe" placeholder="Digite seu email" />
          <button className="send-button">Enviar</button>
        </div>
      </div>
    </section>
  );
}

export default MailMarketing;
