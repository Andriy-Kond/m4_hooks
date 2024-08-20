// import MaterialCard from "./components/MaterialCard";

import MaterialCard from "../MaterialCard";

const MaterialsList = ({ materials, ...transitProps }) => {
  // Можна прокидувати як {...transitProps}, але тоді не видно які саме пропси прокидуються.
  // {...transitProps} замість цього:
  // deleteMaterial={deleteMaterial} updateMaterial={updateMaterial}

  return (
    <ul>
      {materials.map(material => {
        const { id, title, link } = material;

        return (
          <li key={id}>
            <MaterialCard material={material} {...transitProps} />
            <hr />
          </li>
        );
      })}
    </ul>
  );
};

export default MaterialsList;
