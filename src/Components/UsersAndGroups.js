import React from "react";
import "./myStyle.css";
import { IconButton } from "@mui/material";
import {
  AccountCircle,
  AddCircle,
  PersonAdd,
  GroupAdd,
  Nightlight,
  Search,
} from "@mui/icons-material";
import logo from "../images/live-chat.png";

function UsersAndGroups() {
  const props = { name: "Maneesh" };
  return (
    <div className="list-container">
      <div className="ug-header">
        <img src={logo} style={{ height: "2rem", width: "2rem" }} />
        <p className="ug-title">Online Users </p>
      </div>
      <div className="sb-search">
        <IconButton>
          <Search />
        </IconButton>

        <input placeholder="Search" className="search-box" />
      </div>
      <div className="ug-list">
        <div className="list-item">
          <p className="con-icon">{props.name[0]}</p>
          <p className="con-title">{props.name}</p>
        </div>
        <div className="list-item">
          <p className="con-icon">{props.name[0]}</p>
          <p className="con-title">{props.name}</p>
        </div>
        <div className="list-item">
          <p className="con-icon">{props.name[0]}</p>
          <p className="con-title">{props.name}</p>
        </div>
      </div>
    </div>
  );
}

export default UsersAndGroups;
