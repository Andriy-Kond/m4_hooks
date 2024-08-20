// import React, { Component } from "react";

// class Publication extends Component {
//   render() {
//     const { title, text } = this.props;

//     return (
//       <article>
//         <h2>{title}</h2>
//         <p>{text}</p>
//       </article>
//     );
//   }
// }

// export default Publication;

function Publication({ title, text }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default Publication;
