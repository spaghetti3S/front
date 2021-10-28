// @flow
import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

const BookImage = ({ imgLink, isbn }) => {
  const clickBook = () => {
    Router.push({
      pathname: './bookInfo',
      query: { isbn: isbn },
    });
  };

  return (
    <div>
      <img id="Book" src={imgLink} alt="bookImage" onClick={clickBook} />
    </div>
  );
};

BookImage.propTypes = {
  imgLink: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
};

export default BookImage;
