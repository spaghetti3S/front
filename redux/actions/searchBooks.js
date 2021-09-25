export const SEARCH_BOOKS_REQUEST = 'SEARCH_BOOKS_REQUEST';
export const SEARCH_BOOKS_SUCCESS = 'SEARCH_BOOKS_SUCCESS';
export const SEARCH_BOOKS_FAILURE = 'SEARCH_BOOKS_FAILURE ';

export const searchBooks = (data) => {
  return {
    type: SEARCH_BOOKS_REQUEST,
    data,
  };
};
