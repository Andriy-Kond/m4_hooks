import axios from "axios";

axios.defaults.baseURL = "https://66a9f9b6613eced4eba7096c.mockapi.io";

const postMaterial = async values => {
  const newMaterial = await axios.post(`materials/`, values);
  return newMaterial.data;
};

const getMaterialsList = async () => {
  const materialsList = await axios.get(`materials/`);

  return materialsList.data;
};

const deleteMaterial = async materialId => {
  const deletedMaterial = await axios.delete(`materials/${materialId}`);

  return deletedMaterial.data;
};

const updateMaterial = async materialFields => {
  const updatedMaterial = await axios.put(
    `materials/${materialFields.id}`,
    materialFields,
  );

  return updatedMaterial.data;
};

const MaterialsAPI = {
  postMaterial,
  getMaterialsList,
  deleteMaterial,
  updateMaterial,
};

export default MaterialsAPI;
