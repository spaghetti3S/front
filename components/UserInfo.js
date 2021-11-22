import axios from 'axios';
import { Router } from 'next/router';
import React, { useEffect, useState } from 'react';

const UserInfo = () => {
  const [user, setUser] = useState({});
  const getUserInfo = () => {
    axios
      .post(`http://localhost:4000/user/info`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        token: window.localStorage.getItem('token'),
      })
      .then((res, err) => {
        if (err || res.data.code === 400) {
          alert('잘못된 로그인 정보입니다.');
          window.localStorage.removeItem('token');
          window.localStorage.removeItem('userId');
          Router.push('/');
        } else {
          setUser(res.data.data);
        }
      });
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <div id="mypage">
      <div id="mypageWrapper">
        <table id="userInfoTable">
          <tr>
            <th>아이디</th>
            <td>{user.userId}</td>
          </tr>
          <tr>
            <th>성별</th>
            <td>{user.sex === 'M' ? '남' : '여'}</td>
          </tr>
          <tr>
            <th>나이</th>
            <td>{user.age}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
