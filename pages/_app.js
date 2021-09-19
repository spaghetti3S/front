import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const Spaghetti = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Spaghetti</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.23.3/antd.js" />
      </Head>
      <Component />
    </>
  );
};

Spaghetti.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Spaghetti;
