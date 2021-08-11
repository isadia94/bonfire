import React from "react";
import { Link } from "react-router-dom";
import menu from "./images/menu.png";
import "./About.css";

function About() {
  return (
    <div className="about">
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
    </div>
  );
}

export default About;
