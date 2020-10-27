import styled from 'styled-components';

export const CartWrapper = styled.div`
  padding: 0.5rem 1rem;
  flex: 1;
`;

export const CartTitle = styled.span`
  font-size: 1rem;
`;


export const CartItemList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const EmpytCartMessage = styled.span`
  margin-top: 0.5rem;
  display: block;
  font-size: 1.5rem;
`;

export const CartTotalWrapper = styled.span`
  border-top: 1px solid rgba(0, 0, 0, 0.0975);
  padding: 0.5rem 0;
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
`;
