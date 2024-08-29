import { useState } from "react";
import { Item, ItemImage } from "./ImageGalleryItem.styled";

import ModalWindow from "../Modal";

function ImageGalleryItem({ image }) {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleShowImage = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

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
