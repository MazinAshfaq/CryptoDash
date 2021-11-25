import React from "react";
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
        Github
      </a>
      <p id="copright"></p>
      <p id="copyright">© 2021 Arafat Iqbal and Mazin Ashfaq.</p>
    </footer>
  );
}
export default Footer;
