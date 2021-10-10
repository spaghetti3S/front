import React from 'react';
import Router, { useRouter } from 'next/router';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';

import allAction from '../redux/actions';

const { Search } = Input;

const SearchBar = () => {
  const dispatch = useDispatch();
  const getRedux = (keyword) => {
    dispatch(allAction.searchBooks(keyword));
  };

  // 검색시 해당 페이지로 이동 (절대 경로 넣어야함)
  const searchBook = (value) => {
    getRedux(value);
    Router.push({ pathname: './searchList', query: { title: value } });
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
