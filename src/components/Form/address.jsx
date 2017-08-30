import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: true
    }
  }

  static propTypes = {
    onChangeAddress: PropTypes.func.isRequired
  }

  onChange = (e) => {
    const ws = e.target.value.split(" ").length;

    if (ws > 1) {
      this.setState({ isValid: false });
      return
    }

    this.setState({ isValid: true });
    this.props.onChangeAddress(e.target.value);
  }

  render() {
    return (
      <div className="pure-control-group">
        <label>Адрес</label>
        <input type="text" onChange={this.onChange}/>
        <span style={{ display: this.state.isValid ? 'none': 'inline'}}>
          Адрес должен быть в одну строку
        </span>
      </div>
    )
  }
}

export default Address;
