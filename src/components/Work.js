import React, { useState } from "react";
import Filter from "./Filter.js";
import Description from "./Written/Description.js";
import Button from "./UI/Button.js";
import InsertionSort from "./Methods/InsertionSort.js";
import SelectionSort from "./Methods/SelectionSort.js";
import BubbleSort from "./Methods/BubbleSort.js";
import MergeSort from "./Methods/MergeSort.js";
import QuickSort from "./Methods/QuickSort.js";
import HeapSort from "./Methods/HeapSort.js";
import styles from "./Work.module.css";

const Work = (props) => {
  const [start, sortfunction] = useState(false);
  const [reset, resetfunction] = useState(false);
  const [isSorted, checkfunction] = useState(false);
  const [algorithm, algofunction] = useState("0");

  const AlgorithmSelected = (num) => {
    algofunction(num);
  };

  const onSortHandler = () => {
    sortfunction(true);
  };

  const onResetHandler = () => {
    sortfunction(false);
    resetfunction(true);
    checkfunction(false);
  };

  return (
    <div className={styles.Main}>
      <div className={styles.Filter}>
        <Filter algorithmno={AlgorithmSelected} disabled={start} />
      </div>

      <div className={styles.Written}>
        <Description algorithmNo={algorithm} />
      </div>

      <div className={styles.button}>
        <Button click={onSortHandler} className={styles.sort} disabled={start}>
          SORT
        </Button>
        <Button
          click={onResetHandler}
          className={styles.reset}
          disabled={!isSorted}
        >
          RESET
        </Button>
      </div>

      <div className={styles.outer}>
        {algorithm === "0" && (
          <BubbleSort
            resethandle={resetfunction}
            checkhandle={checkfunction}
            sort={start}
            reset={reset}
          />
        )}
        {algorithm === "1" && (
          <SelectionSort
            resethandle={resetfunction}
            checkhandle={checkfunction}
            sort={start}
            reset={reset}
          />
        )}
        {algorithm === "2" && (
          <InsertionSort
            resethandle={resetfunction}
            checkhandle={checkfunction}
            sort={start}
            reset={reset}
          />
        )}
        {algorithm === "3" && (
          <MergeSort
            resethandle={resetfunction}
            checkhandle={checkfunction}
            sort={start}
            reset={reset}
          />
        )}
        {algorithm === "4" && (
          <QuickSort
            resethandle={resetfunction}
            checkhandle={checkfunction}
            sort={start}
            reset={reset}
          />
        )}
        {algorithm === "5" && (
          <HeapSort
            resethandle={resetfunction}
            checkhandle={checkfunction}
            sort={start}
            reset={reset}
          />
        )}
      </div>
    </div>
  );
};

export default Work;
