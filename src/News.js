import React, { Component } from 'react';
import {connect} from 'react-redux';


class News extends Component {
    // userEditStatusInStore  = () => {
    //     var {dispatch} =this.props;
    //     dispatch({type: "CHANGE_EDIT_STATUS"});
    // }
    render() {
        return (
            <div>
                <h2>Day la component News</h2>
                <button onClick ={() => this.props.userEditStatusInStore()}>click</button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      editstatus: state.editstatus
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
      return {
        userEditStatusInStore: () => {
              dispatch({type: "CHANGE_EDIT_STATUS"})
          }
      }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(News)
