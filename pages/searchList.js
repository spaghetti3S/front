import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import allAction from '../redux/actions';
import AppLayout from '../components/AppLayout';
import BookImage from '../components/BookImage';

const SearchList = () => {
  const dispatch = useDispatch();

  const getRedux = (keyword) => {
    dispatch(allAction.searchMainCategoryBookList(keyword));
  };
  // 스토어에서 검색 결과 가져옴
  const searchbooks = useSelector((state) => state.searchBooks);
  // 검색 키워드 URL 에서 가져옴
  const router = useRouter();
  const link = router.query;

  useEffect(() => {
    getRedux(link.title);
  }, []);

  return (
    <AppLayout>
      <div id="searchList">
        {searchbooks.map((book) => (
          <BookImage isbn={book.isbn} />
        ))}
      </div>
    </AppLayout>
  );
};

export default SearchList;
