import React from "react";
import { NavBar } from "./NavBar";
import styles from "../styles.module.css";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <NavBar />
    </header>
  );
};
