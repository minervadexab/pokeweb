// src/actions/authActions.js
export const login = (username, password) => {
    return (dispatch) => {
      if (username === 'rayhanramdhani' && password === 'rayhan123') {
        dispatch({ type: 'LOGIN_SUCCESS' });
      } else {
        dispatch({ type: 'LOGIN_FAILURE' });
      }
    };
  };
  