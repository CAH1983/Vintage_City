import React from "react";
import Rubikub from "../../Images/rubikub.png";

function HomeGuest() {
  return (
    <div className="home-wrapper">
      <section id="home-section1">
        <div className="container">
          <h1>Welcome to Vintage City</h1>
          <p>
            Share your music, videos and and childhood treasures from the 80's,
            90's, 2000's{" "}
          </p>
          <div className="hero-img">
            <img src={Rubikub} alt="rubikub" />
          </div>
        </div>
      </section>

      <section id="home-section2">
        <div className="container">
          <h2>Top items</h2>
        </div>
      </section>
      <section>
        <div className="collection_section layout_padding">
          <div className="container">
            <h1 className="new_text">
              <strong>New Arrivals Products</strong>
            </h1>
            <p className="consectetur_text">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeGuest;
