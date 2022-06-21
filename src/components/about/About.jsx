import React from "react";
import "./About.css";
import Me from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { GiEternalLove } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward />
              <h5>Experience</h5>
              <small>
                1 Year coding <br /> 3 Year Accounting
              </small>
            </article>

            <article className="about_card">
              <GoLocation />
              <h5>Location</h5>
              <small>East Suburb in Melbourne</small>
            </article>

            <article className="about_card">
              <GiEternalLove />
              <h5>Hobbies</h5>
              <small>Games, Sports, Coffee...</small>
            </article>
          </div>

          <p>
            A highly motivated Junoir Software Engineer with an Accounting
            background, who has built up strong problem solving, detail oriented
            and communication skills within past years working experiences, and
            well combined these skills into software development area.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
