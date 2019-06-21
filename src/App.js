// import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

function One(){
  return (
  <div>
    <h1>day la cach 1</h1>
    <h3>day la cach 1</h3>
    </div>
  ) ;
}

var Two = function(){
  return (
    <div>
      <h1>day la cach 2</h1>
      <h2>day la cach 2</h2>
      </div>
  );
}

var Three = () => (
      <div>
        <h1>day la cach 3</h1>
        <h2>day la cach 3</h2>
      </div>
      );
    
class Four extends Component {
  render() {
    return (
      <div>
         <button>React js component so 4</button>
      </div>
    );
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <One/>
        
      </header>
      <Two></Two>
      <Three/>
      <Four/>
    </div>
  );
}

export default App;
