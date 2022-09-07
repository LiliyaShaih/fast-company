import React, { useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const getCorrectSuffix = (number) => {
    if (number >= 12 && number <= 14) {
      return '';
    } else if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) {
      return 'а';
    } else {
      return '';
    }
  };

  const renderPhrase = (number) => {
    if (number !== 0) {
      return (
        <h1 className="badge bg-primary" style={{ fontSize: '2.5em' }}>
          {number} человек{getCorrectSuffix(number)} тусанет с тобой сегодня
        </h1>
      );
    }
    return (
      <h1 className="badge bg-danger" style={{ fontSize: '2.5em' }}>
        Никто с тобой не тусанет
      </h1>
    );
  };

  const getBageClasses = (quality) => {
    let classes = 'badge bg-';
    classes += quality.color;
    return classes;
  };

  const renderBadges = (qualities) => {
    return qualities.map((quality) => {
      return (
        <span
          className={getBageClasses(quality)}
          key={quality._id}
          style={{ marginRight: '10px' }}
        >
          {quality.name}
        </span>
      );
    });
  };

  const renderUsersInfo = () => {
    return users.map((user) => {
      const { name, profession, qualities, completedMeetings, rate, _id } =
        user;
      const professionName = profession.name;

      return (
        <tr key={_id}>
          <td>{name}</td>
          <td>{renderBadges(qualities)}</td>
          <td>{professionName}</td>
          <td>{completedMeetings}</td>
          <td>{rate}/5</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(_id)}
            >
              delete
            </button>
          </td>
        </tr>
      );
    });
  };

  if (users.length !== 0) {
    return (
      <>
        {renderPhrase(users.length)}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился,раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{renderUsersInfo()}</tbody>
        </table>
      </>
    );
  }

  return renderPhrase(0);
};

export default Users;
