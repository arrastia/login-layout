import React from "react";

import styles from "./Header.module.scss";

import logo from "logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
    </header>
  );
};
