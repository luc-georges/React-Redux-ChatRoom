import {LOGIN_SUBMIT_SUCCESS,FORM_SUBMIT,onMessageReceived, onFormSubmitSuccess} from '../action'
import Toastify from 'toastify-js'
let socket ;


const socketMiddlewares =(store) => (next) => (action) =>{
    
    switch(action.type){
        case LOGIN_SUBMIT_SUCCESS:
            socket = window.io('http://192.168.1.34:3001');
            socket.on('send_message',(message)=>{
                store.dispatch(onMessageReceived(message))
            })
            Toastify({
                text: `Welcome ${action.payload}! you are connected`,
                duration: 3000, 
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                gravity: "top", // `top` or `bottom`
                position: 'center', // `left`, `center` or `right`
                className:"info",
                stopOnFocus: true, // Prevents dismissing of toast on hover
                onClick: function(){} // Callback after click
              }).showToast();
              socket.emit('send_message', {content:` ----${action.payload} joined the chat----`, author:'Admin BOT'})
            break;
            case FORM_SUBMIT:
                const {messageInput, username} = store.getState()
                if(messageInput.length === 0){
                    return;
                }
                else{
                    socket.emit('send_message', {content:messageInput, author:username})
                    // store.dispatch(onFormSubmitSuccess())

                }
                break;
            default:
    }
    next(action);
}

export default socketMiddlewares;