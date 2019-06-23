import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import Redirect from '../router/Redirect';


function App() {
  return (
    <div>
    <Nav/>
    <Redirect/>
    <Footer/>
    </div>
  );
}

export default App;
