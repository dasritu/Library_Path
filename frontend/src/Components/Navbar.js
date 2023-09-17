import React, { useState } from "react";
import "../styles/Navbar.css";
import img from "../image/TECHNO INDIA HOOGHLY_LOGO.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
const Navbar = () => {
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
          <h1>Hello Subhankar</h1>
        </div>
        <div className="icon" onClick={openNav}>
          <GiHamburgerMenu />
        </div>
        <div id="mySidenav" className={`sidenav ${isNavOpen ? "open" : ""}`}>
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <a href="/">
            <FaHome /> <h2>Home</h2>
          </a>
          <a href="/">
            <TbListDetails /><h2>About</h2></a>
          <a href="/">
            <MdContactPhone />
            <h2>Contact</h2>
          </a>
          <a href="/">
            <RiContactsFill />
            <h2>Login</h2>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
