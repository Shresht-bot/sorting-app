import React from "react";
import "./Filter.module.css";

const Filter = (props) => {
  const dropdownHandler = (event) => {
    props.algorithmno(event.target.value);
  };
  return (
    <React.Fragment>
      <label> Select Algorithm:</label>
      <select onChange={dropdownHandler} disabled={props.disabled}>
        <option value="0">Bubble Sort</option>
        <option value="1">Selection Sort</option>
        <option value="2">Insertion Sort</option>
        <option value="3">Merge Sort</option>
        <option value="4">Quick Sort</option>
        <option value="5">Heap Sort</option>
      </select>
    </React.Fragment>
  );
};

export default Filter;
