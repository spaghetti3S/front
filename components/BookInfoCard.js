import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const { Meta } = Card;

// 검색 결과 책 간단 정보 표시 컴포넌트
const BookInfoCard = ({ book }) => {
  return (
    <Card>
      <Meta title={book.doc.bookname} description={book.doc.authors} />
      <p>출판사: {book.doc.publisher}</p>
      <p>출간년도: {book.doc.publication_date}</p>
    </Card>
  );
};

BookInfoCard.propTypes = {
  book: PropTypes.element.isRequired,
};

export default BookInfoCard;
