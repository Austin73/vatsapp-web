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

function Sidebar({ props }) {
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </div>

        <div>
          <IconButton>
            <PersonAdd />
          </IconButton>
          <IconButton>
            <GroupAdd />
          </IconButton>
          <IconButton>
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
        {props.map((conversation) => {
          return (
            <ConversationsItem props={conversation} key={conversation.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
