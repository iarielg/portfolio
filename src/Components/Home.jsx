/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/dev.jpg";

const imageAltText = "A person sitting on a chair, looking at a laptop, write code.";

const Home = ({ name, title }) => {
  const handleClick = (event) => {
    console.log(event.target);
    console.log("clicked");
  }

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <a href="#about">
          <img
            onClick={handleClick}
            src={arrowSvg}
            style={{ height: "3rem", width: "3rem" }}
            alt={imageAltText}
          />
        </a>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Ariel",
  title: "Gonzalez",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
