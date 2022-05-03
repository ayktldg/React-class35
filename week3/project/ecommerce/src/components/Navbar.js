import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../style/Navbar.module.css";

const Navbar = () => {
  const location = useLocation().pathname;
  const [title, setTitle] = useState("Products");

  useEffect(() => {
    if (location === "/") {
      setTitle("Products");
    } else if (location === "/favourites") {
      setTitle("Favourites");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1>{title}</h1>
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
