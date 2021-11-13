import React from 'react';

const BookLibraryInfo = ({ book }) => {
  return (
    <div className="libraryInfo">
      {book &&
        book[0].Total &&
        '도서관 전체 대출 순위 ' + book[0].Total.ranking + '위'}
    </div>
  );
};

export default BookLibraryInfo;
