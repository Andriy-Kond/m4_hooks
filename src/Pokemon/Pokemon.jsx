// endpoint: "https://pokeapi.co/api/v2/pokemon/{id or name}/" (https://pokeapi.co/docs/v2#pokemon)

import { Component } from "react";
// import { ToastContainer, Slide } from "react-toastify";

import PokemonForm from "./components/PokemonForm";
import PokemonInfo from "./components/PokemonInfo_MACHINE_STATES";

class Pokemon extends Component {
  state = { pokemonName: "" };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <div>
        {/* <ToastContainer autoClose={2000} transition={Slide} /> */}
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    );
  }
}

export default Pokemon;
