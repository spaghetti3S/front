import React from 'react';
import { Tabs } from 'antd';
import { useDispatch } from 'react-redux';

import allAction from '../redux/actions';
import BookList from './BookList';

const { TabPane } = Tabs;

const CategoryRcmd = () => {
  // 스토어에 카테고리별 책 리스트 저장
  const dispatch = useDispatch();
  const getRedux = (categoryNum) => {
    dispatch(allAction.searchMainCategoryBookList(categoryNum));
  };

  const dispatchBookList = (key) => {
    getRedux(key);
  };
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="문학" key="1">
        <Tabs defaultActiveKey="1" centered onChange={dispatchBookList}>
          <TabPane tab="아라비아" key="80">
            <BookList page="0" />
          </TabPane>
          <TabPane tab="아라비아" key="81">
            <BookList page="0" />
          </TabPane>
          <TabPane tab="아라비아" key="82">
            <BookList kdc="" page="0" />
          </TabPane>
        </Tabs>
      </TabPane>
      <TabPane tab="역사" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="언어" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default CategoryRcmd;
