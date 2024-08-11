import React from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
function sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="top mt-16">
          <img src={assets.menu_icon} alt="Menu" />
          <div className="new-chat">
            <img src={assets.add_icon} alt="" />
            <p>New Chat</p>
          </div>
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react.....</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-item">
            <img src={assets.question_icon} alt="" /><p>Help</p>
            <img src={assets.activity_icon} alt="" /><p>Activity</p>
            <img src={assets.setting_icon} alt="" /><p>Settings</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default sidebar;
