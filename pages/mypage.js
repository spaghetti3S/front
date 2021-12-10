import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';

import AppLayout from '../components/AppLayout';
import UserInfo from '../components/UserInfo';

const mypage = () => {
  return (
    <AppLayout>
      <div id="mypage">
        <div id="mypageWrapper">
          <UserInfo />
          <Link href="/revise">
            <Button style={{ width: '200px' }}>정보수정</Button>
          </Link>
          <Link href="/list?type=interest">
            <Button style={{ width: '200px' }}>관심책</Button>
          </Link>
          <Link href="/list?type=read">
            <Button style={{ width: '200px' }}>읽은책</Button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export default mypage;
