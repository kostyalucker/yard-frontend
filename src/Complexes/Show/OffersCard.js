import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 1.5rem 2rem;
  background-color: white;
`;

const Heading = styled.h4`
  font-family: Philosopher, sans-serif;
  font-size: 1.25rem;
  margin: 0;
  font-weight: bold;
  line-height: 1.1;
  color: #3e4247;
`;

const Key = styled.small`
  display: block;
  margin: 0;
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.38;
  color: #a9afb6;
  font-family: "Fira Sans", sans-serif;
`;

const Value = styled.p`
  display: block;
  margin: 0;
  margin-top: 0.625rem;
  font-size: 1rem;
  line-height: 1.38;
  color: #3e4247;
  font-family: "Fira Sans", sans-serif;
`;

const Button = styled.button`
  text-align: center;
  font-size: 1rem;
  font-weight: lighter;
  font-family: "Fira Sans", sans-serif;
  display: block;
  padding: .7rem 2rem;
  margin: 0 auto;
  margin-top: 2.2rem;
  color: #ffffff;
  border-radius: 0.125rem;
  line-height: 1.0;
  background-color: #000;
  border: none;
  cursor: pointer;
`;

export default props =>
  <Card>
    <Heading>
      {props.rooms}-комнатные квартиры
    </Heading>
    <Key>Площадь</Key>
    <Value>
      от {props.size.min} до {props.size.max} м²
    </Value>
    <Key>Стоимость</Key>
    <Value>
      от {props.price.min} до {props.price.max} млн руб
    </Value>
    <Button>Посмотреть предложения</Button>
  </Card>;
