import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';

const LoginForm = () => {
  const loginReq = async (val) => {
    await axios
      .post(`http://${BACK_END_URL}/user/login`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        info: val,
      })
      .then((res, err) => {
        if (err || res.data.code === 400) {
          alert('아이디와 비밀번호를 확인해주세요.');
        } else {
          window.localStorage.setItem('userId', val.userId);
          window.localStorage.setItem('token', res.data.token);
          Router.push('/');
        }
      });
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={loginReq}
        style={{ width: '250px' }}
      >
        <Form.Item
          name="userId"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="아이디"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="비밀번호"
          />
        </Form.Item>
        <Form.Item>
          <Link className="login-form-forgot" href="/">
            비밀번호찾기
          </Link>
          <a style={{ margin: '15px' }}>
            <Link href="/register">회원가입</Link>
          </a>
          <span style={{ position: 'absolute', right: '0px' }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              로그인
            </Button>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
