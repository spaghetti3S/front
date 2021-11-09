import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';

import BookImage from './BookImage';

const NewBooks = () => {
  const [bookList, setBookList] = useState([]);
  const code = 118;
  const getNewBooks = async () => {
    await axios
      .get(`http://localhost:4000/books/newBooks/${code}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        setBookList(res.data.item);
      });
  };

  useEffect(() => {
    getNewBooks();
  }, []);

  return (
    <div>
      <div id="font_list">추천 자기계발 책</div>
      <Row>
        {bookList.slice(0, 6).map((book) => (
          <Col key={book.isbn}>
            <BookImage imgLink={book.coverLargeUrl} isbn={book.isbn} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewBooks;
