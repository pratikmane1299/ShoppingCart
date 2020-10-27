import styled from 'styled-components';

export const CartItemWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const CartItemImageWrapper = styled.div`
  width: 60px;
  height: 60px;
`;

export const CartItemImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const CartItemDetails = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;

export const CartItemProductName = styled.span`
  font-size: 0.96rem;
  word-wrap: break-word;
  color: #333;
`;

export const CartPriceDetailsWrapper = styled.div`
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
`;

export const CartItemProductPrice = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  align-self: center;
`;

export const CartItemQty = styled.span`
  margin-left: 0.5rem;
`;

export const IconBtn = styled.button`
  margin-left: 0.5rem;
  padding: 0.6rem;
  font-size: 0.8rem;
  background-color: #2b2b2b;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const RemoveFromCartBtn = styled.button`
  padding: 0.8rem;
  margin-top: 0.7rem;
  margin-left: auto;
  /* width: 90px; */
  outline: none;
  text-align: center;
  text-transform: uppercase;
  background-color: #c70a0a;
  border: none;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
