import React, { Component } from 'react';
import Birth from './birth';
import Name from './name';
import Address from './address';
import City from './city';
import Tel from './tel';
import PropTypes from 'prop-types';

const uuidv4 = require('uuid/v4')

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
    onUserUpdate: PropTypes.func
  }

  static defaultProps = {
    user: {
      name: '',
      birth: {
        year: "2001",
        month: "1",
        day: "1"
      },
      address: '',
      city: '',
      tel: 0
    }
  }

  isValid = () => {
    const { name, address, tel } = this.state;

    return name.length <= 100 && address.trim(" ").split(" ").length <= 1 && tel.length === 18;
  }

  onInsert = (e) => {
    if (this.isValid()) {
      this.props.onUserInsert(Object.assign(this.state, {id: uuidv4()}));
    }
    e.preventDefault();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== undefined) {
      this.setState(nextProps.user )
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
          <div className="pure-controls">
            <button className="pure-button pure-button-primary" onClick={this.onInsert}>Добавить</button>
          </div>
        </fieldset>
      </form>
  );
  }
}

export default UserForm;
