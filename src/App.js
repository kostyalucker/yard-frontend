import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import "./style.css";
import "./complex-page.css";
>>>>>>> c71c2daabd995044b1376f4a7117d901de5b7316
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
