import React, { Component } from 'react';
import './style.css';
import './complex-page.css';
import './App.css';

import Header from './Header.js';
import Develop from './Develop.js';
import Contact from './Contact.js';
import Card from './Card.js';
import Footer from './Footer.js';
import ComplexHeadline from './ComplexHeadline.js';
import Gallery from './Gallery.js';
import Info from './Info.js';
import Specifications from './Specifications.js';
import Description from './Description.js';
import Infrastructure from './Infrastructure.js';
import Offers from './Offers.js';
import Guide from './Guide.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Develop />
        <Contact />
        <Card />
        <Footer />
        <Header />
        <ComplexHeadline />
        <Gallery />
        <Info />
        <Specifications />
        <Description />
        <Infrastructure />
        <Offers />
        <Guide />
        <Footer />
      </div>
    );
  }
}

export default App;
