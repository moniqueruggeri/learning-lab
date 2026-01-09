import "../Categories/Categories.sass";
import camisetas from "../../assets/img/categoria-camisetas.png";
import bolsas from "../../assets/img/categoria-bolsas.png"
import casacos from "../../assets/img/categoria-casacos.png"
import calcados from "../../assets/img/categoria-calcados.png"
import calcas from "../../assets/img/categoria-calcas.png"
import oculos from "../../assets/img/categoria-oculos.png"

function Categories() {
  const categorias = [
    { id: 1, nome: "Camisetas", img: camisetas },
    { id: 2, nome: "Bolsas", img: bolsas },
    { id: 3, nome: "Calçados", img: calcados },
    { id: 4, nome: "Calças", img: calcas },
    { id: 5, nome: "Casacos", img: casacos },
    { id: 6, nome: "Óculos", img: oculos }
    
];

  return (
    <section class="categories">
      <h3 class="section-title">Busque por Categorias</h3>
      <ul class="categories-list">
        {categorias.map((categoria) => (
          <li key={categoria.id} class="categories-item">
            <img class="categories-img" src={categoria.img} alt={`Categotia de ${categoria.nome}`} />
            <p class="categories-text">{categoria.nome}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
