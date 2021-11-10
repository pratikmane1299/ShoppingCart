import styled from 'styled-components';

import { Container } from '../../globalStyle';

export const LoginContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBox = styled.div`
    margin-top: 4rem;
    width: 300px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const LoginBoxTop = styled.div`
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    text-align: center
`;

export const LoginBoxMiddle = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

export const LoginBoxBottom = styled.div`
    width: 100%;
    padding: 1rem;
    border-top: 1px solid #eee;
    text-align: center;
`;

export const InputWrapper = styled.div`
    width: 100%;
    margin-bottom: 0.5rem;
`;
