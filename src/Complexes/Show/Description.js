import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import styled from "styled-components";

const Description = styled.section`
  padding-top: 2rem;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
`;

const Heading = styled.h3`
  margin: 0;
  font-family: "Philosopher", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.13;
  color: #3e4247;
`;

const Text = styled.p`
  font-family: "Fira Sans";
  font-size: 1rem;
  line-height: 1.56;
  text-align: left;
  color: #3e4247;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const TextLast = styled.p`
  margin-top: 0rem;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: 1.56;
  color: #3e4247;
`;
export default () => {
  return (
    <Description>
      <Grid>
        <Row>
          <Col xs={2}>
            <Heading>Описание</Heading>
          </Col>
          <Col xs={10}>
            <Text>
              ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля.
              Территория разделена на три зоны: жилой район, центральный стадион
              «Динамо» и большой спортивный парк.
            </Text>
            <Text>
              Жилой район — это 13 корпусов: апартаменты, штаб-квартира
              «Динамо», отель «Hyatt Regency Moscow» и четыре современных
              бизнес-центра. На территории — рестораны, спа-комплекс,
              фитнес-центр, химчистка, аптеки, магазины и отделения банков. В
              каждом корпусе работает консьерж и круглосуточная охрана. Для
              жителей оборудованы технические помещения под хранение колясок и
              велосипедов, комнаты для домашних животных и уютные вестибюли с
              мягкими креслами для встреч с друзьями и соседями.
            </Text>
            <Text>
              Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились
              музей, торгово-развлекательный комплекс, подземная парковка для
              гостей и две крупные спортивные арены. Жизнь квартала
              сосредоточена в этой зоне: здесь можно сходить на концерт или
              фестиваль,поболеть за любимую команду и купить новую рубашку в
              торговом комплексе.
            </Text>
            <TextLast>
              Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и
              Отдыха. Здесь каждый найдет занятие: для детей оборудованы игровые
              зоны, для подростков — спортивные площадки на открытом воздухе,
              для взрослых — велосипедные дорожки и зоны отдыха, где можно
              подышать свежим воздухом во время рабочего перерыва.
            </TextLast>
          </Col>
        </Row>
      </Grid>
    </Description>
  );
};
