import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import BookInfoCard from './BookInfoCard';

const BookList = () => {
  const page = 0;
  // 스토어에서 검색 결과 가져옴
  const mainCategoryBookList = useSelector((state) => state.mainCategory);
  return (
    <>
      <Row>
        <Col>
          <LeftOutlined />
        </Col>
        {mainCategoryBookList &&
          mainCategoryBookList.slice(5 * page, 5 * (page + 1)).map((book) => {
            return (
              <Col>
                <BookInfoCard book={book} key={book.doc.isbn13} type="image" />
              </Col>
            );
          })}
        <Col>
          <RightOutlined />
        </Col>
      </Row>
    </>
  );
};

export default BookList;
