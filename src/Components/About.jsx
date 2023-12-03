import React from "react";
import image from "../images/sky.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a computer systems student studying at 'Universidad Mexicana'. I like to do systems from both sides (Backend and Frontend).";

const skillsList = ["React", "Spring Boot", "Java", "MongoDB", "SQL", "Learn Angular"];

const detailOrQuote =
  "I am passionate about solving problems in creative new ways to drive innovation. Leveraging my experience as a developer I continually look for new and better ways to make technology accessible to everyone.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          //backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          backgroundColor: "rgba(43, 15, 202, 0.15)",
          color: "white",
          borderRadius: "50px",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            color: "white",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
