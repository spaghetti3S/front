import React from 'react';

import AppLayout from '../components/AppLayout';
import Bestseller from '../components/Bestseller';
import NewBooks from '../components/NewBooks';

const Home = () => {
  return (
    <AppLayout>
      <>
        <Bestseller />
        <NewBooks />
      </>
    </AppLayout>
  );
};

export default Home;
