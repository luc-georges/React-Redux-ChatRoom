export const INPUT_MESSAGE_CHANGE = "INPUT_MESSAGE_CHANGE";
export const FORM_SUBMIT = "FORM_SUBMIT";


export const onInputChange = (payload)=>({
  type: INPUT_MESSAGE_CHANGE,
  payload,
});
export const onFormSubmit = ()=>({
  type: FORM_SUBMIT,
});