import React from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "./Description.css";

const MARKDOWN_TEXT = `
\`\`\`
def Quick_Sort(A[],left, right):
  if left >= right:                  #If there is only one or no element
    return                            in the range
  pivot = Quick(A[], left, right)    #Function to find correct position of  
                                      pivot element (in O(N))
  Quick_Sort(A[], left, pivot-1)     #Sort left half of the array
  Quick_Sort(A[], pivot+1, right)    #Sort right half of the array
`;

marked.setOptions({
  langPrefix: "hljs language-",
  highlight: function (code) {
    return hljs.highlightAuto(code, ["python"]).value;
  },
});

const QuickWritten = (props) => {
  return (
    <React.Fragment>
      <ul>
        <li>
          Quick sort is a divide and conquer comparison-based sorting algorithm.
        </li>
        <li>
          A pivot element is selected from the array (Example: First element).
        </li>
        <li>
          While dividing the array, the pivot element should be positioned in
          such a way that elements less than pivot are kept on the left side and
          elements greater than pivot are on the right side of the pivot.
          <li>
            The left and right subarrays are also divided using the same
            approach. This process continues until each subarray contains a
            single element.
          </li>
        </li>
        <li>
          A well implemented Quick Sort generally outperforms both Merge Sort
          and Heap Sort.
        </li>
        <li>Time Complexity - O(Nlog(N)) (N - Size of the Array)</li>
        <li>Space Complexity - O(N) (Not an in-place algorithm)</li>
      </ul>
      <h3>Implementation</h3>
      <div
        className="code"
        dangerouslySetInnerHTML={{ __html: marked(MARKDOWN_TEXT) }}
      />
    </React.Fragment>
  );
};
export default QuickWritten;
