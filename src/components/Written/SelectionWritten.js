import React from "react";
import { marked } from "marked";
import hljs from "highlight.js";

const MARKDOWN_TEXT = `
\`\`\`
def Selection_Sort(A[],n):
  for i in range(n):      #First loop from 1 - n
    min_val = A[i]
    index = i
    for j in range(i, n): #Second loop from i - n
      if A[j] < min_val:
        min_val = A[j]
        index = j
    swap A[i] and A[index]
`;

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function (code) {
    return hljs.highlightAuto(code, ["python"]).value;
  },
});

const SelectionWritten = (props) => {
  return (
    <React.Fragment>
      <ul>
        <li>
          Selection sort is an in-place comparison-based sorting algorithm.
          Here, a sublist is maintained which is always sorted.
        </li>
        <li>
          In each iteration it selects the smallest (or the largest) element
          from an unsorted list and places that element at the beginning of the
          unsorted list.
        </li>
        <li>
          It is particularly important and useful when auxiliary memory is
          limited.
        </li>
        <li>Selection Sort always outperforms Bubble Sort.</li>
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
export default SelectionWritten;
