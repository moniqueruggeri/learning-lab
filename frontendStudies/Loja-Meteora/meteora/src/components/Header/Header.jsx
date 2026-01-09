import "./Header.sass";
import logomobile from "../../assets/img/logomobile.png"

function Header() {
  return (
    <header class="header">
      <img src={ logomobile } alt="logo loja meteora" />
      <span class="menu-icon"></span>
    </header>
  );
};

export default Header;
