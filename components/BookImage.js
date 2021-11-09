// @flow
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';
import axios from 'axios';

const BookImage = ({ isbn, state }) => {
  const [bookImg, setBookImg] = useState('');

  // 검색 키워드 URL 에서 가져옴
  const getBookImage = async (code) => {
    await axios
      .get(`http://localhost:4000/book/search/isbn?keyword=${code}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        setBookImg(res.data.item[0].coverLargeUrl);
      });
  };

  const clickBook = async () => {
    if (state) {
      state(isbn);
    }
    Router.push({
      pathname: './bookInfo',
      query: { isbn: isbn },
    });
  };

  useEffect(() => {
    getBookImage(isbn);
  }, [isbn]);

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
