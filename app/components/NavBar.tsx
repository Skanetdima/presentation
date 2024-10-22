import React from "react";
import styles from "../styles.module.css";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link href="/">home</Link>
      <Link href="/shop">shop</Link>
      <Link href="/about">about</Link>
    </nav>
  );
};
