import UserForm from '../components/Form';
import { connect } from 'react-redux';
import { insert, update } from '../actions'

const mapDispatchToProps = (dispatch) => ({
  onUserInsert: (user) => dispatch(insert(user)),
  onUserUpdate: (user) => dispatch(update(user))
});

export default connect(null, mapDispatchToProps)(UserForm);
