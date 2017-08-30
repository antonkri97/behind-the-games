import React, { Component } from 'react';
import Birth from './birth';
import Name from './name';
import Address from './address';
import Tel from './tel';

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      birth: {
        year: 1990,
        month: 1,
        day: 1
      },
      address: '',
      tel: 0
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
          <Name onChangeName={(name) => this.setState({name})} />
          <Birth onChangeBirth={onChangeBirth}/>
          <Address onChangeAddress={(address) => this.setState({address})} />
          <Tel onTelChange={(e) => this.setState({ tel: e.target.value})} />
          <div className="pure-controls">
            <button className="pure-button pure-button-primary">Добавить</button>
          </div>
        </fieldset>
      </form>
  );
  }
}

export default UserForm;
