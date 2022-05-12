import React from "react";
import Welcome from "../MinorComp/Welcome";
import Navbar from "../Navbar";
import "./Main.css";

const Main = () => {
  return (
    <main className="mainSection">
      <Navbar />
      <Welcome />
    </main>
  );
};

export default Main;
