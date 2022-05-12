import React from "react";
import "./Dashboard.css";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Sidebar />
      <Main />
    </section>
  );
};

export default Dashboard;
