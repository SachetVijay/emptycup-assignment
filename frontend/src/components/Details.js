// components/Details.js

import React from "react";
import Rectangle from "./Rectangle";
import styles from "../styles/Details.module.css";

const Details = () => {
  return (
    <div className={styles.detailsContainer}>
      <Rectangle id="rect1" altRect />
      <Rectangle id="rect2" />
      {/* Add other rectangles as needed */}
    </div>
  );
};

export default Details;