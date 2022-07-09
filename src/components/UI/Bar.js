import React from "react";
import styles from "./Bar.module.css";

const Bar = (props) => {
  const barwidth = props.width + "%";
  return (
    <div
      className={styles.Bar}
      style={{ width: barwidth, backgroundColor: props.colour }}
    />
  );
};

export default Bar;
