import "./myStyle.css";
import { useNavigate } from "react-router-dom";

function ConversationsItem({ conversations }) {
  const navigate = useNavigate();
  return (
    <div
      className="conversations-container"
      onClick={() => {
        navigate("chat");
      }}
    >
      <p className="con-icon">{conversations.name[0]}</p>
      <p className="con-title">{conversations.name}</p>
      <p className="con-lastMessage">{conversations.lastMessage}</p>
      <p className="con-timeStamp">{conversations.timeStamp}</p>
    </div>
  );
}

export default ConversationsItem;
