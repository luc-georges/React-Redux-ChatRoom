import React from "react";
import "./style.scss";
import { FiSend } from 'react-icons/fi'
import PropTypes from 'prop-types'

const MessageForm = ({onInputChange, onFormSubmit, message}) => {

  return (
  <form className="message-form"
        onSubmit={(ev) =>{
          ev.preventDefault();
          onFormSubmit();
        }}>
    <input 
    placeholder="type your text" 
    className="message-form--input" 
    onChange={ (e) => {
      onInputChange(e.target.value);
    }}
    value={message}
    />
    <FiSend 
      className="message-form--submit" 
      onClick={()=>{
        console.log("clic");
        onFormSubmit();
      }}/>
  </form>);
};


MessageForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
export default MessageForm;
