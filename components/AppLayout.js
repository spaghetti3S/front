import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Layout } from 'antd';
import Router from 'next/router';

import SearchBar from './SearchBar';

const { Header, Footer, Content } = Layout;

const AppLayout = ({ children }) => {
  const logoutReq = async () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userId');
    alert('로그아웃 되었습니다. ');
    Router.push('/');
  };

  return (
    <Layout>
      <Header>
        <Link href="/">
          <a href="{() => false}">홈이동</a>
        </Link>
        {typeof window !== 'undefined' && window.localStorage.getItem('token') && (
          <>
            <a onClick={logoutReq} style={{ marginLeft: '20px' }}>
              로그아웃
            </a>
            <Link href="/mypage">
              <a style={{ margin: '20px' }} href="{() => false}">
                마이페이지
              </a>
            </Link>
          </>
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
      <Footer></Footer>
    </Layout>
  );
};
AppLayout.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default AppLayout;
