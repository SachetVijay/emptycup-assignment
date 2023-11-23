import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.logoContainer} ${styles.headerC}`}>
        <img className={styles.logoImg} src="/images/logo.svg" alt="Logo" />
      </div>
      <div className={`${styles.companyName} ${styles.headerC}`}>EmptyCup</div>
      <div className={`${styles.menu} ${styles.headerC}`}>
        <img className={styles.dot} src="/images/threeDots.svg" alt="Menu" />
      </div>
    </header>
  );
};

export default Header;
