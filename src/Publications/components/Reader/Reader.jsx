import Controls from "../Controls";
import Progress from "../Progress";
import Publication from "../Publication";
import { useEffect, useState } from "react";

const LS_KEY = "publication_reader_progressIndex";

function Reader({ items }) {
  const [publicationIndex, setPublicationIndex] = useState(0);

  useEffect(() => {
    // я зробив так:
    // const index = Number(localStorage.getItem(LS_KEY));
    // setPublicationIndex(index ? index : 0);

    // Це спрацювало, бо якщо у LS нічого немає, то Number(null) приведеться до нуля (0).
    // Але це погано, бо може прийти і якийсь undefined, який дасть NaN. Тому треба робити перевірку на null(чи компонент не false):
    const savedStateIndex = localStorage.getItem(LS_KEY);
    if (savedStateIndex) {
      setPublicationIndex(Number(savedStateIndex));
    }
  }, []);

  useEffect(() => {
    setLocalStorage(publicationIndex);
  }, [publicationIndex]);

  const setLocalStorage = index => {
    localStorage.setItem(LS_KEY, JSON.stringify(index));
    // в цьому прикладі можна і без JSON.stringify, бо це просто число/рядок, а не масив чи об'єкт:
    // localStorage.setItem(LS_KEY, index);
    // Але для універсальності залишу так.
  };

  const changeIndex = step => {
    const itemsLength = items.length;

    if (publicationIndex === 0 && step === -1) {
      setPublicationIndex(itemsLength - 1);
      return;
    }

    if (publicationIndex === itemsLength - 1 && step === 1) {
      setPublicationIndex(0);
      return;
    }

    setPublicationIndex(publicationIndex + step);
  };

  const { title, text } = items[publicationIndex];
  const currentIndex = publicationIndex + 1;
  const totalItems = items.length;

  const prevBtnDisabled = publicationIndex === 0;
  const nextBtnDisabled = currentIndex === totalItems;

  return (
    <div>
      <Controls
        changeIndex={changeIndex}
        // Якщо треба робити неактивними кнопки, при досягненні крайніх значень у публікаціях:
        prevBtnDisabled={prevBtnDisabled}
        nextBtnDisabled={nextBtnDisabled}
      />
      <Progress currentIndex={currentIndex} totalItems={totalItems} />
      <Publication title={title} text={text} />
    </div>
  );
}

export default Reader;
