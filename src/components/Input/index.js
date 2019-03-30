import React, { memo, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledInput = styled.input`
  padding: 0.25rem;
  border: 2px solid #333333;
  border-radius: 5px;
  margin: 10px;
`;

export const Input = memo(function Input(props) {
  const { value, handleChange, id, label } = props;
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <StyledInput id={id} value={value} onChange={handleChange} />
    </Fragment>
  );
});

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
