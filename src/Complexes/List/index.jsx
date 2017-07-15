import React, { Component } from 'react';
import { Grid } from 'react-flexbox-grid';
import styled from 'styled-components';
import background from '../../background.png';
import Develop from './Develop';
import Contact from './Contact';
import Card from './Card';
import { getApi, filterPublic } from '../../Api';

const ComplexesList = styled.main`
  background-color: #eaebf0;
  background-image: url(${background});
  background-repeat: repeat;
  background-size: 1.5%;
`;

class Complexes extends Component {
  constructor() {
    super();
    this.state = { complexes: [] };
  }

  componentDidMount() {
    getApi('complexes', filterPublic).then((json) => {
      this.setState({
        complexes: json.items,
      });
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
