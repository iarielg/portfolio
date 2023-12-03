import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

const siteProps = {
  name: "Ariel González",
  title: "Software Engineer Full Stack",
  email: "arielgonzalezdelacruz@gmail.com",
  gitHub: "iarielg",
  instagram: "iariel.g",
  linkedIn: "jarielgc",
  medium: "",
  twitter: "iarielgg",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
