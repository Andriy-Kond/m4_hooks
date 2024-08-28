import { createRef, useEffect, useRef, useState } from "react";

import searchAPI from "../../services/searchAPI";
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import Loader from "../Loader";
import { ImageGalleryList } from "./ImageGallery.styled";
import { Notify } from "notiflix";

Notify.init({
  timeout: 3000,
  clickToClose: true,
  cssAnimationStyle: "from-right",
});

function ImageFinder({ query }) {
  const loadMoreBtnRef = createRef(); // Додавання посилання на кнопку "Load More"
  const remainsItems = useRef(); // підрахунок зображень, що залишились за певним запитом

  const [imagesList, setImagesList] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Прокрутка вниз, якщо додані нові зображення, або показується loading
    loadMoreBtnRef.current &&
      loadMoreBtnRef.current.scrollIntoView({
        behavior: "smooth",
      });
  }, [imagesList, isLoading, loadMoreBtnRef]);

  useEffect(() => {
    if (query === "") {
      // Зупинка виконання при першому рендері
      return;
    }

    const onSearchImage = async () => {
      setIsLoading(true);

      try {
        const { hits, totalHits } = await searchAPI.fetchImage(query, page);

        if (totalHits === 0) {
          Notify.info(`Sorry we not found any images with this request`);
          return;
        }

        if (page === 1) {
          setImagesList([...hits]);

          remainsItems.current = totalHits - hits.length;
          Notify.success(`We found ${totalHits} images!`, { timeout: 2000 });
          return;
        } else {
          setImagesList(prevImagesList => [...prevImagesList, ...hits]);
          remainsItems.current -= hits.length;
        }

        remainsItems.current === 0 &&
          Notify.info(`It's all that we have by this request.`);
      } catch (error) {
        Notify.failure(`Error: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    onSearchImage();
  }, [page, query]);

  const loadMoreBtn = () => {
    setPage(prevPage => prevPage.page + 1);
  };

  // const remainsItems = totalHits - imagesList.length;
  const isDisabledLoadMoreBtn = remainsItems === 0;

  return (
    <>
      <ImageGalleryList>
        {imagesList.map(image => (
          <ImageGalleryItem image={image} key={image.id} />
        ))}
      </ImageGalleryList>

      {isLoading && <Loader />}

      {imagesList.length > 0 && (
        <Button
          onLoadMore={loadMoreBtn}
          isDisabledLoadMoreBtn={isDisabledLoadMoreBtn}
          ref={loadMoreBtnRef}
        />
      )}
    </>
  );
}

export default ImageFinder;
