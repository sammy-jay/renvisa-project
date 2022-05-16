import React, { useState, useEffect } from "react";
import Dash from "../AllComponents/Dash/Dash";
import Welcome from "../MinorComp/Welcome";
import Navbar from "../Navbar";
import "./Main.css";

const Main = () => {
  return (
    <main className="mainSection">
      <Navbar />
      <Dash />
    </main>
  );
};

export default Main;
