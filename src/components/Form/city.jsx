import React, { Component } from 'react';
import PropTypes from 'prop-types';

class City extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: true
    }
  }

  static propTypes = {
    city: PropTypes.string,
    onChangeCity: PropTypes.func.isRequired
  }

  static defaultProps = {
    city: ''
  }

  render() {
    return (
      <div className="pure-control-group">
        <label>Город</label>
        <input value={this.props.city} type="text" onChange={this.props.onChangeCity}/>
        <span style={{ display: this.state.isValid ? 'none': 'inline'}}>
          ФИО должно быть менее 100 символов
        </span>
      </div>
    );
  }
}

export default City;
