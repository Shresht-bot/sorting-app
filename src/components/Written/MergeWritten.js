import React from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "./Description.css";

const MARKDOWN_TEXT = `
\`\`\`
def Merge_Sort(A[],left, right):
  if left >= right:              #If there is only one or no element
    return                        in the range
  mid = (left+right)/2
  Merge_Sort(A[], left, mid)     #Sort left half of the array
  Merge_Sort(A[], mid+1, right)  #Sort right half of the array
  Merge(left, mid, right)        #Function to merge the two sorted halves (in O(N)) 
`;

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function (code) {
    return hljs.highlightAuto(code, ["python"]).value;
  },
});

const MergeWritten = (props) => {
  return (
    <React.Fragment>
      <ul>
        <li>
          Merge sort is a divide and conquer comparison-based sorting algorithm.
        </li>
        <li>
          The algorithm divides the array into two subarrays. These subarrays
          are sorted recursively with merge sort again. Then the subarrays are
          merged to get the final sorted array. Insertion sort can be used with
          Merge Sort for smaller subarrays (&lt; 10 elements).
        </li>
        <li>It is not an in-place sorting algorithm.</li>
        <li>
          Merge Sort is often the best choice for sorting a linked list-In this
          situation it requires only O(1) extra space.
        </li>
        <li>Time Complexity - O(Nlog(N)) (N - Size of the Array)</li>
        <li>Space Complexity - O(N)</li>
      </ul>
      <h3>Implementation</h3>
      <div
        className="code"
        dangerouslySetInnerHTML={{ __html: marked(MARKDOWN_TEXT) }}
      />
    </React.Fragment>
  );
};
export default MergeWritten;
