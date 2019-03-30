import React, { memo } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const StyledPokemonCard = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const PokemonCard = memo(function PokemonCard(props) {
  const { name } = props.pokemon;
  const { front_default: image } = props.pokemon.sprites;
  return (
    <StyledPokemonCard>
      <h1>{name}</h1>
      <ul>
        {props.pokemon.types.map(({ type }) => (
          <span key={type.name}>{type.name}</span>
        ))}
      </ul>
      <img
        src={`${image}`}
        alt={`My chonky fave ${name}`}
        title={`My chonky fave ${name}`}
      />
    </StyledPokemonCard>
  );
});

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string,
        }),
      })
    ),
  }),
};
