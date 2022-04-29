import React from "react";
import { Link } from "react-router-dom";
import styles from "../style/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h1>Products</h1>
      <nav className={styles.nav}>
        <Link className={styles.navItem} to="/">
          Products
        </Link>
        <Link className={styles.navItem} to="/favourites">
          Favourites
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
