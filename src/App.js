import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-heade0r">
        <img src={logo} className="App-logo" alt="logo" />
       <News/>
       {this.props.duLieu}
      </header>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    duLieu: state.num
  }
}
 export default connect(mapStateToProps)(App);
