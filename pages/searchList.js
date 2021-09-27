import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from 'antd';
import allAction from '../redux/actions';

import AppLayout from '../components/AppLayout';

const SearchList = () => {
  const dispatch = useDispatch();
  const { TabPane } = Tabs;

  const searchbooks = useSelector((state) => state.searchBooks);

  // 제목 URL에서 가져오기
  const router = useRouter();
  const link = router.query;

  const getRedux = () => {
    dispatch(allAction.searchBooks());
  };

  const updateRedux = () => {
    getRedux();
  };
  return (
    <AppLayout>
      <Tabs type="card">
        <TabPane tab="검색" key="1">
          검색 결과입니다.
          <p>{link.title}</p>
          <button onClick={updateRedux}>버튼</button>
          <div>
            {searchbooks.map((book) => (
              <div key={book.doc.isbn13}>{book.doc.bookname}</div>
            ))}
          </div>
        </TabPane>
        <TabPane tab="추천받기" key="2">
          책 추천 받기
        </TabPane>
      </Tabs>
    </AppLayout>
  );
};

export default SearchList;
