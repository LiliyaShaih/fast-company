import React from 'react';

const BookMark = ({ status, id, onToggleBookMark }) => {
  return (
    <button onClick={() => onToggleBookMark(id)}>
      {status ? (
        <i class="bi bi-bookmark-heart-fill"></i>
      ) : (
        <i className="bi bi-bookmark"></i>
      )}
    </button>
  );
};

export default BookMark;
