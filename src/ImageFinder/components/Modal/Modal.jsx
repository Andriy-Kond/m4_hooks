import { useEffect, useRef, useState } from "react";

import * as basicLightbox from "basiclightbox";
import "basiclightbox/src/styles/main.scss";
// import "basiclightbox/dist/basicLightbox.min.css";

import { Overlay, ModalIns } from "./Modal.styled";

// $basicLightbox__background: rgba(0, 0, 0, 0.8); // Background color
// $basicLightbox__zIndex: 1000; // Stack order
// $basicLightbox__duration: 0.4s; // Transition duration
// $basicLightbox__timing: ease; // Transition timing

function ModalWindow({ image, toggleShowImage }) {
  const isFirstRender = useRef(false);

  const [instance] = useState(
    basicLightbox.create(
      `
    <${Overlay}>
    <${ModalIns}>
    <img src=${image.largeImageURL} alt=${image.tags} />
    </${ModalIns}>
    </${Overlay}>
    `,
      {
        onClose: () => {
          toggleShowImage();
        },
      },
    ),
  );

  useEffect(() => {
    // ! basicLightbox на хуках працює непердбачувано - якщо переносити на хуки по правилах, то він робить або подвійний рендер елементу ModalWindow у DOM, або його безкінечний рендер навіть якщо у ModalWindow немає жодного useEffect, або не спрацьовує додатковий код в його onClose(). Хоча на класах все працює як треба.

    // Причина: чомусь instance.show() спрацьовує 2 рази при першому рендері ModalWindow, через що запускаються дві модалки. Навіть якщо в модалці немає ніякого useEffect. Тому довелось зробити такий костиль у вигляді перевірки першого рендеру у useEffect, щоб запустити instance.show() лише один раз.
    if (!isFirstRender.current) {
      isFirstRender.current = true;
      return;
    }

    instance.show();

    const handleKeydownEsc = e => {
      if (e.code === "Escape") {
        instance.close();
      }
    };

    window.addEventListener("keydown", handleKeydownEsc);

    return () => {
      window.removeEventListener("keydown", handleKeydownEsc);
    };
  }, [instance]);

  return null;
}

export default ModalWindow;
