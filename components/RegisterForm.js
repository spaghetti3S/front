import React from 'react';
import { Form, Input, Radio, InputNumber, Button } from 'antd';
import Router from 'next/router';
import axios from 'axios';

const RegisterForm = () => {
  const registerReq = async (val) => {
    if (val.password !== val.password_check) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      await axios
        .post(`http://${BACK_END_URL}/user/register`, {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          info: val,
        })
        .then((res, err) => {
          if (err) {
            alert('회원 가입에 실패했습니다.');
          } else {
            if (!res.data.registerSuccess) {
              alert('이미 존재하는 아이디 입니다.');
            } else {
              alert('회원가입이 완료되었습니다.\n로그인 해주세요.');
              Router.push('/login');
            }
          }
        });
    }
  };

  return (
    <div style={{ margin: '20%' }}>
      <Form
        onFinish={registerReq}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item
          label="아이디"
          name="id"
          rules={[{ required: true, message: '아이디를 입력하세요.' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력하세요.' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="비밀번호 확인"
          name="password_check"
          rules={[{ required: true, message: '비밀번호를 입력하세요.' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="age"
          label="나이"
          rules={[
            {
              type: 'number',
              min: 0,
              max: 99,
              required: true,
              message: '정확한 나이를 입력하세요.',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="sex"
          label="성별"
          rules={[{ required: true, message: '성별을 선택하세요' }]}
        >
          <Radio.Group>
            <Radio.Button value="M">남</Radio.Button>
            <Radio.Button value="F">여</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;
