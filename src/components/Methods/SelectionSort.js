import React, { useEffect, useState } from "react";
import Chart from "../UI/Chart.js";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function Sort2(setCall, checkhandle) {
  let check = true;
  let index = 0;
  let minimum = 110;
  for (let i = 0; i < 40; i++) {
    minimum = 110;
    for (let j = i; j < 40; j++) {
      if (dict[sortedArray[j]][0] < minimum) {
        minimum = dict[sortedArray[j]][0];
        index = j;
      }
    }
    dict[sortedArray[index]][1] = "#7F8487";
    setCall(check);
    check = !check;
    await sleep(100);
    [sortedArray[i], sortedArray[index]] = [sortedArray[index], sortedArray[i]];
    setCall(i);
    check = !check;
    await sleep(100);
  }
  checkhandle(true);
}

const array = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
];

let dict = {
  0: [34, "white"],
  1: [45, "white"],
  2: [12, "white"],
  3: [65, "white"],
  4: [48, "white"],
  5: [86, "white"],
  6: [93, "white"],
  7: [58, "white"],
  8: [39, "white"],
  9: [29, "white"],
  10: [95, "white"],
  11: [39, "white"],
  12: [58, "white"],
  13: [49, "white"],
  14: [59, "white"],
  15: [23, "white"],
  16: [54, "white"],
  17: [68, "white"],
  18: [98, "white"],
  19: [43, "white"],
  20: [65, "white"],
  21: [23, "white"],
  22: [26, "white"],
  23: [65, "white"],
  24: [38, "white"],
  25: [85, "white"],
  26: [93, "white"],
  27: [39, "white"],
  28: [50, "white"],
  29: [59, "white"],
  30: [47, "white"],
  31: [89, "white"],
  32: [28, "white"],
  33: [78, "white"],
  34: [95, "white"],
  35: [23, "white"],
  36: [56, "white"],
  37: [63, "white"],
  38: [18, "white"],
  39: [10, "white"],
};

let sortedArray = [...array];
let flag = false;

const SelectionSort = (props) => {
  const renderhandler = useState(false);

  if (props.sort) {
    flag = true;
  }

  if (props.reset) {
    sortedArray = [...array];
    for (let i = 0; i < 40; i++) {
      dict[i][1] = "#FFFFFF";
    }
    flag = false;
    props.resethandle(false);
  }

  useEffect(() => {
    if (flag) {
      Sort2(renderhandler[1], props.checkhandle);
    }
    // eslint-disable-next-line
  }, [flag]);

  return <Chart array={sortedArray} dict={dict} />;
};

export default SelectionSort;
