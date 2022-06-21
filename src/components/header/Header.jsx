import React from "react";
import "./Header.css";
import CTA from "./CTA";

import HeaderSocials from "./HeaderSocials";
import HeaderAnimate from "./HeaderAnimate";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hey I'm</h5>
        <h1>Oscar</h1>
        <h5 className="text-light">Junior Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        <HeaderAnimate />

        {/* <div className="me">
          <img src={Cat} alt="" />
        </div> */}

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
