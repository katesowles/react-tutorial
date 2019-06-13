import React from "react";
import styled from "styled-components";

import Status from "./status";
import Steps from "./steps";

const StyledGameInfo = styled.div`
  margin-left: 20px;
`;

function Info(props) {
  const { status, stepNumber, history } = props;

  return (
    <StyledGameInfo>
      <Status status={status} />

      <Steps history={history} stepNumber={stepNumber} />
    </StyledGameInfo>
  );
}

export default Info;
