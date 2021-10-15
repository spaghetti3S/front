import React from 'react';
import { Tabs } from 'antd';

import BookList from './BookList';

const { TabPane } = Tabs;

const CategoryRcmd = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="문학" key="1">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="아라비아" key="1">
            <BookList />
          </TabPane>
          <TabPane tab="아라비아" key="2">
            1234
          </TabPane>
          <TabPane tab="아라비아" key="3">
            1234
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
