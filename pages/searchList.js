import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from 'antd';
import allAction from '../redux/actions';

import AppLayout from '../components/AppLayout';
import BookInfoCard from '../components/BookInfoCard';

const SearchList = () => {
  const dispatch = useDispatch();
  const { TabPane } = Tabs;

  // 스토어에서 검색 결과 가져옴
  const searchbooks = useSelector((state) => state.searchBooks);
  // 검색 키워드 URL 에서 가져옴
  const router = useRouter();
  const link = router.query;

  useEffect(() => {
    getRedux(link.title);
  }, []);

  const getRedux = (keyword) => {
    dispatch(allAction.searchBooks(keyword));
  };

  console.log(searchbooks);
  return (
    <AppLayout>
      <Tabs type="card">
        <TabPane tab="검색" key="1">
          검색 결과입니다.
          <p>{link.title}</p>
          <div>
            {searchbooks.map((book) => (
              <BookInfoCard book={book} />
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
