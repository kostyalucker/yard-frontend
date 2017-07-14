import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';

import ComplexHeadline from './ComplexHeadline';
import Gallery from './Gallery';
import Info from './Info';
import Specifications from './Specifications';
import Description from './Description';
import Infrastructure from './Infrastructure';
import Offers from './Offers';
import Guide from './Guide';

const Body = styled(BodyClassName) `
  background: #ffffff;
`;

class Complex extends Component {
  constructor() {
    super();
    this.state = {
      complex: [],
    };
  }
  componentDidMount() {
    fetch(`https://yard.moscow/api/v1/complexes/${this.props.match.params.id}`)
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ complex: json });
      });
  }
  render() {
    const location = this.state.complex.location || {};
    const details = this.state.complex.details || {};
    const statistics = this.state.complex.statistics || {};


    const { details: { builder = 'Группа «ПСН»' } = {} } = this.state.complex || {};
    const { street, house, subLocalityName } = location || {};
    const { architect } = details || {};
    const { propertiesCount } = statistics || {};
    return (
      <Body>
        <div className="App">
          <ComplexHeadline
            name={this.state.complex.name}
            address={subLocalityName}
            street={street}
            house={house}
          />
          <Gallery complex={this.state.complex} />
          <Info
            count={propertiesCount}
            architect={architect}
            builder={builder}
          />
          <Specifications
            flat={'нет данных'}
            status={3}
            price={{ min: 1, max: 2 }}
          />
          <Description />
          <Infrastructure />
          <Offers />
          <Guide />
        </div>
      </Body>
    );
  }
}

export default Complex;
