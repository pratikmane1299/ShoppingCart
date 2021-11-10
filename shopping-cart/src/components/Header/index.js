import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper, Title } from './style';

const Header = ({
  loading,
  isAuthenticated,
  onLogout,
}) => {
  return (
    <HeaderWrapper>
      <Title>Shopping Cart</Title>
      <div style={{width: '200px', display: 'flex', justifyContent: isAuthenticated ? 'flex-end' : 'space-between'}}>
        {isAuthenticated ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </HeaderWrapper>
  )
}

export default Header
