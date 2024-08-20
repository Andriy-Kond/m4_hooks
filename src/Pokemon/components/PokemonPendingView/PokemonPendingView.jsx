import React, { useState } from "react";

import PokemonDataView from "../PokemonDataView";

import { Spinner, StyledSpinner } from "./PokemonPendingView.styled";
import pendingImage from "../../img/pending.gif";

function PokemonPendingView({ pokemonName }) {
  const [name] = useState(pokemonName);
  const [sprites] = useState({
    other: {
      "official-artwork": {
        front_default: pendingImage,
      },
    },
  });
  const [stats] = useState([]);

  return (
    <>
      <StyledSpinner>
        <Spinner size={32} />
        Завантажую...
      </StyledSpinner>

      {/* Skeleton */}
      <PokemonDataView pokemon={{ name, sprites, stats }} />
    </>
  );
}

export default PokemonPendingView;
