import './App.css';
import React, { Component } from 'react';
import Settings from '../components/Settings.js';
import FetchButton from '../components/FetchButton.js';
import Questions from '../components/Questions.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Settings />
      </div>
    );
  }
}

export default App;
