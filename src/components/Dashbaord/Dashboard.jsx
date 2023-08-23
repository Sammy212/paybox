import React from "react";
import "./Dashboard.css";
import Header from "../Header/Header";
import AnalyticsBlade from "../AnalyticsBlade/AnalyticsBlade";
import TotalBlade from "../TotalBlade/TotalBlade";
import CommissionBlade from "../CommissionBlade/CommissionBlade";

// Assets

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Header />
      <AnalyticsBlade />
      <TotalBlade />
      <CommissionBlade />
    </div>
  )
}

export default Dashboard