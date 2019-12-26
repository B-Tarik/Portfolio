import React from "react";
import { ReactComponent as Logo } from "../assets/svgo/logo.svg";

function Header() {

  return (
    <header className="header" role="banner">
      <a className="header-logo" href="https://fullwebstack.com">
        {<Logo title="Fullwebstack.com logo" />}
      </a>
      <nav className="header-nav" role="navigation">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#mywork">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
