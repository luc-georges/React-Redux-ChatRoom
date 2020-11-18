import {connect} from 'react-redux';
import MessagesList from '../components/MessagesList'

const mapStateToProps= (state) =>({
list: state.messages,
user: state.username,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList)