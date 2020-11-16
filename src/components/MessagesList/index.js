import React from "react";
import "./style.scss";
import PropTypes from 'prop-types'

const MessagesList = ({ list }) => {
console.log();
  return (
    <div className="message-list">
      {list.map((messageObject) =>{
        return   <Message key={messageObject.id}{...messageObject} />
    
      })}
    </div>
  );
};



const Message = ({author, content}) => {
  return <div className="message">
          <div className="message-author">
            {author}
          </div>
          <div className="message-text">
            {content}
          </div>
        </div>;
};

MessagesList.propTypes ={
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
}
Message.propTypes = {
      author:PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
}
export default MessagesList;
