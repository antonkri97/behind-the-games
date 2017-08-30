import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: true
    }
  }

  static propTypes = {
    name: PropTypes.string,
    onChangeName: PropTypes.func.isRequired
  }

  static defaultProps = {
    name: ''
  }

  onChange = (e) => {
    if (e.target.value.length > 100) {
      this.setState({ isValid: false })
      return
    }

    this.setState({ isValid: true });
    this.props.onChangeName(e.target.value);    
  }

  render() {
    return (
      <div className="pure-control-group">
        <label>ФИО пользователя</label>
        <input type="text" onChange={this.onChange}/>
        <span style={{ display: this.state.isValid ? 'none': 'inline'}}>
          ФИО должно быть менее 100 символов
        </span>
      </div>
    );
  }
}

export default Name;
