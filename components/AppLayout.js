import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Layout } from 'antd';
import axios from 'axios';
import Router from 'next/router';
import jwt from 'jsonwebtoken';

import SearchBar from './SearchBar';

const { Header, Footer, Content } = Layout;

const AppLayout = ({ children }) => {
  const logoutReq = async () => {
    await axios
      .get(`http://localhost:4000/user/logout`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      })
      .then((res, err) => {
        if (!err || res.data.logoutSuccess) {
          window.localStorage.removeItem('token');
          alert('로그아웃 되었습니다. ');
          Router.push('/');
        }
      });
  };
  return (
    <Layout>
      <Header>
        <Link href="/">
          <a href="{() => false}">홈이동</a>
        </Link>
        {typeof window !== 'undefined' && window.localStorage.getItem('token') && (
          <a onClick={logoutReq} style={{ marginLeft: '20px' }}>
            로그아웃
          </a>
        )}
        {typeof window !== 'undefined' &&
          !window.localStorage.getItem('token') && (
            <Link href="/login">
              <a style={{ margin: '20px' }} href="{() => false}">
                로그인
              </a>
            </Link>
          )}
      </Header>
      <Content style={{ backgroundColor: 'white' }}>
        <SearchBar />
        <div className="content">{children}</div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
AppLayout.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default AppLayout;
