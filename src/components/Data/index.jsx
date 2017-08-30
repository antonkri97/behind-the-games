import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './row';

class Data extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.objectOf({
        id: PropTypes.number,
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
      })
    )
  }

  static defaultProps = {
    users: []
  }

  render() {
    return (
      <table className="pure-table">
        <thead>
            <tr>
                <th>ФИО</th>
                <th>Дата рождения</th>
                <th>Адрес</th>
                <th>Город</th>
                <th>Телефон</th>
                <th>#</th>
                <th>#</th>
            </tr>
        </thead>
        <tbody>
          {
            this.props.users.map((user, i) => (
              <Row
                key={i}
                name={user.name}
                birth={user.birth}
                address={user.address}
                city={user.city}
                tel={user.tel}
                onSelect={user.onSelect}
                onRemove={user.onRemove}
              />
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default Data;
