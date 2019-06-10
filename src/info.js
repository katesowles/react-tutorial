import React from "react";
import styled from "styled-components";

import Status from "./status";
import Steps from "./steps";

const StyledGameInfo = styled.div`
  margin-left: 20px;
`;

function Info(props) {
  const { status, stepNumber, history, setStep, setNextPlayer } = props;

  return (
    <StyledGameInfo>
      <Status status={status} />

      <Steps
        history={history}
        stepNumber={stepNumber}
        setStep={setStep}
        setNextPlayer={setNextPlayer}
      />
    </StyledGameInfo>
  );
}

export default Info;
