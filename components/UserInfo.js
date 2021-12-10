import axios from 'axios';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';

const UserInfo = () => {
  const [user, setUser] = useState({});
  const getUserInfo = () => {
    axios
      .post(`http://15.165.57.229:8080/user/info`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        token: window.localStorage.getItem('token'),
      })
      .then((res, err) => {
        if (err || res.data.code === 400) {
          alert('로그인이 필요한 페이지 입니다.');
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
  );
};

export default UserInfo;
