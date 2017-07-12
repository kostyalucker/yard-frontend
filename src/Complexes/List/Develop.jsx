import React from 'react';
import styled from 'styled-components';
import developLogo from '../../compass-development-logo.svg';

const Develop = styled.section`
  padding: 5rem 0;
  background-color: #161616;
  display: flex;
  justify-content: center;
`;

export default () =>
  (<Develop>
    <img src={developLogo} alt="Logo" />
  </Develop>);
