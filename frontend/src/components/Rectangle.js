// components/Rectangle.js

import React from "react";
import styles from "../styles/Rectangle.module.css";

const Rectangle = ({ id, altRect }) => {
  const rectangleClass = altRect ? styles.altRect : styles.rectangle;

  return (
    <div id={id} className={rectangleClass}>
      {/* Add content for the rectangle here */}
    </div>
  );
};

export default Rectangle;
