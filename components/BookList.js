import React, { useEffect, useState } from 'react';
import { LeftSquareFilled, RightSquareFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import axios from 'axios';

import BookInfoCard from './BookInfoCard';

const BookList = ({ code }) => {
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(0);

  const pageUp = () => {
    setPage(page + 1);
  };
  const pageDown = () => {
    setPage(page - 1);
  };

  const getBookList = async () => {
    await axios
      .get(`http://localhost:4000/books/${code}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        setBookList(res.data.response.docs);
      });
  };

  useEffect(() => {
    getBookList();
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
            <Col key={book.doc.no}>
              <BookInfoCard type="image" book={book} key={book.doc.no} />
            </Col>
          );
        })}
      {page !== 2 && (
        <Col>
          <RightSquareFilled onClick={pageUp} />
        </Col>
      )}
    </Row>
  );
};

BookList.propTypes = {
  code: PropTypes.string.isRequired,
};

export default BookList;
