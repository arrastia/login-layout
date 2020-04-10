import React from "react";

import styles from "./App.module.scss";

import { Header } from "interfaces/.components/Header";
import { Login } from "interfaces/.components/Login";

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Login />
    </div>
  );
};
