import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import Redirect from '../router/Redirect';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Redirect/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
