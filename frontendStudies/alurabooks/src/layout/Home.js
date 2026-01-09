import "./Home.sass";
import Header from "../components/Header/Header";
import Inputs from "../components/Inputs/Inputs";
import Title from "../components/Title/Title";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const isLoggedIn = true;

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className="bannerHome">
        <div className="bannerContent">
          <h2>Já sabe por onde começar?</h2>
          <p>
            Encontre em nossa estante o que precisa para o seu desenvolvimento!
          </p>
          <Inputs
            type={"search"}
            name={"search"}
            placeholder={"Qual será sua próxima leitura?"}
          />
        </div>
      </div>
      <main className="mainContainer">
        <div className="container ultimosLancamentos">
          <Title title={"Últimos Lançamentos"} />
        </div>
        <div className="container maisVendidos">
          <Title title={"Mais Vendidos"} />
        </div>
        <div className="container">
          <div className="newsLetter">
            <h3>Fique por dentro das novidaddes</h3>
            <p>Atualizações de e-books, novos livros, promoções e outros.</p>
            <Inputs
              type={"email"}
              name={"email"}
              placeholder={"Cadastre seu e-mail"}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
