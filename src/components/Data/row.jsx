import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ name, birth, address, city, tel, onSelect, onRemove }) => (
  <tr>
      <td>{name}</td>
      <td>{`${birth.year} - ${birth.month} - ${birth.day}`}</td>
      <td>{address}</td>
      <td>{city}</td>
      <td>{tel}</td>
      <td><button onClick={onSelect}>Изменить</button></td>
      <td><button onClick={onRemove}>Удалить</button></td>
  </tr>
);

Row.propTypes = {
  name: PropTypes.string,
  birth: PropTypes.objectOf({
    year: PropTypes.string,
    month: PropTypes.string,
    day: PropTypes.string
  }),
  address: PropTypes.string,
  city: PropTypes.string,
  tel: PropTypes.string,
  onSelect: PropTypes.func,
  onRemove: PropTypes.func
};

export default Row;
