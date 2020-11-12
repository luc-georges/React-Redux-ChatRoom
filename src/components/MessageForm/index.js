import React from "react";
import "./style.scss";
import { FiSend } from 'react-icons/fi'
const MessageForm = () => {
  return (<form className="message-form">
    <input placeholder="type your text" className="message-form--input" />
    <FiSend className="message-form--submit"/>
    </form>);
};

export default MessageForm;
