import React from "react";
import * as AiIcons from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <a
        className="footerLink "
        href="https://github.com/MazinAshfaq/CryptoDash"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiIcons.AiFillGithub className="icon">Github</AiIcons.AiFillGithub>
      </a>
      <p id="copyright">
        ©2021{" "}
        <a
          className="footerLink"
          href="https://www.linkedin.com/in/arafat-iqbal/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Arafat Iqbal
        </a>{" "}
        and{" "}
        <a
          className="footerLink"
          href="https://www.linkedin.com/in/mazinashfaq/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Mazin Ashfaq.
        </a>
      </p>
    </footer>
  );
}
export default Footer;
