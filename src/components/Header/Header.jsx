import React from "react";
import "./Header.css";

// Assets
import NotificationIcon from "../../imgs/notification-bing.svg";
import UserImage from "../../imgs/user.png";

import Expand from "../../imgs/Icon.svg";


const Header = () => {
  return (
        <div className="Header">
            <span className="h-title">Analytics dashboard</span>
            <div className="h-rightSide">

                {/* Notification */}
                <div className="notifi">
                    <div className="numb"></div>
                    <img src={NotificationIcon} alt="" className="h-icon"/>
                </div>

                {/* User */}
                <div className="h-user">
                    <div className="h-user-img">
                        <img src={UserImage} alt="" className="user-img"/>
                    </div>
                    <div className="user-details">
                        <span className="user-name">Dexter Olaniyi</span>
                        <div className="mail-dropdown">
                            <span className="user-email">
                                Dexterola@gmail.com
                            </span> 
                            <img src={Expand} alt="" className="expand-icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Header