import React from "react";
import developLogo from "../../compass-development-logo.svg";
import styled from "styled-components";

const Develop = styled.section`
  padding: 5rem;
  background-color: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 418.9px;
  height: 131px;
`;

export default () => {
  return (
    <Develop>
      <img src={developLogo} />
    </Develop>
  );
};
