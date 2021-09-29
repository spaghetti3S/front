import React from 'react';
import Router, { useRouter } from 'next/router';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = () => {
  // 검색시 해당 페이지로 이동 (절대 경로 넣어야함)
  const searchBook = (value) => {
    Router.push({ pathname: 'searchList', query: { title: value } });
  };

  const router = useRouter();
  const link = router.query;

  return (
    <>
      <Search
        placeholder="책 제목"
        onSearch={searchBook}
        defaultValue={link.title}
        enterButton
      />
    </>
  );
};

export default SearchBar;
