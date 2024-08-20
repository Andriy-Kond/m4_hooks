import Reader from "./components/Reader";
import publicationsList from "./database/publications.json";

function Publications() {
  return (
    <>
      <div>Hello</div>
      <Reader items={publicationsList} />
    </>
  );
}

export default Publications;
