import React, { Component } from 'react';


class Noidung extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps cua NoiDung.js chay roi : '+ nextProps.ten);
        return true;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate cua NoiDung.js chay roi');
        return true;
     }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate cua NoiDung.js chay roi');
    }
      
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate cua NoiDung.js chay roi');
    }
    render() {
        console.log('day la ham render da chay'); 
        return (
            <div>
                <h4>{this.props.ten}</h4>
            </div>
        );
    }
}

export default Noidung;