import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
  form, button, input, textarea, label, select {
    display: block;
  } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 30px;
  padding-left: 30px;
`;

export default GlobalStyle;
