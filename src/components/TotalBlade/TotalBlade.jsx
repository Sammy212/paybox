import React from "react";
import "./TotalBlade.css"

// Import Row two data
import { RowTwo } from "../Data/AnaliticsTotalData";

const TotalBlade = () => {
  return (
    <div className="Total">
        {RowTwo.map((total, i) => (
            <div className="t-blade-box">
                <div className="t-blade">

                    <div className="t-header">
                        <span className="title">{total.title}</span>
                        <div className="dropdown">
                            {total.cta}
                            <img src={total.ctaIcon} alt="" />
                        </div>
                    </div>

                    <div className="t-mid">
                        <div className="l-side">
                            <span className="date-title">{total.MidDate1}</span>
                            <span className="cost-style">{total.MidAmount1}</span>
                        </div>
                        <div className="r-side">
                            <span className="date-title">{total.MidDate2}</span>
                            <span className="cost-style">{total.MidAmount2}</span>
                        </div>
                    </div>

                    <div className="t-end">
                        <div className="l-side">
                            <span className="date-title">{total.EndDate1}</span>
                            <span className="cost-style">{total.EndAmount1}</span>
                        </div>
                        <div className="r-side">
                            <span className="date-title">{total.EndDate2}</span>
                            <span className="cost-style">{total.EndAmount2}</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TotalBlade