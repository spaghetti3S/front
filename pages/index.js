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
        <NewBooks title="추천 자개계발" code="118" />
        <br />
        <NewBooks title="추천 국내소설" code="101" />
        <br />
        <NewBooks title="추천 인문학" code="119" />
        <br />
        <NewBooks title="추천 컴퓨터/인터넷" code="122" />
        <br />
        <NewBooks title="추천 여행" code="128" />
        <br />
        <NewBooks title="추천 시/에세이" code="102" />
      </div>
    </AppLayout>
  );
};

export default Home;
