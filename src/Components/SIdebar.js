import "./myStyle.css";
import {
  AccountCircle,
  AddCircle,
  PersonAdd,
  GroupAdd,
  Nightlight,
  Search,
  LightMode,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ConversationsItem from "./ConversationsItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";

function Sidebar() {
  const navigate = useNavigate();

  const lightTheme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
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
      <div className={"sb-header" + (lightTheme ? "" : "  dark")}>
        <div>
          <IconButton>
            <AccountCircle className={"icon" + (lightTheme ? "" : "  dark")} />
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
            <AddCircle className={"icon" + (lightTheme ? "" : "  dark")} />
          </IconButton>
          <IconButton onClick={() => dispatch(toggleTheme())}>
            {lightTheme && <Nightlight />}
            {!lightTheme && <LightMode />}
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
