import React from "react";
import Bar from "./Bar";
import styles from "./Chart.module.css";

const Chart = (props) => {
  return (
    <div className={styles.outer_box}>
      <div className={styles.inner_box}>
        {props.array.map((element) => (
          <Bar
            key={element}
            width={props.dict[element][0]}
            colour={props.dict[element][1]}
          />
        ))}
      </div>
    </div>
  );
};
export default Chart;
