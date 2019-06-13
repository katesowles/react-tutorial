import React, { Fragment, useState } from "react";
import styled from "styled-components";

import SortButton from "./sort";
import Moves from "./moves";

const StyledOrderedList = styled.ol`
  padding-left: 30px;
`;

function Steps(props) {
  const { history, stepNumber } = props;

  const [sortAscend, setSortDirection] = useState(true);

  return (
    <Fragment>
      <StyledOrderedList>
        <Moves
          history={history}
          stepNumber={stepNumber}
          sortAscend={sortAscend}
        />
      </StyledOrderedList>

      <SortButton sortAscend={sortAscend} setSortDirection={setSortDirection} />
    </Fragment>
  );
}

export default Steps;
