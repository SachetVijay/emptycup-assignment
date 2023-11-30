import React from "react";
import styles from "../styles/Rectangle.module.css";
import Image from "next/image";

const Rectangle = ({ data,allData, setData,index,altRect,id }) => {
  const rectangleClass = altRect ? `${styles.altRect} ${styles.rectangle}` : styles.rectangle;

  const clickedShortlisted = ()=>{
    const a = allData;
    a[index].shortlisted = !a[index].shortlisted;
    setData([...a]);
  }

  const returnStar = ()=>{
    let full = Math.floor(data.star);
    let half = Math.ceil(data.star) - full;
    let empty = 5 - full - half;
    let a = [];
    for(let i =0;i<full;i++){
      a.push(<img src="images/star_fill.svg" alt="detail-rating" />)
    }
    for(let i =0;i<half;i++){
      a.push(<img src="images/star_half_fill.svg" alt="detail-rating" />)
    }
    for(let i =0;i<empty;i++){
      a.push(<img src="images/star_blank.svg" alt="detail-rating" />)
    }
    return a;
  }
  return (
      <>
        <div id={id} className={rectangleClass}>
          <div className={styles.leftDetails}>
            <div className={styles.detail}>
              <div className={styles.detailName}>{data.name}</div>
              <div className={styles.detailRating}>
                {returnStar().map((res,index)=>{
                  return (
                      res
                  )
                })}
              </div>
              <div className={styles.detailDescription}>
                {data.detailDis}
              </div>
              <div className={styles.highlights}>
                <div className={styles.keyValue}>
                  <div className={styles.number}>{data.projects}</div>
                  <div className={styles.tag}>Projects</div>
                </div>
                <div className={styles.keyValue}>
                  <div className={styles.number}>{data.years}</div>
                  <div className={styles.tag}>Years</div>
                </div>
                <div className={styles.keyValue}>
                  <div className={styles.number}>{data.price}</div>
                  <div className={styles.tag}>Price</div>
                </div>
              </div>
              <div className={styles.contact}>
                <p className={styles.cNumber}>
                  {data.phone1}
                </p>
                <p className={styles.cNumber}>
                  {data.phone2}
                </p>
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
                <div className={styles.rCont} onClick={clickedShortlisted} >
                  <img src="images/shortlist.svg" alt="Shortlist" />
                  <p>{data.shortlisted==0 ? "Shortlist" : "ShortListed"}</p>
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
