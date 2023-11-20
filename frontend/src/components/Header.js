import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logoImg} src="/images/logo.svg" alt="Logo" />
      </div>
      <div className={styles.companyName}>EmptyCup</div>
      <div className={styles.menu}>
        <img className={styles.dot} src="/images/threeDots.svg" alt="Menu" />
      </div>
    </header>
  );
};

export default Header;
