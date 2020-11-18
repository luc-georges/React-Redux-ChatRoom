import { 
  LOGIN_SUBMIT, LOGIN_SUBMIT_SUCCESS, LOGIN_SUBMIT_ERROR,
  FORM_SUBMIT,
  INPUT_MESSAGE_CHANGE, 
  TOGGLE_LOGIN_FORM,
  INPUT_LOGIN_CHANGED,
  MESSAGE_RECEIVED,
} from "../action"

import {v4 as uuidv4} from 'uuid'

const initialState = {
  messages:[],
  messageInput:'',
  loginOpened: true,
  loginData:{email:"", password:""},
  loadingLogin:false,
  errorMessage:"",
  username:"",
  isLogged:false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    //Login actions
    case LOGIN_SUBMIT:
      return {
        ...state,
        loadingLogin:true,
      };
      case LOGIN_SUBMIT_SUCCESS:
        console.log("login sub success")
        console.log("response: ", action.payload)
      return {
        ...state,
        loadingLogin:false,
        username:action.payload,
        errorMessage:"",
        isLogged:true,
        loginOpened:false,
      };
      case LOGIN_SUBMIT_ERROR:
        console.log("login sub ERROR")
        console.log("response: ", action.payload)
      return {
        ...state,
        loadingLogin:false,
        errorMessage:"Utilisateur Non trouvé",
        isLogged:false,
      };
    case INPUT_LOGIN_CHANGED:
      return {
        ...state,
        loginData:{
          ...state.loginData,
          ...action.payload
        }
      };
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        loginOpened: !state.loginOpened,
      };
      //Message actions
    case INPUT_MESSAGE_CHANGE:
      return {
        ...state,
        messageInput: action.payload,
      };
        case MESSAGE_RECEIVED:
        return {
          ...state,
          messages:[...state.messages,
                    action.payload
                  ],
        };
        case FORM_SUBMIT:
        return {
          ...state,
          messageInput:''
        };
        
    default:
      return state;
  }
};
