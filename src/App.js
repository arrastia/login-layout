import React from "react";

import styles from "./App.module.scss";

import { Header } from "interfaces/.components/Header";

export const App = () => {
  return (
    <div className={styles.App}>
      <Header />
    </div>
  );
};
