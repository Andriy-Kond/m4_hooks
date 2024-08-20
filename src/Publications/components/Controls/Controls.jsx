// import React, { Component } from "react";

// class Controls extends Component {
//   render() {
//     const {
//       changeIndex,
//       // totalItems,
//       // publicationIndex,
//       // prevBtnDisabled,
//       // nextBtnDisabled,
//     } = this.props;

//     return (
//       <section>
//         <button
//           // disabled={publicationIndex === 0}
//           // disabled={prevBtnDisabled}
//           type="button"
//           onClick={() => {
//             changeIndex(-1);
//           }}>
//           Back
//         </button>
//         <button
//           // disabled={publicationIndex + 1 === totalItems}
//           // disabled={nextBtnDisabled}
//           type="button"
//           onClick={() => {
//             changeIndex(1);
//           }}>
//           Next
//         </button>
//       </section>
//     );
//   }
// }

// export default Controls;

function Controls({ changeIndex, prevBtnDisabled, nextBtnDisabled }) {
  return (
    <section>
      <button
        // disabled={prevBtnDisabled}
        type="button"
        onClick={() => {
          changeIndex(-1);
        }}>
        Back
      </button>
      <button
        type="button"
        // disabled={nextBtnDisabled}
        onClick={() => {
          changeIndex(1);
        }}>
        Next
      </button>
    </section>
  );
}

export default Controls;
