import React from 'react';
import { Tabs } from 'antd';

import BookList from './BookList';

const { TabPane } = Tabs;

const CategoryRcmd = () => {
  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="문학" key="1">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="아라비안" key="80">
            <BookList page="0" code="80" />
          </TabPane>
          <TabPane tab="나이트" key="81">
            <BookList page="0" code="81" />
          </TabPane>
          <TabPane tab="에서 춤을" key="82">
            <BookList kdc="" page="0" code="82" />
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
