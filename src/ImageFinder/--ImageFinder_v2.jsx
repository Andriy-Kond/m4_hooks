import { useState } from "react";
import { Container } from "./ImageFinder.styled";
import ImageGalleryV2 from "./components/ImageGallery/ImageGallery_v2";
import SearchBar from "./components/SearchBar";

// В цьому варіанті є проблема - важко відслідкувати коли була натиснута кнопка SearchFormBtn (у SearchBar), а коли loadMoreBtn у ImageGalleryV2. А без цього важко писати useEffect для обробки події - коли page установити ===1 і як робити новий запит по тому самому запиту.

function ImageFinder() {
  const [query, setQuery] = useState("");

  return (
    <Container>
      <SearchBar onSetQuery={() => setQuery(query)} />
      <ImageGalleryV2 query={query} />
    </Container>
  );
}

export default ImageFinder;
