import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';

import allAction from '../redux/actions';
import BookInfoCard from './BookInfoCard';

const BookList = () => {
  // 스토어에 카테고리별 책 리스트 저장
  const dispatch = useDispatch();
  const getRedux = (kdc) => {
    dispatch(allAction.searchMainCategoryBookList(kdc));
  };

  // 스토어에서 검색 결과 가져옴
  const mainCategoryBookList = useSelector((state) => state.mainCategory);

  useEffect(() => {
    getRedux(81);
  });
  return (
    <Row>
      {mainCategoryBookList &&
        mainCategoryBookList.map((book) => {
          return (
            <Col>
              <BookInfoCard book={book} key={book.doc.isbn13} type="image" />
            </Col>
          );
        })}
    </Row>
  );
};

export default BookList;
