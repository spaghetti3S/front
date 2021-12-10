import React, { useEffect, useState } from 'react';

import AppLayout from '../components/AppLayout';
import ReviseUserInfo from '../components/ReviseUserInfo';

const revise = () => {
  return (
    <AppLayout>
      <div id="mypage">
        <div id="mypageWrapper">
          <ReviseUserInfo />
        </div>
      </div>
    </AppLayout>
  );
};

export default revise;
