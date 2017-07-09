import React from "react";
import developLogo from "../../compass-development-logo.svg";
import styled from "styled-components";

const Develop = styled.section`
  padding: 5rem 0;
  background-color: #161616;
  display: flex;
  justify-content: center;
`;

export default () => {
  return (
    <Develop>
      <img src={developLogo} alt="Logo" />
    </Develop>
  );
};
