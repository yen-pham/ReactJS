import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Link ,NavLink} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">React-Router News</a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink  to="/home" className="nav-link js-scroll-trigger">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink  to="/news" className="nav-link js-scroll-trigger">News</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link js-scroll-trigger" to="/news-detail">Detail</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link js-scroll-trigger" to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
        );
    }
}

export default Nav;
