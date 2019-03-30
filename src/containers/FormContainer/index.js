import React from "react";
import styled from "@emotion/styled";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import PropTypes from "prop-types";

const PokePickerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1f1f1;
  padding: 2rem;
`;

const PokePickerFormButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FormContainer = ({
  handleChange,
  handleMultiple,
  handleSubmit,
  isDisabled,
  searchInputValue,
}) => {
  return (
    <PokePickerForm onSubmit={e => e.preventDefault()}>
      <h1>Poké-picker</h1>
      <Input
        id="search-input"
        label="Search for a single Pokemon"
        handleChange={handleChange}
        value={searchInputValue}
      />
      <PokePickerFormButtonWrapper>
        <Button
          id="single-search-button"
          handleClick={handleSubmit}
          isDisabled={isDisabled}>
          Search
        </Button>
      </PokePickerFormButtonWrapper>
    </PokePickerForm>
  );
};

FormContainer.defaultProps = {
  isDisabled: true,
};

FormContainer.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  searchInputValue: PropTypes.string.isRequired,
};
