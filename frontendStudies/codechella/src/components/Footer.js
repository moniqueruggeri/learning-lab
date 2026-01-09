import React from "react";
import logo from "../assets/img/small-logo.svg";
import "material-icons/iconfont/material-icons.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={logo} alt="Codechella" />
      </Link>
      <ul className="socialMediaIcons">
        <li>
          <i className="fab fa-twitch"></i>
        </li>
        <li>
          <i className="fab fa-instagram"></i>
        </li>
        <li>
          <i className="fab fa-github"></i>
        </li>
        <li>
          <i className="fa-brands fa-x-twitter"></i>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
