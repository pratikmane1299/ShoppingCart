import React from 'react';

import CartItem from '../CartItem';

import {
  CartWrapper,
  CartTitle,
  CartItemList,
  EmpytCartMessage,
  CartTotalWrapper,
} from './style';

const Cart = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
}) => {
  return (
    <CartWrapper>
      <CartTitle>My Basket</CartTitle>
      {cartItems.length > 0 ? (
        <>
          <CartItemList>
            {cartItems.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                onIncreaseQuantity={() => increaseQuantity(item)}
                onDecreaseQuantity={() => decreaseQuantity(item)}
                onRemoveCartItem={() => removeCartItem(item)}
              />
            ))}
          </CartItemList>
          <CartTotalWrapper>
            Total &#8377;{" "}
            {cartItems.reduce((a, item) => a + item.price * item.quantity, 0)}
          </CartTotalWrapper>
        </>
      ) : (
        <EmpytCartMessage>Your basket is Empty</EmpytCartMessage>
      )}
    </CartWrapper>
  );
};

export default Cart;
