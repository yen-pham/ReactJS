import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/topmenu/TopMenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="App">
        <TopMenu/>
        <Header/>
        <Content vitri="order-lg-2" anh="img/01.jpg" tieude="For those about to rock..." trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Content  anh="img/02.jpg" tieude="We salute you!" trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Content vitri="order-lg-2" anh="img/03.jpg" tieude="Let there be rock!" trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Footer/>
    </div>
  );
}

export default App;
