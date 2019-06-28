import React, { Component } from 'react';
import {connect} from 'react-redux';

class Nav extends Component {
    handleAdd  = (event) => {
         event.preventDefault();
         this.props.changeEditStatus();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Fedu</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav  mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-light" href="http://google.com" onClick ={(event) => this.handleAdd(event)}>Thêm ghi chú mới</a>
                    </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
    
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
          }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav);