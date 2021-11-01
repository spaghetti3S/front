// @flow
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import axios from 'axios';

const BookImage = ({ isbn }) => {
  const [bookImg, setBookImg] = useState('');

  const clickBook = () => {
    Router.push({
      pathname: './bookInfo',
      query: { isbn: isbn },
    });
  };

  const getBookImage = async () => {
    await axios
      .get(`http://localhost:4000/book/search/isbn?keyword=${isbn}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        setBookImg(res.data.item[0].coverLargeUrl);
      });
  };

  useEffect(() => {
    getBookImage();
  }, []);

  return (
    <div style={{ margin: '0px 20px' }}>
      <img id="Book" src={bookImg} alt="bookImage" onClick={clickBook} />
    </div>
  );
};

BookImage.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default BookImage;
