import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';




class App extends Component {
  thongBao = () =>{
    alert("ket noi thanh cong");
  }
  render() {
    return (
      <div>
      <Header/>
      <div className="container">
            <div className="row">
              <Search ketNoi = {() => this.thongBao()}/>
              <TableData/>
              <AddUser/>
            </div>
      </div>
    </div>
    );
  }
}
export default App;
