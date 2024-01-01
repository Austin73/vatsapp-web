import React from "react";
import "./myStyle.css";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

function ChatArea() {
  const props = {
    name: "Test1",
    lastMessage: "Last Message 1",
    timeStamp: "Today",
  };

  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{props.name}</p>
          <p className="con-timeStamp">{props.timeStamp}</p>
        </div>
        <IconButton>
          <Delete />
        </IconButton>
      </div>
      <div className="messages-container">
        <MessageOthers />
        <MessageSelf />
      </div>
      <div className="text-input-area">
        <input placeholder="Type Message" className="search-box" />
        <IconButton>
          <Send />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;
