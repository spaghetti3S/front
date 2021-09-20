import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Tabs } from 'antd';
import AppLayout from '../components/AppLayout';

const SearchList = () => {
  const { TabPane } = Tabs;

  // 제목 URL에서 가져오기
  const router = useRouter();
  const link = router.query;

  const getBookList = () => {
    axios
      .get(`http:localhost:4000/test`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
    return 1;
  };

  return (
    <AppLayout>
      <Tabs type="card">
        <TabPane tab="검색" key="1">
          검색 결과입니다.
          <p>{link.title}</p>
          <p>{getBookList()}</p>
        </TabPane>
        <TabPane tab="추천받기" key="2">
          책 추천 받기
        </TabPane>
      </Tabs>
    </AppLayout>
  );
};

export default SearchList;
