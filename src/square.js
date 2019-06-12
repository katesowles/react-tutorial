import React, { useContext } from "react";
import styled from "styled-components";
import { HandleSquareClick } from "./context";

const StyledSquare = styled.button`
  background: #fff;
  background-color: ${props => (props.combo ? "#eee" : "transparent")};
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  &:focus {
    outline: none;
    background: #ddd;
  }
`;

export function Square(props) {
  const handleClick = useContext(HandleSquareClick);
  const { index, combo, value } = props;

  return (
    <StyledSquare
      combo={combo && combo.indexOf(index) !== -1}
      onClick={() => handleClick(index)}
    >
      {value}
    </StyledSquare>
  );
}

export default Square;
