import React from "react";
import { marked } from "marked";
import hljs from "highlight.js";

const MARKDOWN_TEXT = `
\`\`\`
def Insertion_Sort(A[],n):
  for i in range(n):      #First loop from 1 - n
    for j in range(i, 1): #Second loop from i - 1
      if A[j] < A[j-1]:
        swap A[j] and A[j-1]
      else:
        break
`;

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function (code) {
    return hljs.highlightAuto(code, ["python"]).value;
  },
});

const InsertionWritten = (props) => {
  return (
    <React.Fragment>
      <ul>
        <li>
          Insertion sort is an in-place comparison-based sorting algorithm.
          Here, a subarray is maintained which is always sorted.
        </li>
        <li>
          In each iteration, it finds the correct position of the current
          element in the sorted array and moves it to that position. This is
          done by shifting all the elements, which are larger than the current
          element, in the sorted array to one position ahead.
        </li>
        <li>
          It is an Adaptive Algorithm-It speeds up when array is already
          substantially sorted.
        </li>
        <li>
          It is an Online Algorithm-It can sort an array as it receives items.
        </li>
        <li>
          Time Complexity - O(N<sup>2</sup>) (N - Size of the Array)
        </li>
        <li>Space Complexity - O(1)</li>
      </ul>
      <h3>ALGORITHM</h3>
      <div
        className="code"
        dangerouslySetInnerHTML={{ __html: marked(MARKDOWN_TEXT) }}
      />
    </React.Fragment>
  );
};
export default InsertionWritten;
