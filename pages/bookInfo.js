import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import AppLayout from '../components/AppLayout';
import BookCoverLayout from '../components/BookCoverLayout';
import BookDescription from '../components/BookDescription';

const BookInfo = () => {
  const [book, setBook] = useState({ coverLargeUrl: '', pubDate: '0000' });
  const [libraryBookInfo, setlibraryBookInfo] = useState({});

  // 검색 키워드 URL 에서 가져옴
  const router = useRouter();
  const link = router.query;
  // 책정보 api
  const getBooksInfo = async (isbn) => {
    await axios
      .get(`http://localhost:4000/book/search/isbn?keyword=${isbn}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        setBook(res.data.item[0]);
        console.log(res.data.item[0]);
      });
  };
  const getBooksInfoLibrary = async (isbn) => {
    await axios
      .get(`http://localhost:4000/book/library/${isbn}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        console.log(res.data.response);
      });
  };

  useEffect(() => {
    getBooksInfo(link.isbn);
    getBooksInfoLibrary(link.isbn);
  }, []);

  return (
    <AppLayout>
      <BookCoverLayout imgLink={book.coverLargeUrl} />
      <div>
        <BookDescription book={book} />
      </div>
    </AppLayout>
  );
};

export default BookInfo;
