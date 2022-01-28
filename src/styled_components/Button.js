// import React from "react";
import styled, { css } from "styled-components"

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: #fff;
  margin: 0 1em; 
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  ${props =>
    props.primary &&
    css`
      background-color: white;
      color: green;
      border-color: green;
      
    `};
`;

export default Button;
