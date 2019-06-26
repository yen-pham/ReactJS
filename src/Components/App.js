import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json'

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      hienThiForm : false,
      data : DataUser,
      searchText : '',
      editUserStatus :false
    }
  }
  getTextSearch = (dl) => {
    this.setState({
      searchText :dl
    });
  }


  doiTrangThai =() =>{
    this.setState({
      hienThiForm : !this.state.hienThiForm
    });
  }

  getNewUSerData  = (name,tel,Permission) => {
      console.log("ket noi ok ok!");
      var item ={};
      item.id = uuidv1();
      item.name = name;
      item.tel = tel;
      item.Permission = Permission;
      var items = this.state.data;
      items.push(item);
      this.setState({
        data:items
      });
      console.log(this.state.data);
  }
  
  editUser  = (user) => {
    console.log("da ket noi thanh cong voi edit ");
    console.log(user);
  }

  render() {
    var ketQua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText)!= -1)ketQua.push(item);
      
    });
    return (
      <div>
      <Header/>
      <div className="container">
            <div className="row">
              <Search editUserStatus={this.state.editUserStatus} checkConnectProps ={(dl)=>this.getTextSearch(dl)} ketNoi = {() => this.doiTrangThai()} hienThiForm = {this.state.hienThiForm} />
              <TableData dataUserProps ={ketQua}  editFun ={(user) => this.editUser(user)} />
              <AddUser data ={ (name,tel,Permission) => this.getNewUSerData(name,tel,Permission)} hienThiForm = {this.state.hienThiForm}/>
            </div>
      </div>
    </div>
    );
  }
}
export default App;
