import axios from 'axios';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { InputNumber, Radio, Button } from 'antd';

const ReviseUserInfo = () => {
  const [user, setUser] = useState({});
  const [sex, setSex] = useState('M');
  const [age, setAge] = useState(0);

  const getUserInfo = async () => {
    await axios
      .post(`http://${process.env.BACK_END_URL}/user/info`, {
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

  const submitRevise = async () => {
    await axios
      .post(`http://${process.env.BACK_END_URL}/user/revise`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        token: window.localStorage.getItem('token'),
        userId: window.localStorage.getItem('userId'),
        RSex: sex,
        RAge: age,
      })
      .then((res, err) => {
        if (err || res.data.code === 400) {
          alert('로그인이 필요합니다.');
          window.localStorage.removeItem('token');
          window.localStorage.removeItem('userId');
          Router.push('/');
        } else {
          alert('수정되었습니다.');
          Router.push('/mypage');
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
      <Button type="primary" style={{ width: '200px' }} onClick={submitRevise}>
        수정
      </Button>
    </div>
  );
};

export default ReviseUserInfo;
