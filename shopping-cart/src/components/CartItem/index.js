import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  CartItemWrapper,
  CartItemImageWrapper,
  CartItemImage,
  CartItemDetails,
  CartItemProductName,
  CartPriceDetailsWrapper,
  CartItemProductPrice,
  CartItemQty,
  IconBtn,
  RemoveFromCartBtn,
} from "./style";

const CartItem = ({ item }) => {
  return (
    <CartItemWrapper key={item.id}>
      <CartItemImageWrapper>
        <CartItemImage src={item.image} alt={item.name} />
      </CartItemImageWrapper>
      <CartItemDetails>
        <CartItemProductName>{item.name}</CartItemProductName>
        <CartPriceDetailsWrapper>
          <CartItemProductPrice>&#8377;{item.price} X </CartItemProductPrice>
          <IconBtn>
            <FontAwesomeIcon icon={faMinus} />
          </IconBtn>
          <CartItemQty>{item.quantity}</CartItemQty>
          <IconBtn>
            <FontAwesomeIcon icon={faPlus} />
          </IconBtn>
        </CartPriceDetailsWrapper>
      </CartItemDetails>
      <RemoveFromCartBtn>
        <FontAwesomeIcon icon={faTimes} />
      </RemoveFromCartBtn>
    </CartItemWrapper>
  );
};

export default CartItem;