import React from 'react';

const BookDescription = ({ book }) => {
  return (
    <div id="font_info" style={{ width: '60%', margin: '20px' }}>
      <div id="font_title">{book.title}</div>
      {book.author}
      <span id="split" style={{ margin: '10px' }}>
        |
      </span>
      {book.publisher}
      <span id="split" style={{ margin: '10px' }}>
        |
      </span>
      <span>
        {book.pubDate.slice(0, 4)}년{book.pubDate.slice(4, 6)}월
        {book.pubDate.slice(6, 8)}일
      </span>
      <br /> <br />
      {book.description}
    </div>
  );
};

export default BookDescription;
