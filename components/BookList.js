import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import BookImage from './BookImage';

const BookList = ({ code }) => {
  const [bookList, setBookList] = useState([]);
  // .data.item -> Array 반환
  const getBestseller = async () => {
    await axios
      .get(`http://${BACK_END_URL}/books/bestseller/${code}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        setBookList(res.data.item);
      });
  };

  useEffect(() => {
    getBestseller();
  }, []);

  return (
    <div className="sliderWrapper">
      {bookList &&
        bookList.map((book) => {
          return <BookImage imgLink={book.coverLargeUrl} isbn={book.isbn} />;
        })}
    </div>
  );
};

BookList.propTypes = {
  code: PropTypes.number.isRequired,
};

export default BookList;
