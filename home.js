import React from "react";
import "./home.css"


export default function Home() {
  return (
    <div id="container">
      <div id="upper-container">
        <h1 className="header">Welcome to Diffuser.img</h1>
        <p className="para1">Bring your imagination to life. Generate stunning images with AI.</p>
      </div>
      <div id="botton-container">
        <p className="para2"> 
          Showcase a captivating image or short video demonstrating the 
          variety of images the AI can generate.
        </p>
        <button className="button">Get Started</button>
      </div>
    </div>
  );
}
