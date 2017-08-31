import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Action extends Component {
  static propTypes = {
    isUpdate: PropTypes.bool,
    isValid: PropTypes.bool,
    onUpdate: PropTypes.func,
    onInsert: PropTypes.func,
    onSelect: PropTypes.func
  }

  onAction = (e) => {
    e.preventDefault();
    const { isUpdate, onInsert, onUpdate, onSelect } = this.props;

    isUpdate ? onUpdate() : onInsert()

    onSelect();
  }

  render() {
    const { isValid, isUpdate } = this.props;

    return (
      <div className="pure-controls">
        <button className="pure-button pure-button-primary" onClick={this.onAction} disabled={!isValid} >
          {
            isUpdate ? 'Обновить' : 'Добавить'
          }
        </button>
      </div>
    );
  }
}
