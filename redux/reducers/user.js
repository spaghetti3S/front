const loginUser = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      return [...action.data];
    case 'LOGIN_USER_FAILURE':
      return [...state, action.error];
    default:
      return state;
  }
};

export default loginUser;
