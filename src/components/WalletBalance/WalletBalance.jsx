import React, { useState } from "react";
import "./WalletBalance.css";

// Assets
import Visible from "../../imgs/eye.svg";
import OverlayRec1 from "../../imgs/topOverlayRec.png";
import OverlayRec2 from "../../imgs/buttomOverlayRec.png";
import TransRec1 from "../../imgs/topRec.png";
import TransRec2 from "../../imgs/buttomRec.png";

const WalletBalance = () => {
    const [isAmountVisible, setIsAmountVisible] = useState(true);

    const toggleAmountVisibility = () => {
        setIsAmountVisible(!isAmountVisible);
    };

  return (
    <div className="Wallet">

        <div className="w-top">
            <span className="w-Title">Wallet Balance</span>
            <div className="amount">
                ₦<span className={`wb-amount ${isAmountVisible ? "" : "hidden"}`}>
                    50,000.00
                </span>
                <img
                    src={Visible}
                    alt=""
                    className="amount-img"
                    onClick={toggleAmountVisibility}
                    title="Click me"
                />
            </div>
            <div className="w-ctas">
                <div className="add-cta">Add fund</div>
                <div className="add-cta">Withdraw</div>
            </div>
        </div>


        <div className="Wallet-bg">
            <div className="bg-elements">
                <img src={OverlayRec2} alt="" />
                <img src={OverlayRec1} alt="" />
                <img src={TransRec2} alt="" />
                <img src={TransRec1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default WalletBalance