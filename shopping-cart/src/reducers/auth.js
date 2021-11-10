import { register, login, fetchCurrentUser } from "../API";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  token: null,
};

const REGISTER_BEGIN = 'REGISTER_BEGIN'; 
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_ERROR = 'REGISTER_ERROR'; 

const LOGIN_BEGIN = 'LOGIN_BEGIN'; 
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

export const FETCH_CURRENT_USER_BEGIN = 'FETCH_CURRENT_USER_BEGIN';
export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS';
export const FETCH_CURRENT_USER_FAILURE = 'FETCH_CURRENT_USER_FAILURE';

export const LOGOUT = 'LOGOUT';

export const registerSuccess = (token) => {
  return { type: REGISTER_SUCCESS, payload: token };
}

export const registerFailure = () => {
  return { type: REGISTER_ERROR, payload: null };
}

export const registerAction = (body) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_BEGIN, payload: null });
    return register(body).then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
    }).catch(error => {
      throw(error);
    });
  }
}

export const loginSuccess = (token) => {
  return { type: LOGIN_SUCCESS, payload: token };
}

export const loginFailure = () => {
  return { type: LOGIN_ERROR, payload: null };
}

export const loginAction = (body) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_BEGIN, payload: null });
    return login(body).then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    }).catch(error => {
      throw(error);
    });
  }
}

export const fetchLoggedInUserAction = () => {
  return (dispatch) => {

    dispatch({ type: FETCH_CURRENT_USER_BEGIN, payload: null });
    return fetchCurrentUser()
      .then(res => {
        dispatch({ type: FETCH_CURRENT_USER_SUCCESS, payload: res.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_CURRENT_USER_FAILURE, payload: null });
        throw(error);
      });
  }
}

export const logoutAction = () => {
  return { type: LOGOUT, payload: null };
}

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_BEGIN:
    case LOGIN_BEGIN:
    case FETCH_CURRENT_USER_BEGIN:
      return { ...state };
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload);
      return {
        ...state,
        loading: false,
        token: payload,
        isAuthenticated: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload);
      return {
        ...state,
        loading: false,
        token: payload,
        isAuthenticated: true,
      };
    case FETCH_CURRENT_USER_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true, user: payload };
    case LOGOUT:
      localStorage.removeItem('token');
      return { ...state, isAuthenticated: false, user: null,token: null };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case FETCH_CURRENT_USER_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
