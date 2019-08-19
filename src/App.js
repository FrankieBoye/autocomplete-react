import React, { Component } from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText';

class App extends Component {
  render () {
    return (
//app.js is main top level component
//import components module
//add module as html tag
    <div className="App">

    <AutoCompleteText />
    </div>
    );
  }
}

export default App;
