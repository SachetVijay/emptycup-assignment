import React from "react";
import styles from "../styles/Rectangle.module.css";
import Image from "next/image";

const Rectangle = ({ id, altRect }) => {
  const rectangleClass = altRect ? `${styles.altRect} ${styles.rectangle}` : styles.rectangle;

  return (
      <>
        <div id={id} className={rectangleClass}>
          <div className={styles.leftDetails}>
            <div className={styles.detail}>
              <div className={styles.detailName}>Epic Designs</div>
              <div className={styles.detailRating}>
                <img src="images/star_fill.svg" alt="detail-rating" />
                <img src="images/star_fill.svg" alt="detail-rating" />
                <img src="images/star_half_fill.svg" alt="detail-rating" />
                <img src="images/star_blank.svg" alt="detail-rating" />
                <img src="images/star_blank.svg" alt="detail-rating" />
              </div>
              <div className={styles.detailDescription}>
                Passionate team of 4 designers working out of Bangalore with an experience of 4 years.
              </div>
              <div className={styles.highlights}>
                <div className={styles.keyValue}>
                  <div className={styles.number}>57</div>
                  <div className={styles.tag}>Projects</div>
                </div>
                <div className={styles.keyValue}>
                  <div className={styles.number}>8</div>
                  <div className={styles.tag}>Years</div>
                </div>
                <div className={styles.keyValue}>
                  <div className={styles.number}>$$</div>
                  <div className={styles.tag}>Price</div>
                </div>
              </div>
              <div className={styles.contact}>
                <p className={styles.cNumber}>+91 - 984532853</p>
                <p className={styles.cNumber}>+91 - 984532854</p>
              </div>
            </div>
          </div>
            <div className={styles.rightVertical}>
              <div className={styles.rightContent}>
                <div className={styles.rCont}>
                  <img src="images/arrow.svg" alt="Details" />
                  <p>Details</p>
                </div>
                <div className={styles.rCont}>
                  <img src="images/hide.svg" alt="Hide" />
                  <p>Hide</p>
                </div>
                <div className={styles.rCont}>
                  <img src="images/shortlist.svg" alt="Shortlist" />
                  <p>Shortlist</p>
                </div>
                <div className={styles.rCont}>
                  <img src="images/report.svg" alt="Report" />
                  <p>Report</p>
                </div>
              </div>
            </div>
        </div>
      </>
  );
};

export default Rectangle;
