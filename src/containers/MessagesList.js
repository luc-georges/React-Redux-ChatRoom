import {connect} from 'react-redux';
import MessagesList from '../components/MessagesList'

const mapStateToProps= (state) =>({
list: state.messages
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList)