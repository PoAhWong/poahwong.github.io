import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/VPath.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
const Portfolio = () => {
  const data = [
    {
      id: 1,
      img: img1,
      title: "VPath, a note taking and goal tranking app",
      github: "https://github.com/PoAhWong/vpath",
      demo: "https://vpathapp.herokuapp.com/",
    },
    {
      id: 2,
      img: img2,
      title:
        "Slimy, a group project. It let users to share reviews and ratings with others",
      github: "https://github.com/PoAhWong/Slimy",
      demo: "https://slimygroup.herokuapp.com/",
    },
    {
      id: 3,
      img: img3,
      title:
        "Stella Timesheet, a timesheet collect app that I create for my partner. It's been used wildly by her resturant now",
      github: "https://github.com/PoAhWong/next_timesheet",
      demo: "https://stella-timesheet.herokuapp.com/",
    },
    {
      id: 4,
      img: img4,
      title:
        "Tic Tac Toe, A pure frontend game app, you can choose from versing another player or versing AI",
      github: "https://github.com/PoAhWong/tic-tac-toe",
      demo: "https://poahwong.github.io/tic-tac-toe/homepage",
    },
    {
      id: 5,
      img: img5,
      title: "Pig Game, A pure frontend game app",
      github: "https://github.com/PoAhWong/Pig-Game",
      demo: "https://poahwong.github.io/Pig-Game/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, img, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
