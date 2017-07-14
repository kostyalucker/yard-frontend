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
    };
  }
  componentDidMount() {
    fetch(`https://yard.moscow/api/v1/complexes/${this.props.match.params.id}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ complex: data });
      });
  }
  render() {
    return (<Body>
      <div className="App">
        <ComplexHeadline complex={this.state.complex} />
        <Gallery complex={this.state.complex} />
        <Info complex={this.state.complex} />
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

