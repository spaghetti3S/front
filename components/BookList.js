import React, { useEffect, useState } from 'react';
import { LeftSquareFilled, RightSquareFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import axios from 'axios';

import BookImage from './BookImage';

const BookList = ({ code }) => {
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(0);

  const pageUp = () => {
    setPage(page + 1);
  };
  const pageDown = () => {
    setPage(page - 1);
  };
  // .data.item -> Array 반환
  const getBestseller = async () => {
    await axios
      .get(`http://localhost:4000/books/bestseller/${code}`, {
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
    <Row>
      {page !== 0 && (
        <Col>
          <LeftSquareFilled onClick={pageDown} />
        </Col>
      )}
      {bookList &&
        bookList.slice(5 * page, 5 * (page + 1)).map((book) => {
          return (
            <Col key={book.isbn}>
              <BookImage imgLink={book.coverLargeUrl} isbn={book.isbn} />
            </Col>
          );
        })}
      {page !== bookList.length / 5 - 1 && (
        <Col>
          <RightSquareFilled onClick={pageUp} />
        </Col>
      )}
    </Row>
  );
};

BookList.propTypes = {
  code: PropTypes.number.isRequired,
};

export default BookList;
