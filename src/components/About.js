import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>What Up</p>
    <img src = {image} alt="I made this"/>
  </div>
  )
}

export default About;
