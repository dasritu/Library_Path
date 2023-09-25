import React,{useState} from "react";
import "../styles/Hero.css";
import Right from "./Right";


const Hero = () => {
  const [selectedItem, setSelectedItem] = useState("dashboard");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className="hero">
      <div className="left">
        <div className="button">
          <div className="bttn" onClick={() => handleItemClick("dashboard")}>
            <h2>DASHBOARD</h2>
          </div>
          <div className="bttn" onClick={() => handleItemClick("books")}>
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
      {/* <div className="right">
       
      </div> */}
      <Right selectedItem={selectedItem}/>
    </div>
  );
};

export default Hero;
