import {connect} from 'react-redux';
import MessagesForm from '../components/MessageForm'
import { onInputChange,onFormSubmit } from '../store/action';


const mapStateToProps= (state) =>({
message: state.messageInput
});

const mapDispatchToProps = (dispatch) =>({
    onInputChange:(input)=>{
        console.log("changed in container", input)
        dispatch(onInputChange(input));
    },
    onFormSubmit:()=>{
        console.log("submited in container")
        dispatch(onFormSubmit());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesForm)