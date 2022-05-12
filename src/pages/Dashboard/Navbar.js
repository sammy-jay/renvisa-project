import React, { useState } from "react";
import "./Navbar.css";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [value, setValue] = useState("Rent");
  const handleChange = (e, newValue) => setValue(newValue);

  return (
    <nav className="navbar__dashboard">
      <div>
        <h1>Good Morning, Samuel</h1>
      </div>
      <ToggleButtonGroup
        className="togglebtngrp"
        value={value}
        onChange={handleChange}
        exclusive
        color="primary"
        style={{
          margin: "0px",
          padding: "5px",
          backgroundColor: "rgba(27, 36, 50, 0.1)",
          borderRadius: "5px",
          width: "max-content",
          color: "#000",
          textTransform: "capitalise",
        }}
      >
        <ToggleButton
          value="Rent-To-Own"
          style={{
            backgroundColor: value === "Rent-To-Own" ? "#fff" : "transparent",
            borderRadius: "5px",
            border: "none",
            color: "#000",
            padding: "7px 20px",
            fontSize: "12px",
            fontWeight: "600",
            textTransform: "capitalise",
            marginRight: "5px",
          }}
        >
          Rent-To-Own
        </ToggleButton>
        <ToggleButton
          value="Rent"
          style={{
            backgroundColor: value === "Rent" ? "#fff" : "transparent",
            border: "none",
            color: "#000",
            borderRadius: "5px",
            fontSize: "12px",
            fontWeight: "600",
            padding: "7px 20px",
            textTransform: "capitalise",
          }}
        >
          Rent
        </ToggleButton>
        <ToggleButton
          value="Invest"
          style={{
            backgroundColor: value === "Invest" ? "#fff" : "transparent",
            border: "none",
            color: "#000",
            borderRadius: "5px",
            padding: "7px 20px",
            fontSize: "12px",
            fontWeight: "600",
            textTransform: "capitalise",
          }}
        >
          Invest
        </ToggleButton>
      </ToggleButtonGroup>
      <div className="navIcons">
        <span>
          <IoNotificationsOutline fontSize="23px" />
        </span>
        <span>
          <BiUserCircle fontSize="40px" />
        </span>
        <span>
          <MdKeyboardArrowDown fontSize="27px" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
