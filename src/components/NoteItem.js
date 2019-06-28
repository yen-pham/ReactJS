import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {
    render() {
        return (
            <div className="card ">
                <div className="card-header shadow p-4 mb-4 bg-secondary " role="tab" id={"notee"+this.props.id}>
                  <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#accordianId" href={"#note"+this.props.id} aria-expanded="true" aria-controls={"note"+this.props.id}>
                      {this.props.noteTitle}
                    </a>
                    <button className="btn btn-outline-primary float-right bg-light" onClick ={ ()=> this.props.changeEditStatus()}>Sửa</button>
                  <button className="btn btn-outline-danger float-right bg-light">Xóa</button>
                  </h5>
                
                </div>
                <div id={"note"+this.props.id} className="collapse in" role="tabpanel" aria-labelledby={"note"+this.props.id}>
                  <div className="card-body">
                  {this.props.noteContent}
                  </div>
                </div>
              </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({type:'CHANGE_EDIT_STATUS'})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);