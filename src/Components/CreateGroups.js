import React from "react";
import { IconButton } from "@mui/material";
import { AddBoxRounded } from "@mui/icons-material";
import { DoneOutlineRounded } from "@mui/icons-material";

function CreateGroups() {
  return (
    <div className="createGroups-container">
      <input placeholder="Enter Name of the Group" className="search-box" />
      <IconButton>
        <DoneOutlineRounded />
      </IconButton>
    </div>
  );
}

export default CreateGroups;
