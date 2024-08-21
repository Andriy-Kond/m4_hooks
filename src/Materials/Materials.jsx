import { useEffect, useState } from "react";
import MaterialsForm from "./components/MaterialsForm";
import materialsAPI from "./services/materialsAPI";
import MaterialsList from "./components/MaterialsList";

import { Notify } from "notiflix/build/notiflix-notify-aio";

function Materials() {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      setIsLoading(true);
      try {
        const allMaterials = await materialsAPI.getMaterialsList();
        setMaterials(allMaterials);
      } catch (error) {
        setError(error.message);
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  const addMaterial = async values => {
    // this.setState({ isLoading: true });
    try {
      const newMaterial = await materialsAPI.postMaterial(values);
      setMaterials([newMaterial, ...materials]);
    } catch (error) {
      setError(error.message);
      Notify.failure(error.message);
    } finally {
      // this.setState({ isLoading: false });
    }
  };

  const deleteMaterial = async id => {
    try {
      await materialsAPI.deleteMaterial(id);
      setMaterials(materials.filter(material => material.id !== id));
    } catch (error) {
      setError(error.message);
      Notify.failure(error.message);
    }
  };

  const updateMaterial = async materialFields => {
    try {
      await materialsAPI.updateMaterial(materialFields);
      setMaterials(
        materials.map(material =>
          material.id === materialFields.id ? materialFields : material,
        ),
      );
    } catch (error) {
      setError(error.message);
      Notify.failure(error.message);
    }
  };

  return (
    <div>
      <MaterialsForm onSubmit={addMaterial} isLoading={isLoading} />

      {isLoading ? (
        // <p>Завантажую</p>
        "LOADING"
      ) : (
        <MaterialsList
          materials={materials}
          deleteMaterial={deleteMaterial}
          updateMaterial={updateMaterial}
        />
      )}

      {error && <p>От халепа! Сервер повідомив про цю помилку: {error}</p>}
    </div>
  );
}

export default Materials;
