import React from "react";

import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        className={styles.link}
        href="https://arrastia.me"
        target="_blank"
        rel="noopener noreferrer"
      >
        Arrastia
      </a>
    </div>
  );
};
