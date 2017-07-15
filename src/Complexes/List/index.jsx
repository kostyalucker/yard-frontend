import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import background from '../../background.png';
import Develop from './Develop';
import Contact from './Contact';
import Card from './Card';

const ComplexesList = styled.main`
  background-color: #eaebf0;
  background-image: url(${background});
  background-repeat: repeat;
  background-size: 1.5%;
`;

class Complexes extends Component {
  constructor() {
    super();
    this.state = {
      complexes: [],
    };
  }
  componentDidMount() {
    const url = 'https://yard.moscow/api/v1/complexes?filter%5Bstate%5D=public';

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({ complexes: data.items });
      });
  }
  render() {
    return (
      <ComplexesList>
        <Develop />
        <Grid>
          <Contact />
          {this.state.complexes.map(item => <Card complex={item} key={item.id} />)}
        </Grid>
      </ComplexesList>
    );
  }
}

export default Complexes;
