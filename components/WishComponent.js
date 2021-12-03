import React from 'react';

import BookImage from './BookImage';

const WishComponent = ({ isbn }) => {
  return (
    <div>
      <BookImage isbn={isbn} />
    </div>
  );
};

export default WishComponent;
