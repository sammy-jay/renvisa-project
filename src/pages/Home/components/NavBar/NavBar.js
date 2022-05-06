import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { BiSearch } from "react-icons/bi";
import { GrUser } from "react-icons/gr";
import { IoPower } from "react-icons/io5";
import NavIcon from "../smallerComponents/NavIcon";
const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/auth");
  };
  return (
    <nav className="navbar">
      <div>
        <h2>Renvisa</h2>
      </div>
      <div className="navlinks">
        <ul>
          <li>Home</li>
          <li>Our Projects</li>
          <li>Market Trends</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="icons">
        <NavIcon Icon={BiSearch} />
        <NavIcon Icon={GrUser} />
        <div onClick={handleClick}>
          <NavIcon Icon={IoPower} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
