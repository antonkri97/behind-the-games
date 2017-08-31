import UserForm from '../components/Form';
import { connect } from 'react-redux';
import { insert, update, select } from '../actions'

const mapStateToProps = (state) => ({
  user: state.selectedUser !== '_' ? state.users.find(u => u.id === state.selectedUser) : undefined,
  selectedId: state.selectedUser
})

const mapDispatchToProps = (dispatch) => ({
  onUserInsert: (user) => dispatch(insert(user)),
  onUserUpdate: (user) => dispatch(update(user)),
  onUserSelect: () => dispatch(select(-1))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
