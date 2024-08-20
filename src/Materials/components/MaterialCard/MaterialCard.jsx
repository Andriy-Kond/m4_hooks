import EditCard from "../EditCard";
import { Component } from "react";

class MaterialCard extends Component {
  state = { isOpenEditCard: false };

  toggleModal = () => {
    this.setState(prevState => ({ isOpenEditCard: !prevState.isOpenEditCard }));
  };

  render() {
    const { material, deleteMaterial, updateMaterial } = this.props;
    const { id, title, link } = material;
    const { isOpenEditCard } = this.state;

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

        <button
          type="button"
          // onClick={() => {
          //   this.setState({ isOpenEditCard: true });
          //   updateMaterial({ ...material, title: Date.now() });
          // }}
          onClick={this.toggleModal}>
          EDIT
        </button>
        {isOpenEditCard && (
          <EditCard
            toggleModal={this.toggleModal}
            updateMaterial={updateMaterial}
            material={material}
          />
        )}
      </>
    );
  }
}

export default MaterialCard;
