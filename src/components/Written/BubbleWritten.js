import React from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "./Description.css";

const MARKDOWN_TEXT = `
\`\`\`
def Bubble_Sort(A[],n):
  for i in range(n, 1):      #First loop from n - 1
    for j in range(1, i-1):  #Second loop from 1 - i-1
      if A[j] > A[j+1]:
        swap A[j] and A[j+1]
`;

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function (code) {
    return hljs.highlightAuto(code, ["python"]).value;
  },
});

const BubbleWritten = (props) => {
  return (
    <React.Fragment>
      <ul>
        <li>
          Bubble sort is an in-place comparison-based sorting algorithm. Here, a
          subarray is maintained which is always sorted.
        </li>
        <li>
          In this algorithm, each pair of adjacent items are compared and
          swapped if they are not in intended order. So in each iteration, the
          maximum (or minimum) value from unsorted list reaches its correct
          position.
        </li>
        <li>It is too slow and impractical in most situations.</li>
        <li>
          It is popular in computer graphics for its capability in detecting
          very small errors (like swap of just two elements) in almost sorted
          arrays.
        </li>
        <li>
          Time Complexity - O(N<sup>2</sup>) (N - Size of the Array)
        </li>
        <li>Space Complexity - O(1)</li>
      </ul>
      <h3>Implementation</h3>
      <div
        className="code"
        dangerouslySetInnerHTML={{ __html: marked(MARKDOWN_TEXT) }}
      />
    </React.Fragment>
  );
};
export default BubbleWritten;
