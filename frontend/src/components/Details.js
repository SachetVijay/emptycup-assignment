import React from "react";
import Rectangle from "./Rectangle";
import styles from "../styles/Details.module.css";
import Shortlisted from "@/components/shortlisted/Shortlisted";
import All from "@/components/shortlisted/All";

const Details = ({fShortlisted,data,setData}) => {
  return (
    <div className={styles.detailsContainer}>
        {
            fShortlisted ? (
                <>
                    <Shortlisted data={data} setData={setData}/>
                </>
            ) : (
                <>
                    <All data={data} setData={setData} />
                </>
            )
        }
      {/*<Rectangle*/}
      {/*  id="rect1"*/}
      {/*  altRect*/}
      {/*/>*/}
      {/*<Rectangle id="rect2" />*/}
    </div>
  );
};

export default Details;