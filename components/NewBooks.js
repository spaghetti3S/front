import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image } from 'antd';

const NewBooks = () => {
  const [bookList, setBookList] = useState([]);
  const code = 101;
  const getNewBooks = async () => {
    await axios
      .get(`http://localhost:4000/books/newBooks/${code}`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res) => {
        setBookList(res.data.item);
      });
  };

  useEffect(() => {
    getNewBooks();
  }, []);

  return (
    <div>
      <div id="font_list">신간 도서</div>
      {bookList.slice(0, 5).map((book) => (
        <Image src={book.coverLargeUrl} />
      ))}
    </div>
  );
};

export default NewBooks;
