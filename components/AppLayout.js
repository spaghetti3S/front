import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Link href="/">
          <a href="{() => false}">홈이동</a>
        </Link>
      </Header>
      <Content>
        <div className="content">{children}</div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
AppLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default AppLayout;
