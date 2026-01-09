import "./BookFormat.sass";

const BookFormat = ({ size, type, format, price, onClick }) => {
  return (
    <button className={`bookFormat ${size} ${type}`} onClick={onClick}>
      <p>{format}</p>
      <div>
        <p>R$ {price}</p>
        {format === "E-book" && <p>.pdf, .epub, .mob</p>}
      </div>
    </button>
  );
};

export default BookFormat;
