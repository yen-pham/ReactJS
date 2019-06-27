import React, { Component } from 'react';
import './App.css';
import {noteData} from './firebaseConnect';
import * as firebase from 'firebase';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class App extends Component {
  render() {
    console.log(noteData);
    return (
      <div className="App ">
      <Nav/>
      <div className="contaner m-5">
         <div className="row">
           <NoteList/>
           <NoteForm/>
         </div>
      </div>
    </div>
    );
  }
}

export default App;
