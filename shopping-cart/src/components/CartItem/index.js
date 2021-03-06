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

const CartItem = ({ 
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveCartItem,
}) => {
  return (
    <CartItemWrapper key={item.id}>
      <CartItemImageWrapper>
        <CartItemImage src={item.image_url} alt={item.name} />
      </CartItemImageWrapper>
      <CartItemDetails>
        <CartItemProductName>{item.name}</CartItemProductName>
        <CartPriceDetailsWrapper>
          <CartItemProductPrice>&#8377;{item.price} X </CartItemProductPrice>
          <IconBtn disabled={item.quantity <= 1} onClick={onDecreaseQuantity}>
            <FontAwesomeIcon icon={faMinus} />
          </IconBtn>
          <CartItemQty>{item.quantity}</CartItemQty>
          <IconBtn disabled={item.quantity >= 10} onClick={onIncreaseQuantity}>
            <FontAwesomeIcon icon={faPlus} />
          </IconBtn>
        </CartPriceDetailsWrapper>
      </CartItemDetails>
      <RemoveFromCartBtn onClick={onRemoveCartItem}>
        <FontAwesomeIcon icon={faTimes} />
      </RemoveFromCartBtn>
    </CartItemWrapper>
  );
};

export default CartItem;
