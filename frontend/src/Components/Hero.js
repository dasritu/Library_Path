import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <div className="button">
          <div className="bttn">
            <h2>DASHBOARD</h2>
          </div>
          <div className="bttn">
            <h2>BOOKS</h2>
          </div>
          <div className="bttn">
            <h2>LOAN BOOKS</h2>
          </div>
          <div className="bttn">
            <h2>STUDENTS</h2>
          </div>
          <div className="bttn">
            <h2>REQUESTS</h2>
          </div>
          <div className="bttn">
            <h2>Events</h2>
          </div>
        </div>
      </div>
      <div className="right">
        
      </div>
    </div>
  );
};

export default Hero;
