import React from "react";
import InsertionWritten from "./InsertionWritten.js";
import SelectionWritten from "./SelectionWritten.js";
import BubbleWritten from "./BubbleWritten.js";
import MergeWritten from "./MergeWritten.js";
import QuickWritten from "./QuickWritten.js";
import HeapWritten from "./HeapWritten.js";
import "./Description.css";

const Description = (props) => {
  return (
    <div className="Description">
      {props.algorithmNo === "0" && <BubbleWritten />}
      {props.algorithmNo === "1" && <SelectionWritten />}
      {props.algorithmNo === "2" && <InsertionWritten />}
      {props.algorithmNo === "3" && <MergeWritten />}
      {props.algorithmNo === "4" && <QuickWritten />}
      {props.algorithmNo === "5" && <HeapWritten />}
    </div>
  );
};
export default Description;
