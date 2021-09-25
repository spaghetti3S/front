const searchBooks = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_BOOKS_SUCCESS':
      return [...state, ...action.data];
    case 'SEARCH_BOOKS_FAILURE':
      return [...state, action.error];
    default:
      return state;
  }
};

export default searchBooks;
