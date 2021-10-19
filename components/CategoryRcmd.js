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
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="문학" key="80">
        <Tabs defaultActiveKey="81" centered>
          {dtl.literature.map((categoryInfo) => {
            return makeMenu(categoryInfo[0], categoryInfo[1]);
          })}
        </Tabs>
      </TabPane>
      <TabPane tab="역사" key="90">
        <Tabs defaultActiveKey="91" centered>
          {dtl.history.map((categoryInfo) => {
            return makeMenu(categoryInfo[0], categoryInfo[1]);
          })}
        </Tabs>
      </TabPane>
      <TabPane tab="철학" key="10">
        <Tabs defaultActiveKey="11" centered>
          {dtl.philosophy.map((categoryInfo) => {
            return makeMenu(categoryInfo[0], categoryInfo[1]);
          })}
        </Tabs>
      </TabPane>
      <TabPane tab="사회과학" key="30">
        <Tabs defaultActiveKey="31" centered>
          {dtl.socialScience.map((categoryInfo) => {
            return makeMenu(categoryInfo[0], categoryInfo[1]);
          })}
        </Tabs>
      </TabPane>
      <TabPane tab="자연과학" key="40">
        <Tabs defaultActiveKey="41" centered>
          {dtl.naturalScience.map((categoryInfo) => {
            return makeMenu(categoryInfo[0], categoryInfo[1]);
          })}
        </Tabs>
      </TabPane>
      <TabPane tab="기술과학" key="50">
        <Tabs defaultActiveKey="51" centered>
          {dtl.descriptiveScience.map((categoryInfo) => {
            return makeMenu(categoryInfo[0], categoryInfo[1]);
          })}
        </Tabs>
      </TabPane>
      <TabPane tab="예술" key="60">
        <Tabs defaultActiveKey="61" centered>
          {dtl.art.map((categoryInfo) => {
            return makeMenu(categoryInfo[0], categoryInfo[1]);
          })}
        </Tabs>
      </TabPane>
      <TabPane tab="언어" key="70">
        <Tabs defaultActiveKey="71" centered>
          {dtl.language.map((categoryInfo) => {
            return makeMenu(categoryInfo[0], categoryInfo[1]);
          })}
        </Tabs>
      </TabPane>
    </Tabs>
  );
};

export default CategoryRcmd;
