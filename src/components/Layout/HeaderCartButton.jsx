import React from "react";
import cart from "../../assets/cart.svg";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <React.Fragment>
      <a href="#">
        <img src={cart} alt="cart" className={classes.icon}></img>
      </a>
    </React.Fragment>
  );
};

export default HeaderCartButton;
