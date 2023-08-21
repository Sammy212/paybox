import React from "react";
import "./Sidebar.css"

// Assets
import Logo from "../../imgs/Paybox.svg";
import Tagline from "../../imgs/tagline.svg";
import Hr from "../../imgs/hr.svg";
import HomeIcon from "../../imgs/home-2.svg";
import Analytics from "../../imgs/category-2.svg";
import PersonalIcon from "../../imgs/strongbox.svg";
import SaleIcon from "../../imgs/shop.svg";
import TalentIcon from "../../imgs/3dcube.svg";
import SpendIcon from "../../imgs/card-edit.svg";
import CardsIcon from "../../imgs/cards.svg";
import LeaderboardIcon from "../../imgs/medal-star.svg";
import ProfileIcon from "../../imgs/security-user.svg";
import BankIcon from "../../imgs/radar.svg";

import Expand from "../../imgs/right-arrow.svg";



const Sidebar = () => {
  return (
    <div className="Sidebar">
        
        
        {/* logo */}
        <div className="main-logo">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="tagline">
                <img src={Tagline} alt="" />
            </div>
        </div>

        {/* Menu Items */}
        <img src={Hr} alt="" />

        <div className="menu-item">
            <div className="menu-icon">
                <img src={HomeIcon} alt="" className="icon" />
            </div>
            <span className="menu">Home</span>
        </div>

        <div className="menu-item Active">
            <div className="menu-icon">
                <img src={Analytics} alt="" className="icon" />
            </div>
            <span className="menu">Analytics Dasboard</span>
        </div>

        <img src={Hr} alt="" />

        
        <div className="menu-item">
            <div className="menu-icon">
                <img src={PersonalIcon} alt="" className="icon" />
            </div>
            <span className="menu">Personal</span>
            <img src={Expand} alt="" className="menu-dropDown" />
        </div>

        <div className="menu-item">
            <div className="menu-icon">
                <img src={SaleIcon} alt="" className="icon" />
            </div>
            <span className="menu">Sales Hub</span>
            <img src={Expand} alt="" className="menu-dropDown" />
        </div>

        <div className="menu-item">
            <div className="menu-icon">
                <img src={TalentIcon} alt="" className="icon" />
            </div>
            <span className="menu">Talent managment</span>
            <img src={Expand} alt="" className="menu-dropDown" />
        </div>

        <div className="menu-item">
            <div className="menu-icon">
                <img src={SpendIcon} alt="" className="icon" />
            </div>
            <span className="menu">Spend managment</span>
            <img src={Expand} alt="" className="menu-dropDown" />
        </div>

        <div className="menu-item">
            <div className="menu-icon">
                <img src={CardsIcon} alt="" className="icon" />
            </div>
            <span className="menu">Cards</span>
        </div>


        <img src={Hr} alt="" />

        <div className="menu-item">
            <div className="menu-icon">
                <img src={LeaderboardIcon} alt="" className="icon" />
            </div>
            <span className="menu">Leaderboard</span>
        </div>

        <div className="menu-item">
            <div className="menu-icon">
                <img src={ProfileIcon} alt="" className="icon" />
            </div>
            <span className="menu">Profile & Settings</span>
        </div>

        <div className="menu-item">
            <div className="menu-icon">
                <img src={BankIcon} alt="" className="icon" />
            </div>
            <span className="menu">Bank performance</span>
            <img src={Expand} alt="" className="menu-dropDown" />
        </div>

    </div>
  )
}

export default Sidebar