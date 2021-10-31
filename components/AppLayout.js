import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Layout } from 'antd';
import SearchBar from './SearchBar';

const { Header, Footer, Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Link href="/">
          <a href="{() => false}">홈이동</a>
        </Link>
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
