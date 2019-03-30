import React, { memo } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  display: flex;
  overflow: hidden;
  margin: 10px;
  padding: 12px 12px;
  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;
  color: #333;
  background-color: #dfe6e9;
  border: 0 none;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  justify-content: center;
  align-items: center;
  flex: 0 0 160px;
  box-shadow: 2px 5px 10px var(--color-smoke);

  &:hover {
    transition: all 150ms linear;

    opacity: 0.85;
  }

  &:active {
    transition: all 150ms linear;
    opacity: 0.75;
  }

  &:focus {
    outline: 1px dotted #959595;
    outline-offset: -4px;
  }
`;

export const Button = memo(function Button(props) {
  const { children, handleClick, isDisabled, id } = props;

  return (
    <StyledButton
      id={id}
      data-testid={id}
      onClick={handleClick}
      disabled={isDisabled}>
      {children}
    </StyledButton>
  );
});

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
