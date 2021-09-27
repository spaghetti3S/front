import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar } from 'antd';
import {
  ConsoleSqlOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

// 검색 결과 책 간단 정보 표시 컴포넌트
const BookInfoCard = (props) => {
  return (
    <Card>
      <Meta
        title={props.book.doc.bookname}
        description={props.book.doc.authors}
      />
      <p>출판사: {props.book.doc.publisher}</p>
      <p>출간년도: {props.book.doc.publication_date}</p>
    </Card>
    // dasdas
  );
};

export default BookInfoCard;
