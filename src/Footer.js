import { Link } from "react-router-dom";
import React from "react";
import { Input } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footerNav">
        <div className="genInfo">
          <h3>GENERAL INFO</h3>
          <div className="list">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/why">Why us</Link>
            </li>
            <li>
              <Link to="/terms">TERMS AND CONDITIONS</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <Link to="/photo">Photo Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </div>
        </div>
        <div className="kenyaTours">
          <h3>KENYA TOURIST ATTRACTIONS</h3>
          <div className="list">
            <li>
              <Link to="/contact">About Kenya</Link>
            </li>
            <li>
              <Link to="/contact">Kenya National Parks</Link>
            </li>
            <li>
              <Link to="/contact">Kenya Beaches</Link>
            </li>
            <li>
              <Link to="/contact">Kenya's Lakes</Link>
            </li>
            <li>
              <Link to="/contact">Mountains in Kenya</Link>
            </li>
            <li>
              <Link to="/contact">Museum</Link>
            </li>
            <li>
              <Link to="/contact">Waterfalls</Link>
            </li>
            <li>
              <Link to="/contact">Kenya Rivers</Link>
            </li>
          </div>
        </div>
        <div className="kenyaSafari">
          <h3>KENYA SAFARI PACKAGES</h3>
          <div className="list">
            <li>
              <Link to="/contact">Wildlife Safaris</Link>
            </li>
            <li>
              <Link to="/contact">Bird watching Safaris</Link>
            </li>
            <li>
              <Link to="/contact">Golf Safaris</Link>
            </li>
          </div>
        </div>
        <div className="search">
          <h3>SEARCH WEBSITE</h3>
          <Input placeholder="Type keywords..." />
        </div>
      </div>
      <hr />
      <p>Copyright 2020 All Rights Reserved, Bonfire Adventures</p>
    </div>
  );
}

export default Footer;
