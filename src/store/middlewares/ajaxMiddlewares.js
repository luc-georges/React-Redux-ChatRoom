import {LOGIN_SUBMIT, onLoginSubmitSuccess, onLoginSubmitError} from '../action'
import axios from 'axios'

const ajaxMiddlewares = (store) => (next) => (action) => {
    next(action)
    switch(action.type){
        case LOGIN_SUBMIT:
            axios({
                method:'post',
                url:'http://192.168.1.34:3001/login',
                data:store.getState().loginData,
            })
            .then((res)=>{
                store.dispatch(onLoginSubmitSuccess(res.data));
            })
            .catch((err) =>{
                store.dispatch(onLoginSubmitError(err));
            })
            break;
        default:
            return;
    }
};

export default ajaxMiddlewares;