import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/topmenu/TopMenu';
import Header from './Component/Header/Header';


function App() {
  return (
    <div className="App">
        <TopMenu/>
        <Header/>
    </div>
  );
}

export default App;
