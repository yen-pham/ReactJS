import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import NewsDetail from './NewsDetail';


function App() {
  return (
    <div>
    <Nav/>
    {/* <Home/> */}
    {/* <News/> */}
    <NewsDetail/>
    <Footer/>
    </div>
  );
}

export default App;
