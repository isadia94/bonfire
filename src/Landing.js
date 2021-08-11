import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import { Button } from "@material-ui/core";
import Footer from "./Footer";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import hot1 from "./images/hot1.jpg";
import hot2 from "./images/hot2.png";
import hot3 from "./images/hot3.jpg";
import hot4 from "./images/hot4.jpg";
import hot5 from "./images/hot5.jpg";
import hot6 from "./images/hot6.png";
import hot7 from "./images/hot7.png";
import hot8 from "./images/hot8.png";
import menu from "./images/menu.png";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import StarIcon from "@material-ui/icons/Star";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Input } from "@material-ui/core";
import "./Landing.css";

function Landing() {
  const [tours, setTours] = useState([
    {
      title: "Mombasa",
      key: "1",
      type: "local",
      price: "11,999",
      desc: "Enjoy the beaches next to the welcoming nearby communities ",
      popular: true,
      img: img1,
    },
    {
      title: "Self-drive Gateaway",
      key: "2",
      type: "local",
      price: "3,200",
      desc: "Enjoy the beaches next to the welcoming nearby communities ",
      popular: true,
      img: img2,
    },
    {
      title: "Tsavo Migration",
      key: "3",
      type: "local",
      price: "11,999",
      desc: "Enjoy the beaches next to the welcoming nearby communities ",
      popular: true,
      img: img3,
    },
    {
      title: "Zanzibar",
      key: "4",
      type: "international",
      price: "69,999",
      desc: "Enjoy the beaches next to the welcoming nearby communities ",
      popular: true,
      img: img4,
    },
    {
      title: "Dubai",
      key: "5",
      type: "international",
      price: "49,500",
      desc: "Enjoy the beaches next to the welcoming nearby communities ",
      popular: true,
      img: img5,
    },
    {
      title: "Israel Pilgrimage",
      key: "6",
      type: "international",
      price: "49,500",
      desc: "Enjoy the beaches next to the welcoming nearby communities ",
      popular: true,
      img: img6,
    },
    {
      title: "Israel Pilgrimage",
      key: "7",
      type: "international",
      price: "49,500",
      desc: "Enjoy the beaches next to the welcoming nearby communities ",
      popular: true,
      img: img6,
    },
    {
      title: "Israel Pilgrimage",
      key: "8",
      type: "international",
      price: "49,500",
      desc: "Enjoy the beaches next to the welcoming nearby communities ",
      popular: true,
      img: img6,
    },
  ]);

  const [hotels, setHotels] = useState([
    {
      title: "Hemmingways",
      location: "Nairobi",
      key: "1",
      amazing: true,
      img: hot1,
    },
    {
      title: "Ole Sereni",
      location: "Nairobi",
      key: "2",
      amazing: true,
      img: hot2,
    },
    {
      title: "Panari",
      location: "Nairobi",
      key: "3",
      amazing: true,
      img: hot3,
    },
    {
      title: "Jangwani Resort",
      location: "Tanzania",
      key: "4",
      amazing: true,
      img: hot4,
    },
    {
      title: "Mombasa Continental Resort",
      location: "Mombasa",
      key: "5",
      amazing: true,
      img: hot5,
    },
    {
      title: "Crowne Plaza ",
      location: "Deira, Dubai",
      key: "6",
      amazing: true,
      img: hot6,
    },
    {
      title: "Acacia",
      location: "Kisumu",
      key: "1",
      amazing: true,
      img: hot7,
    },
    {
      title: "Raddison Hotel",
      location: "Nairobi",
      key: "1",
      amazing: true,
      img: hot8,
    },
    {
      title: "Hemmingways",
      location: "Nairobi",
      key: "1",
      amazing: false,
    },
    {
      title: "Hemmingways",
      location: "Nairobi",
      key: "1",
      amazing: false,
    },
    {
      title: "Hemmingways",
      location: "Nairobi",
      key: "1",
      amazing: false,
    },
    {
      title: "Hemmingways",
      location: "Nairobi",
      key: "1",
      amazing: false,
    },
    {
      title: "Hemmingways",
      location: "Nairobi",
      key: "1",
      amazing: false,
    },
    {
      title: "Hemmingways",
      location: "Nairobi",
      key: "1",
      amazing: false,
    },
    {
      title: "Hemmingways",
      location: "Nairobi",
      key: "1",
      amazing: false,
    },
    {
      title: "Hemmingways",
      location: "Nairobi",
      key: "1",
      amazing: false,
    },
    {
      title: "Hemmingways",
      location: "Nairobi",
      key: "1",
      amazing: false,
    },
  ]);
  return (
    <div className="app">
      <section className="landing">
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

        <div className="textBox">
          <h2>Amazing Destinations</h2>
          <p>
            Travel & Explore the most beautiful sceneries of the world. Live the
            adventure and enjoy hospitable stays as you tour .
          </p>
          <div className="explore">
            <a href="#">Explore</a>
            <ArrowRightAltIcon />
          </div>
        </div>
        <div className="sci">
          <li>
            <FacebookIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
        </div>
      </section>

      <section className="popular">
        <div className="titleLink">
          <h2>Popular Destinations</h2>
          <div className="link">
            <Link to="/tours">View All</Link>
            <ArrowRightAltIcon />
          </div>
        </div>

        <div className="popularGrid">
          {tours.map((tour) => {
            return (
              <div className="box" key={tour.key}>
                <img src={tour.img}></img>
                <div className="boxContent">
                  <h3>{tour.title}</h3>
                  <p className="desc">{tour.desc}</p>
                  <div className="location">
                    <p>KES {tour.price}</p>
                    <Link to="/">BOOK NOW</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="stays">
        <div className="titleLink">
          <h2>Amazing Stays</h2>
          <div className="link">
            <Link to="/hotels">View All</Link>
            <ArrowRightAltIcon />
          </div>
        </div>

        <div className="popularGrid1">
          {hotels
            .filter((hotel) => hotel.amazing === true)
            .map((filteredHotel) => {
              return (
                <div className="box1">
                  <img src={filteredHotel.img} alt="" />
                  <div className="textContent">
                    <StarIcon style={{ color: "yellow", fontSize: 12 }} />
                    <StarIcon style={{ color: "yellow", fontSize: 12 }} />
                    <StarIcon style={{ color: "yellow", fontSize: 12 }} />
                    <StarIcon style={{ color: "yellow", fontSize: 12 }} />
                    <StarIcon style={{ color: "yellow", fontSize: 12 }} />
                    <h3>{filteredHotel.title}</h3>
                    <div className="location">
                      <LocationOnIcon style={{ fontSize: 12 }} />
                      <h5>{filteredHotel.location}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <section className="mediaCentre">
        <div className="titleLink">
          <h2>Media & News</h2>
        </div>
        <div className="videos">
          <div className="iframe">
            <iframe
              id="ytplayer"
              type="text/html"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/lLgo7aQ2B4c"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="contactForm">
          <h4>Contact Us</h4>
          <form className="inputForm">
            <Input
              style={{ maxWidth: 300, marginBottom: 20 }}
              placeholder="Name"
            />
            <Input
              style={{ maxWidth: 300, marginBottom: 20 }}
              placeholder="Email"
            />
            <Input
              style={{ maxWidth: 300, marginBottom: 20 }}
              placeholder="Phone"
            />
            <Input
              multiline={true}
              style={{ maxWidth: 300, marginTop: 50 }}
              placeholder="Enter Message "
            />
            <Button
              style={{ marginTop: 30, display: "inline-block" }}
              variant="contained"
              color="green"
            >
              Send
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Landing;
