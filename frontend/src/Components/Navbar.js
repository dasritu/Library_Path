import React, { useState } from "react";
import "../styles/Navbar.css";
import img from "../image/TECHNO INDIA HOOGHLY_LOGO.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-scroll";
const Navbar = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function openNav() {
    setIsNavOpen(true);
  }

  function closeNav() {
    setIsNavOpen(false);
  }

  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={img} alt="" />
        </div>
        <div className="text">
          <h1>{props.name}</h1>
        </div>
        <div className="icon" onClick={openNav}>
          <GiHamburgerMenu />
        </div>
        <div id="mySidenav" className={`sidenav ${isNavOpen ? "open" : ""}`}>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <Link to="hero" smooth={true} duration={600} className="nav-link">
          <FaHome /> Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="nav-link">
          <TbListDetails /> About
          </Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
          <MdContactPhone /> Contact Us
          </Link>
          <Link to="login" smooth={true} duration={500} className="nav-link">
          <RiContactsFill /> Login
          </Link>

        
        </div>
      </div>
    </>
  );
};

export default Navbar;
