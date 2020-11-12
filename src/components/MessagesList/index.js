import React from "react";
import "./style.scss";

const MessageList = () => {
  return (
    <div className="message-list">
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

const Message = () => {
  return <div className="message">
          <div className="message-author">
            Author
          </div>
          <div className="message-text">
            Message
          </div>
        </div>;
};

export default MessageList;
