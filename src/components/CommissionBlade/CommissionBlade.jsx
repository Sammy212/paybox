import React from "react";
import "./CommissionBlade.css";

// Assets
import DropDownIcon from "../../imgs/Icon-pack.svg";
import Seperator from "../../imgs/hr1.svg";


const CommissionBlade = () => {
  return (
    <div className="CommissionBlade">
        <div className="c-blade-box">
            <div className="c-blade">
                <div className="blade">
                    <span className="title">Average commission<br />per transaction</span>
                    <div className="dropdown">
                        Today
                        <img src={DropDownIcon} alt="" />
                    </div>
                </div>

                <div className="c-end">
                    <div className="l-side">
                        <span className="date-title">POS Commission</span>
                        <span className="cost-style">₦500</span>
                    </div>
                    <div className="r-side">
                        <span className="date-title">Lotto commission</span>
                        <span className="cost-style">₦200</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="c-blade-box2">
            <div className="c-blade-box">
                <div className="left-side">
                    <span className="c-title">Transaction Comparative</span>
                    <div className="mid-info">
                        <div className="send">
                            <div className="dot"></div>
                            <span className="text">Send money</span>
                        </div>

                        <span className="amount">₦105,000,000</span>
                        <img src={Seperator} alt="" />
                        <div className="buttom">
                            <div className="left">
                                <div className="cash">
                                    <div className="dot"></div>
                                    <span className="text">Cashout</span>
                                </div>
                                <span className="amount">₦12,000,000</span>
                            </div>

                            <div className="right">
                                <div className="cash">
                                    <div className="dot"></div>
                                    <span className="text">Utilities and Bills</span>
                                </div>
                                <span className="amount">₦4,200,000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">Chart</div>
            </div>
            
        </div>
    </div>
  )
}

export default CommissionBlade