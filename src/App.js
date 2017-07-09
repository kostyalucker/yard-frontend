import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import List from "./Complexes/List";
import Show from "./Complexes/Show";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={List} />
          <Route path="/complex" component={Show} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
