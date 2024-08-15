import React from "react";
import "./sidebar.css";
import { useState } from "react";

import { assets } from "../../assets/assets";
function sidebar() {
  const [Extended, setExtended] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="top mt-16">
          <img
            onClick={() => setExtended((prev) => !prev)}
            className="menu"
            src={assets.menu_icon}
            alt="Menu"
          />
          <div className="new-chat">
            <img src={assets.add_icon} alt="" />
            {Extended ? <p>New Chat</p> : null}
          </div>
          {Extended ? (
            <div className="recent">
              <p className="recent-title">Recent</p>
              <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>What is react.....</p>
              </div>
              <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>How to sleep.....</p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item">
            <img src={assets.question_icon} alt="" />
            {Extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item">
            <img src={assets.activity_icon} alt="" />
            {Extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item">
            <img src={assets.setting_icon} alt="" />
            {Extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default sidebar;
