import React from "react";

import CartItem from "../CartItem";

import {
  CartWrapper,
  CartTitle,
  CartItemList,
  EmpytCartMessage,
  CartTotalWrapper,
} from "./style";

const Cart = ({
  cartItems,
  loading,
  increaseQuantity,
  decreaseQuantity,
  removeCartItem,
}) => {
  const renderCart = () => {
    if (loading) return <h3>Loading..., Please Wait!</h3>;
    if (cartItems.length > 0) {
      return (
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
      );
    } else {
      return <EmpytCartMessage>Your basket is Empty</EmpytCartMessage>;
    }
  };

  return (
    <CartWrapper>
      <CartTitle>My Basket</CartTitle>
      {renderCart()}
    </CartWrapper>
  );
};

export default Cart;
