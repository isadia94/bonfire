import React from "react";
import { Link } from "react-router-dom";
import menu from "./images/menu.png";
import "./Hotels.css";
import hot1 from "./images/hot1.jpg";

function Hotels() {
  return (
    <div className="hotels">
      <header>
        <Link to="/" className="logo">
          Bonfire
        </Link>

        <div className="menu">
          <img src={menu} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tours">Tours</Link>
            </li>
            <li>
              <Link to="/hotels">Hotels</Link>
            </li>
            <li>
              <Link to="/honey-moon">Honeymoon Packages</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hotelSection">
        <div className="hotelCard">
          <div className="hotelImage">
            <img src={hot1} alt="" />
          </div>

          <div className="hotelDesc">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis soluta dignissimos alias consequuntur cum, quos tenetur
              maxime accusamus hic a tempora, quod atque harum amet vel minima
              enim saepe distinctio necessitatibus vitae.
            </p>
          </div>

          <div className="priceStarrating">
            <p>*****</p>
            <p>
              <span>KES</span> 42,000
            </p>
            <p>avg/night</p>
            <p>Book</p>
          </div>
        </div>
        <div className="hotelCard">
          <div className="hotelImage">
            <img src={hot1} alt="" />
          </div>

          <div className="hotelDesc">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis soluta dignissimos alias consequuntur cum, quos tenetur
              maxime accusamus hic a tempora, quod atque harum amet vel minima
              enim saepe distinctio necessitatibus vitae.
            </p>
          </div>

          <div className="priceStarrating">
            <p>*****</p>
            <p>
              <span>KES</span> 42,000
            </p>
            <p>avg/night</p>
            <p>Book</p>
          </div>
        </div>
        <div className="hotelCard">
          <div className="hotelImage">
            <img src={hot1} alt="" />
          </div>

          <div className="hotelDesc">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis soluta dignissimos alias consequuntur cum, quos tenetur
              maxime accusamus hic a tempora, quod atque harum amet vel minima
              enim saepe distinctio necessitatibus vitae.
            </p>
          </div>

          <div className="priceStarrating">
            <p>*****</p>
            <p>
              <span>KES</span> 42,000
            </p>
            <p>avg/night</p>
            <p>Book</p>
          </div>
        </div>
        <div className="hotelCard">
          <div className="hotelImage">
            <img src={hot1} alt="" />
          </div>

          <div className="hotelDesc">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis soluta dignissimos alias consequuntur cum, quos tenetur
              maxime accusamus hic a tempora, quod atque harum amet vel minima
              enim saepe distinctio necessitatibus vitae.
            </p>
          </div>

          <div className="priceStarrating">
            <p>*****</p>
            <p>
              <span>KES</span> 42,000
            </p>
            <p>avg/night</p>
            <p>Book</p>
          </div>
        </div>
        <div className="hotelCard">
          <div className="hotelImage">
            <img src={hot1} alt="" />
          </div>

          <div className="hotelDesc">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis soluta dignissimos alias consequuntur cum, quos tenetur
              maxime accusamus hic a tempora, quod atque harum amet vel minima
              enim saepe distinctio necessitatibus vitae.
            </p>
          </div>

          <div className="priceStarrating">
            <p>*****</p>
            <p>
              <span>KES</span> 42,000
            </p>
            <p>avg/night</p>
            <p>Book</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
