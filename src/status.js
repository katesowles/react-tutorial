import React from "react";
import styled from "styled-components";

const StyledStatus = styled.div`
  margin-bottom: 10px;
`;

function Status(props) {
  const { status } = props;

  return <StyledStatus> {status} </StyledStatus>;
}

export default Status;
