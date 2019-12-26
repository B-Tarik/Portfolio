import React from "react";
import { ReactComponent as Logo } from "../assets/svgo/logo.svg";

function Footer() {
  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="footer-up">
        <a href="#home" className="up-arrow" title="go Up?">
          <div className="triangle"></div>
        </a>
      </div>

      <div className="footer-container">
        <div className="container-flex">
          <div className="footer-menu">
            <h3>Menu</h3>
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
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-online">
            <h3>Online</h3>
            <ul>
              <li>
                <a
                  className="icon-git"
                  href="https://github.com/B-Tarik"
                  title="my Github profile"
                  target="_blanc"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="icon-codepen"
                  href="https://codepen.io/B-Tarik"
                  title="my Codepen profile"
                  target="_blanc"
                  rel="noopener noreferrer"
                >
                  Codepen
                </a>
              </li>
              <li>
                <a
                  className="icon-linkin"
                  href="https://linkedin.com/in/tarik-bouchekkif"
                  title="my Linkedin profile"
                  target="_blanc"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-text">
          <a href="https://fullwebstack.com">{<Logo title="Fullwebstack.com logo" />}</a>
          <p>2019 © FULLWEBSTACK. All rights reserved.</p>
          <p>
            Made with love by Tarik Bouchekkif.{" "}
            <a href="#" target="_blanc" rel="noopener noreferrer">
              More information.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
