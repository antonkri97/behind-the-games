import { connect } from 'react-redux';
import UserData from '../components/Data';
import { select, remove } from '../actions'

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  onSelect: (id) => dispatch(select(id)),
  onRemove: (id) => dispatch(remove(id)) 
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  users: stateProps.users.map(user => Object.assign(user, {
    onSelect: () => dispatchProps.onSelect(user.id),
    onRemove: () => dispatchProps.onRemove(user.id)
  }))
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(UserData);
