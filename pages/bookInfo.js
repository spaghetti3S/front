import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import AppLayout from '../components/AppLayout';
import BookCoverLayout from '../components/BookCoverLayout';
import BookDescription from '../components/BookDescription';
import BookLibraryInfo from '../components/BookLibraryInfo';
import BookRelevenceList from '../components/BookRelevenceList';
import KakaoMap from '../components/KakaoMap';

const BookInfo = () => {
  const [book, setBook] = useState();
  const [libraryBookInfo, setlibraryBookInfo] = useState();
  const [writer, setWriter] = useState('');

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
  const getBooksInfoLibrary = async () => {
    await axios
      .get(`http://localhost:4000/book/library/${link.isbn}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        setlibraryBookInfo(res.data.response.loanInfo);
        setWriter(res.data.response.detail[0].book.authors);
        console.log(res.data.response);
      });
  };

  useEffect(() => {
    getBooksInfo(link.isbn);
    getBooksInfoLibrary(link.isbn);
  }, [link.isbn]);

  return (
    <AppLayout>
      <div>
        <BookCoverLayout imgLink={book && book.coverLargeUrl} />
        <div>
          {book && <BookDescription book={book} writer={writer} />}
          <BookLibraryInfo book={libraryBookInfo} />
        </div>
        <div style={{ clear: 'left' }}>
          <BookRelevenceList code={link.isbn} />
        </div>
        <KakaoMap isbn={link.isbn} />
      </div>
    </AppLayout>
  );
};

export default BookInfo;
