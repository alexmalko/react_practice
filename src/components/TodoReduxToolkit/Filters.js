import React from "react";
import styled from "styled-components";

function Filters() {
  return (
    <StyleFilters>
      <p>all</p>
      <p>completed</p>
      <p>incompleted</p>
    </StyleFilters>
  );
}

export default Filters;

const StyleFilters = styled.div`
  display: flex;
  > p {
    margin-right: 20px;
    border-bottom: 1px solid black;
  }
`;
