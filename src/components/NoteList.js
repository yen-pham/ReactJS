import React, { Component } from 'react';
import NoteItem from './NoteItem';
import {noteData} from './firebaseConnect';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataFirebase :{}
    }
  }
  
  componentWillMount() {
    noteData.on('value',(notes)=>{
        var arrayData =[];
        notes.forEach(element => {
        const key =element.key;
        const noteTitle =element.val().noteTitle;
        const noteContent =element.val().noteContent;
        arrayData.push({
          id :key,
          noteTitle:noteTitle,
          noteContent:noteContent
        })
        this.setState(
          {
            dataFirebase:arrayData
          }
        );

      });
    })
  }
  
  getData  = () => {
    if(this.state.dataFirebase){
      console.log(this.state.dataFirebase);
    }
  }
    render() {
        return (
            <div className="col">
            <div id="accordianId" role="tablist" aria-multiselectable="true">
              <NoteItem/>
              <NoteItem/>
              <NoteItem/>
              <NoteItem/>
              
            </div>
          </div>
          
        );
    }
}

export default NoteList;