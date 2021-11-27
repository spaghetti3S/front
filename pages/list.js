import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import AppLayout from '../components/AppLayout';
import WishComponent from '../components/WishComponent';

const list = () => {
  const [wishList, setWishList] = useState([]);

  const router = useRouter();
  const link = router.query;

  const getList = async () => {
    await axios
      .post(`http://localhost:4000/user/book/`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        token: window.localStorage.getItem('token'),
        state: link.type,
      })
      .then((res) => {
        console.log(res.data.data);
        setWishList(res.data.data);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <AppLayout>
      <div id="mypage">
        <div id="wishWrapper">
          {wishList.map((book) => {
            return <WishComponent isbn={book.isbn} />;
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default list;
