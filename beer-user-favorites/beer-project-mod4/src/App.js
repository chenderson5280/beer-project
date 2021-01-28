import React, { Component } from "react";
import BeerPage from './containers/BeerPage.js';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeerPage />
      </div>
    );
  }
}

export default App;