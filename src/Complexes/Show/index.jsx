import React, { Component } from 'react';
import styled from 'styled-components';
import BodyClassName from 'react-body-classname';
import ComplexHeadline from './ComplexHeadline';
import Gallery from './Gallery';
import Info from './Info';
import Specifications from './Specifications';
import Description from './Description';
import Infrastructure from './Infrastructure';
import { getApi } from '../../Api';

const Body = styled(BodyClassName)`
  background: #ffffff;
`;

class Complex extends Component {
  constructor() {
    super();
    this.state = { complex: {} };
  }

  componentDidMount() {
    const complexSlug = this.props.match.params.slug;
    getApi(`complexes/${complexSlug}`).then((json) => {
      this.setState({
        complex: json,
      });
    });
  }
  render() {
    const location = this.state.complex.location || {};
    const details = this.state.complex.details || {};
    const images = this.state.complex.images || [];
    const statistics = this.state.complex.statistics || {};
    const description = this.state.complex.description;
    const amenities = this.state.complex.amenities || {};

    const { street, house, subLocalityName, postalCode } = location || {};
    const { architect } = details || {};
    return (
      <Body>
        <div className="App">
          <ComplexHeadline
            name={this.state.complex.name}
            address={subLocalityName}
            street={street}
            house={house}
            postalCode={postalCode}
          />
          <Gallery images={images} />
          <Info
            count={statistics.propertiesCount}
            architect={architect}
            images={images}
          />
          <Specifications complex={this.state.complex} />
          <Description complex={description} />
          <Infrastructure complex={amenities} />
          {/* <Offers />
          <Guide /> */}
        </div>
      </Body>
    );
  }
}

export default Complex;
