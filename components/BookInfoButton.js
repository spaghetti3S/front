import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HeartTwoTone, CheckSquareTwoTone } from '@ant-design/icons';

const BookInfoButton = ({ isbn }) => {
  const [interest, setInterest] = useState(false);
  const [read, setRead] = useState(false);
  const [interestCount, setInterestCount] = useState(0);
  const [readCount, setReadCount] = useState(0);

  const getClickedInfo = async (code) => {
    await axios
      .post(`http://15.165.57.229:8080/book/getState`, {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        book: code,
        token: localStorage.getItem('token'),
        userId: localStorage.getItem('userId'),
      })
      .then((res, err) => {
        if (err || res.data.code === '400') {
          alert('잘못된 접근입니다.');
        } else {
          setInterestCount(Number(res.data.interestCount));
          setReadCount(Number(res.data.readCount));
          if (res.data.interest[0]) {
            setInterest(true);
          }
          if (res.data.read[0]) {
            setRead(true);
          }
        }
      });
  };

  const changeState = async (code, typeReq) => {
    if (
      window.localStorage.getItem('token') &&
      window.localStorage.getItem('userId')
    ) {
      let act = '';
      if (typeReq === 'interest') {
        if (!interest) {
          act = 'true';
          alert('추가되었습니다.');
          setInterestCount(interestCount + 1);
        } else {
          act = 'false';
          alert('삭제되었습니다.');
          setInterestCount(interestCount - 1);
        }
      } else if (typeReq === 'read') {
        if (!read) {
          act = 'true';
          alert('추가되었습니다.');
          setReadCount(readCount + 1);
        } else {
          act = 'false';
          alert('삭제되었습니다.');
          setReadCount(readCount - 1);
        }
      }
      await axios
        .post(`http://15.165.57.229:8080/book/changeState`, {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          book: code,
          token: localStorage.getItem('token'),
          userId: localStorage.getItem('userId'),
          type: typeReq,
          action: act,
        })
        .then((res, err) => {
          if (err || res.data.code === 400) {
            alert('로그인이 필요합니다.');
          }
        });
    } else {
      alert('로그인이 필요합니다.');
    }
  };

  const clickInterest = () => {
    changeState(isbn, 'interest');
    setInterest(!interest);
  };

  const clickRead = () => {
    changeState(isbn, 'read');
    setRead(!read);
  };

  useEffect(() => {
    if (
      window.localStorage.getItem('userId') &&
      window.localStorage.getItem('token')
    ) {
      getClickedInfo(isbn);
    }
  }, [isbn]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100px',
      }}
    >
      <div className="buttonWrapper">
        <div onClick={clickInterest}>
          {interest && interest ? (
            <HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '40px' }} />
          ) : (
            <HeartTwoTone twoToneColor="#c0c0c0" style={{ fontSize: '40px' }} />
          )}
        </div>
        <div className="count">{interestCount}</div>
      </div>
      <div className="buttonWrapper">
        <div onClick={clickRead}>
          {read && read ? (
            <CheckSquareTwoTone
              twoToneColor="#52c41a"
              style={{ fontSize: '40px' }}
            />
          ) : (
            <CheckSquareTwoTone
              twoToneColor="#c0c0c0"
              style={{ fontSize: '40px' }}
            />
          )}
        </div>
        <div className="count"> {readCount}</div>
      </div>
    </div>
  );
};

export default BookInfoButton;
