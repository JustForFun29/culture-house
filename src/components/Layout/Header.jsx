import React from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" className={classes["logo-img"]} />
        <div className={classes["logo-name"]}>culture house.</div>
      </div>
      <nav className={classes.nav}>
        <ul className={classes.menu}>
          <li className={classes["menu-item"]}>
            <a href="#">Paintings</a>
          </li>
          <li className={classes["menu-item"]}>
            <a href="#">Drawings</a>
          </li>
          <li className={classes["menu-item"]}>
            <a href="#">Sculpture</a>
          </li>
          <li>
            <HeaderCartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
