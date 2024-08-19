import errorImage from "../img/error.gif";

function PokemonErrorView({ message }) {
  return (
    <div>
      <p>{message}</p>
      <img src={errorImage} alt="error" width={240} />
    </div>
  );
}

export default PokemonErrorView;
