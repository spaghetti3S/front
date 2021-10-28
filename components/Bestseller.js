import React from 'react';
import { Tabs } from 'antd';

import BookList from './BookList';
import dtl from '../src/category';

const { TabPane } = Tabs;

const CategoryRcmd = () => {
  const makeMenu = (title, key) => {
    return (
      <TabPane tab={title} key={key}>
        <BookList code={key} />
      </TabPane>
    );
  };

  return (
    <div>
      <div id="font_list">서점 베스트셀러 </div>
      <Tabs defaultActiveKey="100" centered>
        {dtl.category.map((categoryInfo) => {
          return makeMenu(categoryInfo[0], categoryInfo[1]);
        })}
      </Tabs>
    </div>
  );
};

export default CategoryRcmd;
