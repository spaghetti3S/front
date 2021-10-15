const mainCategory = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_MAIN_BOOKS_SUCCESS':
      return [...action.data];
    case 'SEARCH_MAIN_BOOKS_FAILURE':
      return [...state, action.error];
    default:
      return state;
  }
};

export default mainCategory;
