import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      hienThiForm : false,
      data : DataUser
    }
  }
  checkConnect = () => {
    alert("ket noi duoc roi nhe");
  }

  doiTrangThai =() =>{
    this.setState({
      hienThiForm : !this.state.hienThiForm
    });
  }
  
  render() {
    return (
      <div>
      <Header/>
      <div className="container">
            <div className="row">
              <Search  checkConnectProps ={()=>this.checkConnect()} ketNoi = {() => this.doiTrangThai()} hienThiForm = {this.state.hienThiForm} />
              <TableData dataUserProps ={this.state.data} />
              <AddUser hienThiForm = {this.state.hienThiForm}/>
            </div>
      </div>
    </div>
    );
  }
}
export default App;
