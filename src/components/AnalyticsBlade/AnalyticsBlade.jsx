import React from "react";
import "./AnalyticsBlade.css";
import WalletBalance from "../WalletBalance/WalletBalance";

// import data
import { RowOne } from "../Data/AnaliticsTotalData";

const AnalyticsBlade = () => {
  return (
    <div className="Analytics">
        <div className="a-wallet">
            <WalletBalance/>
        </div>

        {RowOne.map((aBlade, i) =>(
            <div className="a-details">
                <div className="details">
                    <p className="a-title">{aBlade.title}</p>
                    <p className="a-amount">{aBlade.amount}</p>
                </div>
                <div className="analytics-cta">
                    {aBlade.cta}
                    <img src={aBlade.ctaIcon} alt="" className="a-cta-img" />
                </div>
            </div>
            ))}
    </div>
  )
}

export default AnalyticsBlade