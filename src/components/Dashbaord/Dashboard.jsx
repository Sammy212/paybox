import React from "react";
import "./Dashboard.css";
import Header from "../Header/Header";
import AnalyticsBlade from "../AnalyticsBlade/AnalyticsBlade";

// Assets

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Header/>
      <AnalyticsBlade/>
    </div>
  )
}

export default Dashboard