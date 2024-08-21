import MaterialCard from "../MaterialCard";

const MaterialsList = ({ materials, ...transitProps }) => {
  // Можна прокидувати як {...transitProps}, але тоді не видно які саме пропси прокидуються.
  // {...transitProps} замість цього:
  // deleteMaterial={deleteMaterial} updateMaterial={updateMaterial}

  return (
    <ul>
      {materials.map(material => {
        const { id } = material;

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
