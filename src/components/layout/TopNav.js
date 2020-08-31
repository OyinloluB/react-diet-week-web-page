import React from "react";
import Styles from "./topnav.module.css";

const TopNav = () => {
  return (
    <nav>
      <ul className={Styles.container}>
        <li>About us</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default TopNav;
