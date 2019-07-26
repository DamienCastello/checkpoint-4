import axios from 'axios';
import { LOGIN, LOGOUT, LOG_IN_ERROR } from '../types/auth'
import { baseUrlApi } from '../../ApiUrls'

export function login(email, password) {
  return async dispatch => {
    function onSuccess(response) {
      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;

      dispatch({ type: LOGIN, payload: response.data });
      return { response, status: 'success' };
    }
    function onError(error) {
      dispatch({ type: LOG_IN_ERROR, error });
      return { error, status: 'error' };
    }
    try {
      const response = await axios.post(`${baseUrlApi}/auth/signin`, { email, password });
      return onSuccess(response);
    }
    catch (err) {
      return onError(err);
    }
  };
};

export function logout() {
  axios.defaults.headers.common['Authorization'] = null;
  return {
    type: LOGOUT,
    payload: null
  }
};

export function signup(user) {

  return async dispatch => {

    function onSuccess(response) {

      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;

      dispatch({ type: LOGIN, payload: response.data });
      const res = { response, status: 'success' };
      return res;

    }

    function onError(error) {

      dispatch({ type: LOG_IN_ERROR, error });
      let status = "error";
      if (error.response.data.message === "Invitation code is invalid") {
        status = 'invalid_code'
      }
      return { error: error.response, status };

    }

    try {
      const formData = new FormData();
      formData.append('email', user.email)
      formData.append('password', user.password)


      const response = await axios.post(`${baseUrlApi}/auth/signup`, formData, {
        headers: {
          "Content-Type": 'multipart/form-data',
          "Accept": 'application/json'
        }
      });

      return onSuccess(response);

    }

    catch (err) {

      return onError(err);

    }

  };

};
