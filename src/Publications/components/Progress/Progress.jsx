// import React, { Component } from "react";

// class Progress extends Component {
//   render() {
//     const { currentIndex, totalItems } = this.props;
//     return (
//       <p>
//         {currentIndex}/{totalItems}
//       </p>
//     );
//   }
// }

// export default Progress;

function Progress({ currentIndex, totalItems }) {
  return (
    <p>
      {currentIndex}/{totalItems}
    </p>
  );
}

export default Progress;
