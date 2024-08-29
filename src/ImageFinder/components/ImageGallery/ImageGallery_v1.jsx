import ImageGalleryItem from "../ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styled";

function ImageGallery({ imagesList }) {
  return (
    <ImageGalleryList>
      {imagesList.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ImageGalleryList>
  );
}

export default ImageGallery;
