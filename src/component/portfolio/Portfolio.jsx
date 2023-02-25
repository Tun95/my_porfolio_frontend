import React from "react";
import "./portfolio.css";
import shop from "../../asset/shop.jpg";
import shop2 from "../../asset/shop2.png";
import courier from "../../asset/courier.jpg";
import play from "../../asset/play.jpg";
import game from "../../asset/game.jpg";
import gamead from "../../asset/gamead.jpg";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={shop} alt="port1" />
          </div>
          <h3>Shopmate(1) [Completed]</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://shopmate-0b17.onrender.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={game} alt="port1" />
          </div>
          <h3>Game Review Website Frontend</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://game-rev-frontend.onrender.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={gamead} alt="port1" />
          </div>
          <h3>Game Review Website Admin Panel</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://game-rev-admin.onrender.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={courier} alt="port1" />
          </div>
          <h3>Courier Website Frontend (Static)</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://courier-shopmate.onrender.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={play} alt="port1" />
          </div>
          <h3>PlayONFlix Movie Website</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://playon-flix-movie-webapp.onrender.com/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={shop2} alt="port1" />
          </div>
          <h3>Shopmate 2 [Static]</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
