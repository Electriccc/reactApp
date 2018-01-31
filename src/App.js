import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RandColor from './RandColor.js';
import Input from './RandColor.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <RandColor color = "black" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
