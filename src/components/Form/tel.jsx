import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

const Tel = ({ onTelChange, tel }) => (
  <div className="pure-control-group">
    <label>Телефон</label>
    <InputMask value={tel} mask="+7 (999) 999-99-99" onChange={onTelChange}/>
  </div>
);

Tel.propTypes = {
  onTelChange: PropTypes.func.isRequired
};

export default Tel;
