import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Birth extends Component {
  static propTypes = {
    onChangeBirth: PropTypes.func,
    birth: PropTypes.objectOf({
      year: PropTypes.string,
      month: PropTypes.string,
      day: PropTypes.string
    })
  }

  static defaultProps = {
    birth: {
      year: "2001",
      month: "1",
      day: "1"
    }
  }

  Years = () => {
    let years = [];

    for (let y = 2001; y >= 1910; y--) {
      years.push(<option key={y} value={y}>{y}</option>);
    }

    return (
      <select value={this.props.birth.year} className="user-element" name="year" className="birth" onChange={this.props.onChangeBirth}>
        {years}
      </select>
    );
  }

  Month = () => {
    let months = [];

    for (let m = 1; m <= 12; m++) {
      months.push(<option value={m} key={m}>{m}</option>);
    }

    return (
      <select value={this.props.birth.month} className="user-element" name="month" className="birth" onChange={this.props.onChangeBirth}>
        {months}
      </select>
    );
  }

  Days = () => {
    let days = [];

    for (let d = 1; d <= 31; d++) {
      days.push(<option value={d} key={d}>{d}</option>);
    }

    return (
      <select value={this.props.birth.day} className="user-element" name="day" className="birth" onChange={this.props.onChangeBirth}>
        {days}
      </select>  
    );
  }

  render() {
    return (
      <div className="pure-control-group">
        <label>Дата рождения</label>
        {this.Years()}
        {this.Month()}
        {this.Days()}
      </div>
    );
  }
}

export default Birth;