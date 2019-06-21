import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      trangthai : "khoitao"
    }
  }
 
 componentWillMount() {
   console.log('componentWillMount chayj roi');
 }
 componentDidMount() {
   console.log('component DidMount da chay roi');
 }
 
 
  
  render() {
    console.log('day la ham render da chay');
    return (
     
      <div className ="App">
        
      </div>
    );
  }
}

export default App;
