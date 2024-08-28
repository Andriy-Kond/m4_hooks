import { useState } from "react";
import { Item, ItemImage } from "./ImageGalleryItem.styled";

import ModalWindow from "../Modal";

function ImageGalleryItem({ image }) {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleShowImage = () => {
    console.log("виклик toggleShowImage");
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  console.log("ImageGalleryItem >> isShowModal:::", isShowModal);
  return (
    <>
      <Item className="gallery-item">
        <ItemImage
          src={image.webformatURL}
          alt={image.tags}
          style={{ height: 100 }}
          onClick={toggleShowImage}
        />
      </Item>

      {isShowModal && (
        <ModalWindow image={image} toggleShowImage={toggleShowImage} />
      )}
    </>
  );
}

export default ImageGalleryItem;

// import "basiclightbox/dist/basicLightbox.min.css";
// $basicLightbox__background: rgba(0, 0, 0, 0.8); // Background color
// $basicLightbox__zIndex: 1000; // Stack order
// $basicLightbox__duration: 0.4s; // Transition duration
// $basicLightbox__timing: ease; // Transition timing

// Мало би працювати, але чомусь маю безкінечне створення модальних вікон якщо додаю сюди цю функцію. В класах все працювало нормально.
// Але не використання цієї функції приводить до того, що треба клікати по тому самому зображенню двічі для того що б воно відкрилось знову (якщо було закрито по кліку на бекдроп) - скидається isShowModal в false і знову у true

// import { useEffect, useRef } from "react";
// import * as basicLightbox from "basiclightbox";
// import "basiclightbox/src/styles/main.scss";

// import { Overlay, ModalIns } from "./Modal.styled";

// function ModalWindow({ image, toggleShowImage }) {
//   const instance = basicLightbox.create(
//     `
//     <${Overlay}>
//     <${ModalIns}>
//     <img src=${image.largeImageURL} alt=${image.tags} />
//     </${ModalIns}>
//     </${Overlay}>
//     `,
//     {
//       onClose: () => {
//         toggleShowImage();
//       },
//     },
//   );

//   instance.show();

//   const handleKeydownEsc = e => {
//     if (e.code === "Escape") {
//       instance.close();
//     }
//   };
//   useEffect(() => {

//     window.addEventListener("keydown", handleKeydownEsc);

//     return () => {
//       window.removeEventListener("keydown", handleKeydownEsc);
//     };
//   }, []);

//   return null;
// }

// export default ModalWindow;
