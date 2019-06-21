import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const a1 = "Ney";
class App1 extends Component {
  render() {
    return (
      <div>
        <h3>toi la : {a1}</h3>
        <div className="form-check">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" name id defaultValue="checkedValue" defaultChecked />
          Display value
        </label>
      </div>
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
        <App1/>
      </header>
    </div>
  );
}

export default App;
