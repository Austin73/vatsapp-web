import React from "react";
import logo from "../images/live-chat.png";

function Welcome() {
  return (
    <div className="welcome-container">
      <img src={logo} alt="Logo" className="welcome-logo" />
      <p>Chat With People in the room</p>
    </div>
  );
}

export default Welcome;
