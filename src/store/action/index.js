export const FORM_SUBMIT = "FORM_SUBMIT";
export const FORM_SUBMIT_SUCCESS = "FORM_SUBMIT_SUCCESS";


export const LOGIN_SUBMIT = "LOGIN_SUBMIT";
export const LOGIN_SUBMIT_SUCCESS = "LOGIN_SUBMIT_SUCCESS";
export const LOGIN_SUBMIT_ERROR = "LOGIN_SUBMIT_ERROR";


export const TOGGLE_LOGIN_FORM = "TOGGLE_LOGIN_FORM";
export const INPUT_LOGIN_CHANGED = "INPUT_LOGIN_CHANGED";

export const INPUT_MESSAGE_CHANGE = "INPUT_MESSAGE_CHANGE";
export const MESSAGE_RECEIVED = "MESSAGE_RECEIVED";


export const onFormSubmit = ()=>({
  type: FORM_SUBMIT,
});
export const onFormSubmitSuccess = ()=>({
  type: FORM_SUBMIT_SUCCESS,
});
export const onMessageReceived = (payload)=>({
  type: MESSAGE_RECEIVED,
  payload
});



export const loginSubmit = () =>({
  type:LOGIN_SUBMIT,
});
export const onLoginSubmitSuccess = (payload)=>({
  type: LOGIN_SUBMIT_SUCCESS,
  payload,
});
export const onLoginSubmitError = (payload)=>({
  type: LOGIN_SUBMIT_ERROR,
  payload,
});




export const onInputChange = (payload)=>({
  type: INPUT_MESSAGE_CHANGE,
  payload,
});

export const toggleLoginForm = ()=>({
  type: TOGGLE_LOGIN_FORM,
});
export const onLoginInputChange = (payload)=>({
  type: INPUT_LOGIN_CHANGED,
  payload,
});