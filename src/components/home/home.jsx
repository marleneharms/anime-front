import React from "react";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import NavBar from "../navbar/navbar";

function Home() {
  return (
    <div className="home-container">
      <NavBar/>
      <Carousel className="carousel">
        <div>
          <img className="carousel-element" src="https://browsecat.net/sites/default/files/anime-cover-wallpapers-60952-203266-6151154.png"/>
          <p className="legend">Naruto</p>
        </div>
        <div>
          <img className="carousel-element" src="https://wallpapercave.com/wp/wp10544233.png" />
          <p className="legend">Attack On Titan</p>
        </div>
        <div>
          <img className="carousel-element" src="https://images7.alphacoders.com/120/thumb-1920-1206753.png" />
          <p className="legend">Spy x Family</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
