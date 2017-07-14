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

const Body = styled(BodyClassName)`
  background: #ffffff;
`;

class Complex extends Component {
  constructor() {
    super();
    this.state = {
      complex: {},
      location: {},
      images: {},
      name: {},
      details: {},
      statistics: {}
    };
  }
  componentDidMount() {
    fetch(`https://yard.moscow/api/v1/complexes/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ complex: data, location: data });
      });
  }
  render() {
    console.log(this.state.complex);
    console.log(this.state.location.countryId);
    return (
      <Body>
        <div className="App">
          <ComplexHeadline
            name={this.state.complex.name}
            address={`${this.state.location.cianId}`}
          />
          <Gallery complex={this.state.complex} />
          <Info />
          <Specifications
            flat={1503}
            status="Квартиры"
            price={{ min: 8.4, max: 20.2 }}
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
