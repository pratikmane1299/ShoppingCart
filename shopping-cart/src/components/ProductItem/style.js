import styled from 'styled-components';

export const ProductWrapper = styled.div`
  margin: 0.5rem;
  position: relative;
  cursor: pointer;
  transition: 0.5s all ease-in;
  flex-basis: calc(32% - 6px);
`;

export const ProductImageWrapper = styled.div`
  height: 250px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ProductInfo = styled.div`
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductName = styled.h3`
  font-size: 0.96rem;
  font-weight: 500;
`;

export const ProductPrice = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const AddToCartBtn = styled.button`
  padding: 0.4rem;
  outline: none;
  text-transform: uppercase;
  background-color: #65a00f;
  border: 1px solid #65a00f;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

`;
