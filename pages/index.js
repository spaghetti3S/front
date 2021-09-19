import React from 'react';
import Router from 'next/router';
import { Input, Tabs } from 'antd';
import AppLayout from '../components/AppLayout';

const { TabPane } = Tabs;
const { Search } = Input;

const Home = () => {
  const searchBook = (value) => {
    Router.push({ pathname: 'searchList', query: { title: value } });
  };

  const changeTab = (key) => {
    console.log(key);
  };

  return (
    <AppLayout>
      <Tabs onChange={changeTab} type="card">
        <TabPane tab="검색" key="1">
          <Search placeholder="책 제목" onSearch={searchBook} enterButton />
        </TabPane>
        <TabPane tab="추천받기" key="2">
          책 추천 받기
        </TabPane>
      </Tabs>
    </AppLayout>
  );
};

export default Home;
