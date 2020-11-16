import { FORM_SUBMIT, INPUT_MESSAGE_CHANGE } from "../action"
import {v4 as uuidv4} from 'uuid'
const initialState = {
  messages:[{author:"Truc", content:"machins1",id:1}],
  messageInput:''
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_MESSAGE_CHANGE:
      return {
        ...state,
        messageInput: action.payload,
      };
      case FORM_SUBMIT:
        return {
          ...state,
          messages:[...state.messages,{
            id:uuidv4(), author:'anonyme', content:state.messageInput
          }],
          messageInput:''
        };
    default:
      return state;
  }
};
