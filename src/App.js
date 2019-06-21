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
        <div className="container">
        <div className="row pt-5">
           <Content vitri="order-lg-2" anh="img/01.jpg" tieude="For those about to rock..." trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Content vitri="order-lg-1" anh="img/02.jpg" tieude="We salute you!" trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Content vitri="order-lg-2" anh="img/03.jpg" tieude="Let there be rock!" trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Content vitri="order-lg-2" anh="img/01.jpg" tieude="For those about to rock..." trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Content vitri="order-lg-1" anh="img/02.jpg" tieude="We salute you!" trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Content vitri="order-lg-2" anh="img/03.jpg" tieude="Let there be rock!" trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Content vitri="order-lg-2" anh="img/01.jpg" tieude="For those about to rock..." trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Content vitri="order-lg-1" anh="img/02.jpg" tieude="We salute you!" trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        <Content vitri="order-lg-2" anh="img/03.jpg" tieude="Let there be rock!" trichdan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
        
        </div>
        </div>
       <Footer/>
    </div>
  );
}

export default App;
