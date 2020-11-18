import React, { useRef, useEffect } from "react";

import "./style.scss";
import PropTypes from 'prop-types'

const MessagesList = ({ list,user }) => {
  const containerElement = useRef(null);
  useEffect(() => {
    const scrollY = containerElement.current.scrollHeight;
    containerElement.current.scrollTo(0, scrollY);
  }, [list]);
  return (
    <div ref={containerElement} className="message-list"  >
      {list.map((messageObject) =>{
        return   <Message key={messageObject.id}{...messageObject} connectedUser={user} />
    
      })}
    </div>
  );
};


const Message = ({author, content,connectedUser}) => {

  return (
  <div className={connectedUser === author ? "message" : "message right"}>
    
          <div className={connectedUser === author ? "message-author" : "message-author--right"}>
            {author}
          </div>
          <div className="message-text">
            {content}
          </div>
        </div>
        )
};

MessagesList.propTypes ={
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
}
Message.propTypes = {
      author:PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
}
export default MessagesList;
