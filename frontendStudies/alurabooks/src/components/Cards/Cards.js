import "./Cards.sass";
import Buttons from "../Buttons/Buttons";

const Cards = ({ bookTitle, bookDesc, bookAuthor, bookPrice }) => {
  return (
    <div className="bookCard">
      <div className="book">
        <p className="cardTitle">Sobre o Livro:</p>
        <h2 className="bookTitle">{bookTitle}</h2>
        <p className="bookDesc">{bookDesc}</p>
        <p className="bookAuthor">Por: {bookAuthor}</p>
        <div className="price">
          <p>A partir de:</p>
          <h2 className="bookPrice">R$ {bookPrice}</h2>
        </div>
      </div>
      <div className="buy">
        <div className="icons">
          <i className="material-symbols-outlined">favorite</i>
          <i className="material-symbols-outlined">shopping_bag</i>
        </div>
        <Buttons size={"default"} type={"solid"} text={"Comprar"} />
      </div>
    </div>
  );
};

export default Cards;
