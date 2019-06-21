import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function One(props) {
  return(
    <div className="col-6" >
      <div className="card">
        <img src={props.linkanh} alt=" aggd"/>
        <div className="card-body">
          <h4 className="card-title">{props.tieude}</h4>
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  )

}

class Two extends Component {
  render() {
    return (
      <div className="col-4" >
      <div className="card">
        <img src={this.props.linkanh} alt=" aggd"/>
        <div className="card-body">
          <h4 className="card-title">{this.props.tieude}</h4>
          <p className="card-text"></p>
        </div>
      </div>
    </div>
    );
  }
}


class App extends Component {
  render(){
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
      </header>
      <div className="container">
        <div className="row">
           <One linkanh="https://img.thuthuatphanmem.vn/uploads/2018/09/24/anh-doremon-yeu_054126296.jpg" tieude=" anh doremon"/>
           <One  linkanh="https://data.whicdn.com/images/269231315/large.jpg" tieude=" anh doremon 2"/>
           <Two linkanh="https://i.ytimg.com/vi/Gs15UNNVggk/hqdefault.jpg" tieude="vd cach 2 anh doremon"/>
        </div>
      </div>
     
    </div>
  );
  }
  
}



export default App;
