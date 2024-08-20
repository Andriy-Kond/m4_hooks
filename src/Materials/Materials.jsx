import React, { Component } from "react";
import MaterialsForm from "./components/MaterialsForm";
import materialsAPI from "./services/materialsAPI";
import MaterialsList from "./components/MaterialsList";

class Materials extends Component {
  state = { materials: [], isLoading: false, error: null };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    try {
      const allMaterials = await materialsAPI.getMaterialsList();
      this.setState({ materials: allMaterials });
    } catch (error) {
      console.log("error componentDidMount :>> ", error);
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // componentDidUpdate(prevProps, prevState) {}

  addMaterial = async values => {
    // this.setState({ isLoading: true });
    try {
      const newMaterial = await materialsAPI.postMaterial(values);
      this.setState(prevState => ({
        materials: [...prevState.materials, newMaterial],
      }));
    } catch (error) {
      console.log("error addMaterial :>> ", error);
      this.setState({ error: error.message });
    } finally {
      // this.setState({ isLoading: false });
    }
  };

  deleteMaterial = async id => {
    try {
      await materialsAPI.deleteMaterial(id);
      this.setState(prevState => {
        return {
          materials: prevState.materials.filter(material => material.id !== id),
        };
      });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  updateMaterial = async materialFields => {
    await materialsAPI.updateMaterial(materialFields);
    this.setState(prevProps => {
      return {
        materials: prevProps.materials.map(material => {
          return material.id === materialFields.id ? materialFields : material;
        }),
      };
    });
  };

  render() {
    const { isLoading, materials, error } = this.state;

    return (
      <div>
        <MaterialsForm onSubmit={this.addMaterial} isLoading={isLoading} />

        {isLoading ? (
          // <p>Завантажую</p>
          "LOADING"
        ) : (
          <MaterialsList
            materials={materials}
            deleteMaterial={this.deleteMaterial}
            updateMaterial={this.updateMaterial}
          />
        )}

        {error && <p>От халепа! Сервер повідомив про цю помилку: {error}</p>}
      </div>
    );
  }
}

export default Materials;
