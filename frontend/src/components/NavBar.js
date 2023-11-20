// components/NavBar.js

import React from "react";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navItem}>
        <img src="/images/contacts.svg" alt="Contacts" />
      </div>
      <div className={styles.navItem}>
        <img src="/images/gallery.svg" alt="Gallery" />
      </div>
      <div className={styles.navItem}>
        <img src="/images/location.svg" alt="Location" />
      </div>
      {/* Add other nav items as needed */}
      <div className={styles.navItem}>{/* Add another nav item */}</div>
      <div className={styles.navItem}>{/* Add another nav item */}</div>
      <div className={styles.navItem}>{/* Add another nav item */}</div>
    </nav>
  );
};

export default NavBar;
