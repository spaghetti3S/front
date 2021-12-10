import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'antd';
import axios from 'axios';

const { Meta } = Card;

// 검색 결과 책 간단 정보 표시 컴포넌트
const BookInfoCard = ({ book, type }) => {
  const [image, setImage] = useState('');

  const getBooksInfo = async (isbn) => {
    await axios
      .get(`http://${BACK_END_URL}/book/${isbn}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        setImage(res.data.response.detail[0].book.bookImageURL);
      });
  };

  useEffect(() => {
    getBooksInfo(book.doc.isbn13);
  });

  return (
    <span>
      {type === 'image' && (
        <Card style={{ height: 200 }}>
          <Image width={100} src={image} />
        </Card>
      )}
      {type === 'search' && (
        <Card>
          <Image width={150} src={image} />
          <Meta title={book.doc.bookname} description={book.doc.authors} />
          <p>출판사: {book.doc.publisher}</p>
          <p>출간년도: {book.doc.publication_date}</p>
        </Card>
      )}
    </span>
  );
};

BookInfoCard.propTypes = {
  book: PropTypes.shape({
    doc: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default BookInfoCard;
