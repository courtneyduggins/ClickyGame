import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid jumbo-background">
    <div className="container">
      <h1 className="display-4 text-white text-center">Clicky Game!</h1>
      <h2 className="lead text-white text-center">Click on an image to earn points, but don't click on any more than once!</h2>
    </div>
  </div>
);


export default Jumbotron;