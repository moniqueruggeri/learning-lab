import "../Header/Header.sass";
import logo from "../../img/logo.svg";

const Header = ({ isLoggedIn }) => {
  return (
    <div className={`header ${isLoggedIn ? "loggedIn" : "loggedOut"}`}>
      <div className="icons">
        <i className="material-icons">menu</i>
        <img src={logo} alt="" />
        <h2 className="logo-title">
          <span>Alura</span>Books
        </h2>
      </div>
      <nav>
        <ul className="icons">
          <li className="categorias menu1024">
            <p>Categorias</p>
          </li>
          {isLoggedIn && (
            <>
              <li className="favoritos menu1024">
                <p>Favoritos</p>
              </li>
              <li className="estante menu1024">
                <p>Minha estante</p>
              </li>
            </>
          )}
        </ul>

        <ul className="icons">
          {isLoggedIn && (
            <li>
              <i className="material-symbols-outlined">favorite</i>
            </li>
          )}
          <li>
            <i className="material-symbols-outlined menu1024">shopping_bag</i>
            {isLoggedIn && <p>Minha Sacola</p>}
          </li>
          <li>
            <i className="material-symbols-outlined">account_circle</i>
            {!isLoggedIn && <p>Login</p>}
            {isLoggedIn && <p>Meu Perfil</p>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
