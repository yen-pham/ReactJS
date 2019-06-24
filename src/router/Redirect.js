import React, { Component } from 'react';
import News from '../components/News';
import NewsDetail from '../components/NewsDetail';
import Home from '../components/Home';
import Contact from '../components/Contact';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";

class Redirect extends Component {
    render() {
        return (
           
                 <div>
                    <Route path="/home" exact component={Home} />
                    <Route path="/news/" component={News} />
                    <Route path="/news-detail/:slug.:id.html" component={NewsDetail} />
                    <Route path="/contact/" component={Contact} />
                 </div>
           
        );
    }
}

export default Redirect;