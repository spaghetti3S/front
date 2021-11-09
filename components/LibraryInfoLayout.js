import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LibraryInfoLayout = ({ library, isbn }) => {
  useEffect(() => {
    library.map(async (lib) => {
      // getLoanInfo(lib.libCode, index, libraryInfo);
      await axios
        .get(`http://localhost:4000/book/loan/${lib.libCode}/${isbn}`, {
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        })
        .then((res) => {
          if (
            res.data.result.hasBook === 'N' ||
            res.data.result.hasBook === 'N'
          ) {
            console.log(lib.libName + '불가능');
          } else console.log(lib.libName + '가능');
        });
    });
  }, [library]);

  return (
    <div
      id="libraryInfo"
      style={{
        width: '30%',
        height: '500px',
        backgroundColor: '#f0f8ff',
      }}
    >
      {library.map((lib, index) => {
        return <div>{lib.libName}</div>;
      })}
    </div>
  );
};

export default LibraryInfoLayout;
