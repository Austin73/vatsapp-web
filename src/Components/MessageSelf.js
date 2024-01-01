import React from "react";
import "./myStyle.css";

function MessageSelf() {
  const props2 = { name: "You", message: "This is sample Message from you" };
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p>{props2.message}</p>
        <p className="self-timeStamp">12:00am</p>
      </div>
    </div>
  );
}

export default MessageSelf;
