import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import AppLayout from '../components/AppLayout';
import WishComponent from '../components/WishComponent';

const list = () => {
  const [wishList, setWishList] = useState([]);
  const [page, setPage] = useState(0);

  const router = useRouter();
  const link = router.query;

  const getList = async () => {
    if (link.type) {
      await axios
        .post(`http://localhost:4000/user/book/`, {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          token: window.localStorage.getItem('token'),
          state: link.type,
        })
        .then((res) => {
          setWishList(res.data.data);
        });
    }
  };

  const nextPage = () => {
    const totalPage =
      wishList.length % 12 === 0
        ? parseInt(wishList.length / 12)
        : parseInt(wishList.length / 12) + 1;
    if (totalPage - 1 > page) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page !== 0) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <AppLayout>
      <div id="mypage">
        <div id="pageButton" onClick={prevPage}>
          <LeftOutlined />
        </div>
        <div id="wishWrapper">
          {wishList.slice(page * 12, page * 12 + 12).map((book) => {
            return <WishComponent isbn={book.isbn} />;
          })}
        </div>
        <div id="pageButton" onClick={nextPage}>
          <RightOutlined />
        </div>
      </div>
      <p style={{ textAlign: 'center' }}>
        {page + 1} /{' '}
        {wishList.length % 12 === 0
          ? parseInt(wishList.length / 12)
          : parseInt(wishList.length / 12) + 1}
      </p>
    </AppLayout>
  );
};

export default list;
