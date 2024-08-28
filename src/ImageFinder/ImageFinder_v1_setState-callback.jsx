import { createRef, useEffect, useRef, useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import { Container } from "./ImageFinder.styled";
import ImageGalleryV1 from "./components/ImageGallery/ImageGallery_v1";
import SearchBar from "./components/SearchBar";
import searchAPI from "./services/searchAPI";
import Button from "./components/Button";
import Loader from "./components/Loader";

Notify.init({
  timeout: 3000,
  clickToClose: true,
  cssAnimationStyle: "from-right",
});

function ImageFinder() {
  const loadMoreBtnRef = createRef(); // Додавання посилання на кнопку "Load More"
  const remainsItems = useRef(); // підрахунок зображень, що залишились за певним запитом

  const [query, setQuery] = useState("");
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

      setTimeout(async () => {
        try {
          const result = await searchAPI.fetchImage(query, page);
          updateStates(result);
        } catch (error) {
          Notify.failure(`Error: ${error.message}`);
        } finally {
          setIsLoading(false);
        }
      }, 300);
    };

    // Функція для оновлення стану за результатами запиту на сервер
    const updateStates = ({ hits, totalHits }) => {
      if (totalHits === 0) {
        Notify.info(`Sorry we not found any images with this request`);
        return;
      }

      if (page === 1) {
        setImagesList([...hits]);

        remainsItems.current = totalHits - hits.length;
        Notify.success(`We found ${totalHits} images!`, { timeout: 2000 });
      } else {
        setImagesList(prevImagesList => [...prevImagesList, ...hits]);
        remainsItems.current -= hits.length;
      }

      remainsItems.current === 0 &&
        Notify.info(`It's all that we have by this request.`);
    };

    onSearchImage();
  }, [page, query]);

  // Дії при кліку на кнопку Search (новий пошук)
  const searchBtn = async query => {
    if (query.trim() === "") {
      Notify.info("Введіть хоч якийсь запит");
      return;
    }

    // Для того щоб йшов новий запит навіть якщо він той самий, що і попередній, тобто повторюється (page === 1, query - the same):
    setQuery("");

    setTimeout(() => {
      setPage(1);
      setImagesList([]);
      setQuery(query);
    }, 0);
    // Інакше треба вводити додатковий маркер, чи лічильник, чи замість useEffect викликати функцію onSearchImage при кліку і на searchBtn і на loadMoreBtn
  };

  // Дії при кліку на кнопку Load More (додавання сторінки до чинного пошуку)
  const loadMoreBtn = e => {
    e.target.blur(); // зняття фокусу з кнопки, щоб ховер знов працював.

    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <SearchBar onSetQuery={searchBtn} />
      <ImageGalleryV1 imagesList={imagesList} />

      {isLoading && <Loader />}

      {imagesList.length > 0 && (
        <Button
          onLoadMore={loadMoreBtn}
          isDisabledLoadMoreBtn={remainsItems.current === 0}
          ref={loadMoreBtnRef}
        />
      )}
    </Container>
  );
}

export default ImageFinder;
