import React from "react";
import "./Chat.css";
import LeftSideBar from "../../components/Leftsidebar/LeftSideBar";
import RightSideBar from "../../components/Rightsidebar/RightSideBar";
import ChatBox from "../../components/ChatBox/ChatBox";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container">
        <LeftSideBar />
        <ChatBox />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Chat;
