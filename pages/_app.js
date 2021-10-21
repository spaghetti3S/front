import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import wrapper from '../redux/configureStore';
import '../style.css';
import 'antd/dist/antd.css';
/* eslint-disable react/jsx-props-no-spreading */
const Spaghetti = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Spaghetti</title>
        {/* antdesign */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.js" />
        {/* google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jua&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

Spaghetti.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Spaghetti);
