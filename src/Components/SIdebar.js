import "./myStyle.css";
import {
  AccountCircle,
  AddCircle,
  PersonAdd,
  GroupAdd,
  Nightlight,
  Search,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ConversationsItem from "./ConversationsItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([
    {
      name: "Test1",
      lastMessage: "Last Message 1",
      timeStamp: "Today",
    },
    {
      name: "Test2",
      lastMessage: "Last Message 2",
      timeStamp: "Today",
    },
    {
      name: "Test3",
      lastMessage: "Last Message 3",
      timeStamp: "Today",
    },
  ]);
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </div>

        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAdd />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAdd />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircle />
          </IconButton>
          <IconButton>
            <Nightlight />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          {" "}
          <Search />
        </IconButton>

        <input placeholder="Search" className="search-box" />
      </div>
      <div className="sb-conversations">
        {conversations.map((conversation) => {
          return (
            <ConversationsItem
              conversations={conversation}
              key={conversation.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
