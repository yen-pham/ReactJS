import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            noteTitle: '',
            noteContent:'',
            id : ''
        }
    }

    
    componentWillMount() {
        if(this.props.editItem)
        {
            this.setState(
                {
                    noteTitle: this.props.editItem.noteTitle,
                    noteContent:this.props.editItem.noteContent,
                    id : this.props.editItem.key
                }
            )
        }
    }
    
    
    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    addData  = (title,content) => {
        var item ={};
        item.noteTitle=title;
        item.noteContent=content;
        // this.props.getData(item);
        // alert('ban da them thanh cong');
        this.props.addData(item);
    }
    render() {
        return (
            <div className="col-4 bg-dark text-white pt-5 pb-5 w-90%" >
                <h3>SỬA NỘI DUNG NOTE</h3>
                <div className="form-group ">
                    <label htmlFor="notetitle">Tiêu đề Note</label>
                    <input defaultValue ={ this.props.editItem.noteTitle} onChange ={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="notetitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề Note" />
                    <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                </div>
                <div className="form-group">
                    <label htmlFor="notetitle">Nội dung Note</label>
                    <textarea defaultValue ={ this.props.editItem.noteContent} onChange ={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="notetitle" aria-describedby="helpIdNoteTitle" placeholder="Nội dung Note" />
                    <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
                </div>
                <button onClick ={(title,content) => this.addData(this.state.noteTitle,this.state.noteContent)} type="submit" className="btn btn-primary btn-block">Lưu</button>
            </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addData: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
