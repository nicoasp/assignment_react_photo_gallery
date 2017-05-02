import React, { Component } from "react";
import "../App.css";
import MainBody from './MainBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Photo Gallery</h2>
        </div>
        <MainBody />
      </div>
    );
  }
}

export default App;
