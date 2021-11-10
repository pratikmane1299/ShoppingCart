import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import {
  registerAction, registerFailure,
} from '../../reducers/';

import {
  RegisterContainer,
  RegisterBox,
  RegisterBoxTop,
  RegisterBoxMiddle,
  InputWrapper,
  RegisterBoxBottom,
} from "./style";

function Register({ isAuthenticated, registerAction, registerFailure }) {
  const [registerForm, setRegisterFrom] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/" />
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setRegisterFrom({
      ...registerForm,
      [name]: value,
    });
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await registerAction(registerForm);
      setLoading(false);
    } catch (error) {
      registerFailure();
      console.log(error.response);
      setLoading(false);
      toast.error(error.response.data.message);
    }
  }

  return (
    <RegisterContainer>
      <RegisterBox>
        <RegisterBoxTop>Register Page</RegisterBoxTop>
        <RegisterBoxMiddle>
          <form onSubmit={handleOnSubmit}>
            <InputWrapper>
              <label>First Name</label>
              <input
                name="firstName"
                id="firstName"
                type="text"
                value={registerForm.firstName}
                onChange={handleOnChange}
                style={{ width: "100%" }}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <label>Last Name</label>
              <input
                name="lastName"
                id="lastName"
                type="text"
                value={registerForm.lastName}
                onChange={handleOnChange}
                style={{ width: "100%" }}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <label>Email</label>
              <input
                name="email"
                id="email"
                type="email"
                value={registerForm.email}
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
                value={registerForm.password}
                onChange={handleOnChange}
                style={{ width: "100%" }}
                required
              />
            </InputWrapper>
            <button type="submit">
              {loading ? 'Please Wait...' : 'Register'}
            </button>
          </form>
        </RegisterBoxMiddle>
        <RegisterBoxBottom>
          <Link to="/login">Have an account ? Sign In</Link>
        </RegisterBoxBottom>
      </RegisterBox>
    </RegisterContainer>
  );
}

function mapStateToProps(store) {
  return {
    // loading: store.auth.loading,
    isAuthenticated: store.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps, { registerAction, registerFailure })(Register);
