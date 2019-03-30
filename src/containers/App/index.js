import React, { useState } from "react";
import { FormContainer } from "../FormContainer";
import { SinglePokemonContainer } from "../SinglePokemonContainer";
import * as AppStyles from "./index.styles";
import { Global, css } from "@emotion/core";

const GlobalStyles = css`
  html,
  body {
    background-color: #eb2f06;
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1920 - 300)));
  }
`;

const validateIsDisabled = inputValue => (inputValue === "" ? true : false);

const App = () => {
  const [searchInputValue, onSearchInputChange] = useState("");
  const [submittedValueState, onFormSubmit] = useState(null);
  const isDisabled = validateIsDisabled(searchInputValue);
  const handleChange = event => onSearchInputChange(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(searchInputValue);
  };

  return (
    <AppStyles.Layout className="App">
      <Global styles={GlobalStyles} />
      <FormContainer
        {...{
          handleChange,
          handleSubmit,
          isDisabled,
          searchInputValue,
        }}
      />
      <AppStyles.CharacterDisplay>
        {submittedValueState ? (
          <SinglePokemonContainer pokemonName={submittedValueState} />
        ) : null}
      </AppStyles.CharacterDisplay>
    </AppStyles.Layout>
  );
};

export default App;
