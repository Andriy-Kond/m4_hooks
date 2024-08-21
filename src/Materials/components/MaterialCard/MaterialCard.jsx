import EditCard from "../EditCard";
import { useState } from "react";

function MaterialCard({ material, deleteMaterial, updateMaterial }) {
  const [isOpenEditCard, setIsOpenEditCard] = useState(false);

  const toggleModal = () => {
    setIsOpenEditCard(!isOpenEditCard);
  };

  const { id, title, link } = material;

  return (
    <>
      <div>
        <p>
          <b>Title:</b> {title}
        </p>
        <p>
          <b>Link:</b> {link}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          deleteMaterial(id);
        }}>
        Delete
      </button>

      <button type="button" onClick={toggleModal}>
        EDIT
      </button>
      {isOpenEditCard && (
        <EditCard
          toggleModal={toggleModal}
          updateMaterial={updateMaterial}
          material={material}
        />
      )}
    </>
  );
}

export default MaterialCard;
