import "./Header.css";
import homeIcon from "../img/home-icon.svg";
import msgIcon from "../img/msg-icon.svg";
import profilePic from "../img/profile-pic.svg";
import logoIcon from "../img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="headerBanner"></div>
      <div className="headerIcons">
        <div>
          <img className="headerLogo" src={logoIcon} alt="Adopet" />
          <a href="/">
            <img src={homeIcon} alt="Home" />
          </a>
          <a href="/">
            <img src={msgIcon} alt="Mensagens" />
          </a>
        </div>
        <a href="/">
          <img src={profilePic} alt="Imagem de perfil" />
        </a>
      </div>
    </header>
  );
};

export default Header;
