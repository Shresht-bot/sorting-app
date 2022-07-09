import React from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "./Description.css";

const MARKDOWN_TEXT = `
\`\`\`
def Heap_Sort(A[]):
  #Build a min-heap or a max-heap using array elements
  for i in range(n, 1):      #Loop from n to 1
    swap A[0] and A[i]
    heapify(0, i)            #Function to heapify the heap with one less element
`;

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function (code) {
    return hljs.highlightAuto(code, ["python"]).value;
  },
});

const HeapWritten = (props) => {
  return (
    <React.Fragment>
      <ul>
        <li>
          Heap sort is a comparison-based sorting algorithm based on Binary Heap
          data structure.
        </li>
        <li>
          Heap sort processes the elements by creating the min-heap or max-heap
          using the elements of the array. Min-heap or max-heap represents the
          ordering of array in which the root element represents the minimum or
          maximum element of the array.
        </li>
        <li>
          In each iteration, the root element is swapped with the last element
          of unsorted list and the heap is heapified excluding the last element.
        </li>
        <li>
          Heapify is the process of reshaping the heap data structure (to ensure
          the maximum or minimum element is at the top).
        </li>
        <li>Time Complexity - O(Nlog(N)) (N - Size of the Array)</li>
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
export default HeapWritten;
