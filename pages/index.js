import React from 'react';

import AppLayout from '../components/AppLayout';
import Bestseller from '../components/Bestseller';
import NewBooks from '../components/NewBooks';

const Home = () => {
  return (
    <AppLayout>
      <div style={{ margin: '20px 5%' }}>
        <Bestseller />
        <br />
        <NewBooks />
      </div>
    </AppLayout>
  );
};

export default Home;
