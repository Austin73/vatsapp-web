import ChatArea from "./ChatArea";
import "./myStyle.css";
import Sidebar from "./SIdebar";
import { useState } from "react";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";

function MainContainer() {
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
    <div className="main-container">
      <Sidebar props={conversations} />
      {/* <ChatArea props={conversations[0]} /> */}
      {/* <Welcome /> */}
      <CreateGroups />
    </div>
  );
}

export default MainContainer;
