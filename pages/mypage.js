import React from 'react';
import { Button } from 'antd';

import AppLayout from '../components/AppLayout';
import UserInfo from '../components/UserInfo';

const mypage = () => {
  return (
    <AppLayout>
      <div id="mypage">
        <div id="mypageWrapper">
          <UserInfo />
          <Button style={{ width: '200px' }}>정보수정</Button>
          <Button style={{ width: '200px' }}>관심책</Button>
          <Button style={{ width: '200px' }}>읽은책</Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default mypage;
