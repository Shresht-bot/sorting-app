import React from "react";
import Button from "../UI/Button";
import styles from "./TutorialModal.module.css";

const TutorialModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} />
      <div className={styles.modal}>
        <h2>MEET THE VISUALIZER</h2>
        <div className={styles.content}>
          <p>
            A Sorting Algorithm is used to rearrange a given array or list
            elements according to a comparison operator on the elements. The
            comparison operator is used to decide the new order of elements in
            the respective data structure.
          </p>
          <p>
            This application visualizes various different sorting algorithms in
            action.
          </p>
          <p>
            Choose an algorithm from the Select Algorithm drop down menu. Click
            on Sort to see how that particular algorithm sorts the given
            elements in ascending order.
          </p>
        </div>
        <footer className={styles.actions}>
          <Button click={props.onConfirm} disabled={false}>
            Got It
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default TutorialModal;
