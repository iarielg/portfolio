import React from "react";
import image from "../images/code.jpg";
import bg from "../images/sky.jpg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Generation Mx Project ",
    description:
      "I collaborated in this project with a group of developers for a website, where I worked as a Java Fullstack Jr. developer.",
    url: "https://github.com/iarielg/ProyectoInt",
  },
  {
    title: "Java Backend API",
    description:
      "In this project I created an API with Java and a MySQL database for a technical test.",
    url: "https://github.com/iarielg/endcom-bankapp-api",
  },
  {
    title: "My Resume Site",
    description:
      "(You are here) This is a project developed with React to show a little of what I have done in my experience.",
    url: "https://github.com/iarielg/portfolio",
  },
  {
    title: "I am learning Angular",
    description:
      "In my current job I am working with angular, consuming API's and making the site responsive with Bootstrap.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section
      className="padding background"
      id="portfolio"
      style={{
        backgroundColor: "rgba(43, 15, 202, 0.15)",
        color: "white",
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 style={{ textAlign: "center", color: "white" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "30px",
              opacity: "0.5",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", color: "white" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
