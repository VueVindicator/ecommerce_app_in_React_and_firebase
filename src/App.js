import React, { Component } from 'react';
import HomePage from './components/homepage.component';
import './App.css';

class App extends Component {
  constructor() {
    super();    
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
        <HomePage></HomePage>
      </div>
    )
  }
}

export default App;
