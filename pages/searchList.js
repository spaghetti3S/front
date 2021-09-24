import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Tabs } from 'antd';
import AppLayout from '../components/AppLayout';

const SearchList = () => {
  const { TabPane } = Tabs;

  const [books, setBooks] = useState([]);

  // 제목 URL에서 가져오기
  const router = useRouter();
  const link = router.query;

  const getBookList = () => {
    let result = [];
    axios
      .get(`http://localhost:4000/test`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then(function (res) {
        result = res.data.response.docs;
        console.log(result);
        setBooks(result);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const updateList = () => {
    getBookList();
    console.log(books);
  };

  const a = books.map((book) => <p>{book.doc.bookname}</p>);

  return (
    <AppLayout>
      <Tabs type="card">
        <TabPane tab="검색" key="1">
          검색 결과입니다.
          <p>{link.title}</p>
          <button onClick={updateList} value="버튼"></button>
          {a}
        </TabPane>
        <TabPane tab="추천받기" key="2">
          책 추천 받기
        </TabPane>
      </Tabs>
    </AppLayout>
  );
};

export default SearchList;
