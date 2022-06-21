import React from "react";
import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Oscar
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.facebook.com/profile.php?id=100007318455885"
          target="_blank"
        >
          <FiFacebook />
        </a>
        <a href="https://www.instagram.com/oscarwong84/?hl=en" target="_blank">
          <FiTwitter />
        </a>
        <a href="https://twitter.com/wongpoah" target="_blank">
          <FiInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Oscar Wong 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
