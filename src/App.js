import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Noidung from './Noidung';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      trangthai : "khoitao",
      trangThai2 :"khoi tao 2"
    }
  }
 
 componentWillMount() {
   console.log('componentWillMount chay roi');
 }
 componentDidMount() {
   console.log('component DidMount da chay roi');
 }
 shouldComponentUpdate(nextProps, nextState) {
  console.log('shouldComponentUpdate chay roi');
  return true;
 }
 componentWillUpdate(nextProps, nextState) {
  console.log('componentWillUpdate chay roi');
 }

 componentDidUpdate(prevProps, prevState) {
  console.log('componentDidUpdate chay roi');
 }
 
//  shouldComponentUpdate(next){}
//  componentWillUpdate(){}
//  componentDidUpdate(){}
 
 updateState =() => {
this.setState({
  trangthai :" trang thai duoc update"
});
}
  
  render() {
    console.log('day la ham render da chay');
    console.log(this.state.trangthai);
    return (
    
      <div className ="App">
         <Noidung ten={this.state.trangThai2}/>
        <button className="btn btn-primary" onClick={() => {this.updateState()}}>Click to update state</button>     
      </div>
    );
  }
}

export default App;
