import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';

class App extends Component {
  showEditForm  = () => {
    if(this.props.isEdit){
      return <NoteForm getData ={(item) => this.addData(item)}/>
    }
  }
  render() {
    return (
      <div className="App ">
      <Nav/>
      <div className="contaner m-5">
         <div className="row">
           <NoteList/>
           {this.showEditForm()}
         </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({type:'CHANGE_EDIT_STATUS'})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

