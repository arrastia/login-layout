import React from "react";

import styles from "./Header.module.scss";

import logo from "logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <a
        className={styles.link}
        href="https://arrastia.me"
        target="_blank"
        rel="noopener noreferrer"
      >
        Arrastia
      </a>
    </header>
  );
};
