import React from 'react';
import PropTypes from 'prop-types';

const onAction = (isUpdate, onInsert, onUpdate, onSelect) => (e) => {
  e.preventDefault();

  isUpdate ? onUpdate() : onInsert()

  onSelect();
}

const Action = ({ isUpdate, isValid, onInsert, onUpdate, onSelect }) => (
  <div className="pure-controls">
    <button 
      className="pure-button pure-button-primary" 
      onClick={onAction(isUpdate, onInsert, onUpdate, onSelect)}
      disabled={!isValid}
    >
      {
        isUpdate ? 'Обновить' : 'Добавить'
      }
    </button>
  </div>
);

Action.propTypes = {
  isUpdate: PropTypes.bool,
  isValid: PropTypes.bool,
  onUpdate: PropTypes.func,
  onInsert: PropTypes.func,
  onSelect: PropTypes.func
};

export default Action;
