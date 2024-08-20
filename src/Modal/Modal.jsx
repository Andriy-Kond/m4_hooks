import React, { Component } from "react";
import { Backdrop, Button, ModalWindow } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalPortal = document.querySelector("#root-modal");
class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeydownEsc);
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydownEsc);
  }

  handleKeydownEsc = e => {
    // console.log("Modal >> e.code:::", e.code);
    if (e.code === "Escape") {
      this.props.toggleModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalWindow>
          {this.props.children}
          <Button type="button" onClick={this.props.toggleModal}>
            close modal
          </Button>
        </ModalWindow>
      </Backdrop>,
      modalPortal,
      // або замість modalPortal так: document.querySelector("#root-modal"),
    );
  }
}

export default Modal;
