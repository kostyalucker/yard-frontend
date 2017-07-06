import React, { Component } from 'react';
import './style.css';
import './styles.css';

import header from './header';
import develop from './develop';
import contact from './contact';
import card from './card';
import footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header />
        <develop />
        <contact />
        <card />
        <footer />
      </div>
    );
  }
}

export default App;
