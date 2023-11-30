// components/NavBar.js

import React from "react";
import styles from "../styles/NavBar.module.css";

const NavBar = ({fShortlisted,setFShortlisted}) => {
    const altTogShortListed = ()=>{
        setFShortlisted(!fShortlisted);
    }
    const trueTogShortListed = ()=>{
        setFShortlisted(0);
    }
  return (
    <nav className={styles.navBar}>
      <div className={styles.navItem} style={{cursor : "pointer"}} onClick={trueTogShortListed} >
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
      <div className={styles.navItem} style={{cursor : "pointer"}} onClick={altTogShortListed} ><img src="/images/shortlisted.svg" alt="Location" /></div>
      <div className={styles.navItem}><img src="/images/sort.svg" alt="Location" /></div>
    </nav>
  );
};

export default NavBar;
