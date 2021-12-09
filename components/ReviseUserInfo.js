import axios from 'axios';
import { Router } from 'next/router';
import React, { useEffect, useState } from 'react';
import { InputNumber, Radio, Button } from 'antd';

const ReviseUserInfo = () => {
  const [user, setUser] = useState({});
  const [sex, setSex] = useState('M');
  const [age, setAge] = useState(0);

  const getUserInfo = async () => {
    axios
      .post(`http://localhost:4000/user/info`, {
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
          setSex(res.data.data.sex);
          setAge(res.data.data.age);
        }
      });
  };

  const changeSex = (e) => {
    setSex(e.target.value);
  };

  const changeAge = (value) => {
    setAge(value);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <table id="userInfoTable">
        <tr>
          <th>아이디</th>
          <td>{user.userId}</td>
        </tr>
        <tr>
          <th>성별</th>
          <td>
            <Radio.Group onChange={changeSex} value={sex}>
              <Radio value="M">남</Radio>
              <Radio value="F">여</Radio>
            </Radio.Group>
          </td>
        </tr>
        <tr>
          <th>나이</th>
          <td>
            <InputNumber value={age} onChange={changeAge} />
          </td>
        </tr>
      </table>
      <Button style={{ width: '200px' }}>수정</Button>
    </div>
  );
};

export default ReviseUserInfo;
