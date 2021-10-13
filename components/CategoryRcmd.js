import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import axios from 'axios';

import BookInfoCard from './BookInfoCard';

const { TabPane } = Tabs;

const CategoryRcmd = () => {
  const [bookList, setBookList] = useState([]);

  const getBooksList = async (code) => {
    await axios
      .get(`http://localhost:4000/list/${code}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        setBookList(res.data.response.docs);
      });
  };

  useEffect(() => {
    getBooksList(83);
  }, []);

  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="문학" key="1">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="아라비아" key="1">
            {bookList &&
              bookList.map((book) => {
                return <BookInfoCard key={book.doc.isbn13} book={book} />;
              })}
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
