import React from "react";
import "components/Menu/Menu.scss";
import MenuItem from 'components/Menu/MenuItem'

type Props = {};

const Menu = (props: Props) => {
  return (
    <>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/shipping">Shipping</MenuItem>
      <MenuItem to="payment">Payment</MenuItem>
      <MenuItem to="/cart">Cart</MenuItem>
    </>
  );
};

export default Menu;
