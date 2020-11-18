import {connect} from 'react-redux';
import Login from '../components/Login'
import { toggleLoginForm,onLoginInputChange,loginSubmit } from '../store/action';


const mapStateToProps= (state) =>({
loginData: state.loginData,
opened: state.loginOpened,
loading:state.loadingLogin,
errorMessage: state.errorMessage,
username: state.username,
isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) =>({
    onOpenClick:()=>{
        dispatch(toggleLoginForm());
    },
    onLoginInputChange:(input)=>{
        dispatch(onLoginInputChange(input));
    },
    onLoginSubmit:()=>{
        dispatch(loginSubmit());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)