import React from "react";
import CartIcon from "../cart-icon/cart-icon.component";

import CustomButton from "../custom-button/custom-button-component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
