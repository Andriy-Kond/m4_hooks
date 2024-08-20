import { useEffect } from "react";
import { Backdrop, Button, ModalWindow } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalPortal = document.querySelector("#root-modal");

function Modal({ toggleModal, children }) {
  useEffect(() => {
    const handleKeydownEsc = e => {
      // console.log("Modal >> e.code:::", e.code);
      e.code === "Escape" && toggleModal();
    };

    window.addEventListener("keydown", handleKeydownEsc);
    return () => {
      window.removeEventListener("keydown", handleKeydownEsc);
    };
  }, [toggleModal]);

  const handleBackdropClick = e =>
    e.target === e.currentTarget && toggleModal();

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        {children}
        <Button type="button" onClick={toggleModal}>
          Close modal!
        </Button>
      </ModalWindow>
    </Backdrop>,
    modalPortal,
    // або замість modalPortal так: document.querySelector("#root-modal"),
  );
}

export default Modal;
