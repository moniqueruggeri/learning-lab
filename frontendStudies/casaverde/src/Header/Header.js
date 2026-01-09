import "./Header.css";
import logo from "../img/logo.svg";
import shopCart from "../img/carrinho.svg";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <img src={logo} alt="Casa Verde" />
        </Link>
        <Link to="/">
            <img src={shopCart} alt="Meu carrinho"/>
        </Link>
        <Menu/>
      </nav>
    </header>
  );
};

export default Header;
