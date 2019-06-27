import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {firebaseConnect} from './firebaseConnect';
import * as firebase from 'firebase';

class App extends Component {
  pushData  = () => {
    var connectData =firebase.database().ref('dataForNote');
    connectData.push({
      title :"Ghi chu so 3",
      content : "Noi dung ghi chu so 3"
    });
    console.log("ban vua them du lieu vao firebase");
  }
  deleteData  = (id) => {
    var connectData =firebase.database().ref('dataForNote');
    connectData.child(id).remove();
    console.log("ban vua xoa du lieu "+id);
  }
  render() {
    console.log(firebaseConnect);
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
        <button onClick ={() => this.pushData()}>Click vao day de them moi bang ham push</button>
        <hr/>
        <button onClick ={(id) => this.deleteData("-LiPJfVoicQCItvfprLN")}>Click vao day de xoa</button>
      </header>
    </div>
    );
  }
}

export default App;
