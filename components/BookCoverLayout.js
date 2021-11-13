import React from 'react';
import PropTypes from 'prop-types';

const BookCoverLayout = ({ imgLink }) => {
  return (
    <div
      id="BookCoverLayoutWrapper"
      style={{ backgroundImage: `url(${imgLink})` }}
    >
      <div id="blur">
        <img src={imgLink} alt="bookCover" />
      </div>
    </div>
  );
};

BookCoverLayout.propTypes = {
  imgLink: PropTypes.string.isRequired,
};

export default BookCoverLayout;
