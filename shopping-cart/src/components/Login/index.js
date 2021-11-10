import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import {
  loginAction, loginFailure,
} from '../../reducers/';

import {
  LoginContainer,
  LoginBox,
  LoginBoxTop,
  LoginBoxMiddle,
  LoginBoxBottom,
  InputWrapper,
} from "./style";

function Login({
  // loading,
  isAuthenticated,
  loginAction,
  loginFailure,
}) {
  const [loginForm, setLoginFrom] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false); 

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setLoginFrom((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await loginAction(loginForm);
      setLoading(false);
    } catch (error) {
      loginFailure();
      console.log(error.response);
      setLoading(false);
      toast.error(error.response.data.message);
    }
  }

  return (
    <LoginContainer>
      <LoginBox>
        <LoginBoxTop>Login</LoginBoxTop>
        <LoginBoxMiddle>
          <form onSubmit={handleOnSubmit}>
            <InputWrapper>
              <label>Email</label>
              <input
                name="email"
                id="email"
                type="email"
                value={loginForm.email}
                onChange={handleOnChange}
                style={{ width: "100%" }}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <label>Password</label>
              <input
                name="password"
                id="password"
                type="password"
                value={loginForm.password}
                onChange={handleOnChange}
                style={{ width: "100%" }}
                required
              />
            </InputWrapper>
            <button>
              {loading ? 'Please Wait...' : 'Login'}
            </button>
          </form>
        </LoginBoxMiddle>
        <LoginBoxBottom>
          <Link to="/register">Don't have a account ? Create one</Link>
        </LoginBoxBottom>
      </LoginBox>
    </LoginContainer>
  );
}

function mapStateToProps(store) {
  return {
    // loading: store.auth.loading,
    isAuthenticated: store.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps, { loginAction, loginFailure })(Login);
