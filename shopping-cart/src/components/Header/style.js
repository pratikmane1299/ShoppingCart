import styled from 'styled-components';

import { Container } from '../../globalStyle';

export const HeaderWrapper = styled(Container)`
  z-index: 1;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: #131212;
`;
