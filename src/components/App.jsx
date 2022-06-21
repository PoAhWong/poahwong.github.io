import React from "react";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Portfolio from "./portfolio/Portfolio";
import Skills from "./skills/Skills";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
