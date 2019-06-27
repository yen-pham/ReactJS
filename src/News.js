import React, { Component } from 'react';
import {connect} from 'react-redux';


class News extends Component {
    userEditStatusInStore  = () => {
        var {dispatch} =this.props;
        dispatch({type: "CHANGE_EDIT_STATUS"});
    }
    render() {
        return (
            <div>
                <h2>Day la component News</h2>
                <button onClick ={() => this.userEditStatusInStore()}>click</button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      editstatus: state.editstatus
    }
  }
  export default connect(mapStateToProps)(News)
