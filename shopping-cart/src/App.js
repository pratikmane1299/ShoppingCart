import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import GlobalStyle from './globalStyle';
import Header from './components/Header';

import ShoppingCartApp from "./components/ShoppingCartApp";
import Login from './components/Login';
import Register from './components/Register';

import { fetchLoggedInUserAction, logoutAction } from './reducers';

function App({
  isAuthenticated,
  loading,
  fetchLoggedInUserAction,
  logoutAction,
}) {
  useEffect(() => {
    if (isAuthenticated) fetchLoggedInUserAction();
  }, [isAuthenticated, fetchLoggedInUserAction]);

  if (loading) {
    return <p>Please Wait...</p>;
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header
        loading={loading}
        isAuthenticated={isAuthenticated}
        onLogout={(e) => {
          e.preventDefault();
          logoutAction();
        }}
      />
      <Routes>
        <Route path="/" element={<ShoppingCartApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

function mapStateToProps(store) {
  return {
    isAuthenticated: store.auth.isAuthenticated,
    loading: store.auth.loading,
  };
}

export default connect(mapStateToProps, {
  fetchLoggedInUserAction,
  logoutAction,
})(App);
