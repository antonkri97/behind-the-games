import React, { Component } from 'react';
import Birth from './birth';
import Name from './name';
import Address from './address';
import City from './city';
import Tel from './tel';
import Action from './action';
import PropTypes from 'prop-types';

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      birth: {
        year: "2001",
        month: "1",
        day: "1"
      },
      address: '',
      city: '',
      tel: ''
    }
  }

  static propTypes = {
    user: PropTypes.object,
    onUserInsert: PropTypes.func,
    selectedId: PropTypes.string,
    onUserUpdate: PropTypes.func,
    onUserSelect: PropTypes.func
  }

  isValid = () => {
    const { name, address, tel } = this.state;

    return name.length <= 100 &&
           address.trim(" ").split(" ").length <= 1 &&
           tel.length === 18 && 
           !tel.includes("_")
  }

  onInsert = (e) => {
    if (this.isValid()) {
      this.props.onUserInsert(this.state);
    }
    e.preventDefault();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.selectedId);
    if (nextProps.user !== undefined) {
      this.setState(nextProps.user)
    } else {
      console.log('user is undefined!');
      this.setState({
        name: '',
        birth: {
          year: "2001",
          month: "1",
          day: "1"
        },
        address: '',
        city: '',
        tel: ''
      })
    }
  }

  render() {
    const onChangeBirth = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      this.setState(prevState => ({ 
        birth: Object.assign(prevState.birth, { [name]: value })
      }))
    }

    return (
      <form className="pure-form pure-form-aligned">
        <fieldset>
          <Name name={this.state.name} onChangeName={(name) => this.setState({name})} />
          <Birth birth={this.state.birth} onChangeBirth={onChangeBirth}/>
          <Address address={this.state.address} onChangeAddress={(address) => this.setState({address})} />
          <City city={this.state.city} onChangeCity={(e) => this.setState({city: e.target.value})} />
          <Tel tel={this.state.tel} onTelChange={(e) => this.setState({ tel: e.target.value})} />
          <Action 
            isUpdate={this.props.user !== undefined}
            isValid={this.isValid()}
            onUpdate={() => this.props.onUserUpdate(this.state)}
            onInsert={() => this.props.onUserInsert(this.state)}
            onSelect={() => this.props.onUserSelect()} 
          />
        </fieldset>
      </form>
  );
  }
}

export default UserForm;
