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

    printTitle  = () => {
        if(this.props.addStatus){
            return <h4>Thêm mới</h4>
        }
        else return <h4>Sửa ghi chú</h4>
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
        if(this.state.id){
           var editObject = {};
           editObject.id = this.state.id;
           editObject.noteTitle = this.state.noteTitle;
           editObject.noteContent = this.state.noteContent;

           this.props.editDataStore(editObject);
           this.props.alertOn('Bạn đã sửa thành công');
        }
        else {
            var item ={};
            item.noteTitle=title;
            item.noteContent=content;
            // this.props.getData(item);
            // alert('ban da them thanh cong');
            this.props.addData(item);
            this.props.alertOn('Bạn đã thêm thành công');
        }
        this.props.changeEditStatus();
        
    }
    render() {
        return (
            <div className="col-4 bg-dark text-white pt-5 pb-5 w-90%" >
                {this.printTitle()}
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
        editItem: state.editItem,
        addStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
          },
        addData: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type:"EDIT",getItem})
        },
       
        alertOn: (alertContent) => {
            dispatch({type:"ALERT_ON",alertContent})
        },
        alertOff: () => {
            dispatch({type:"ALERT_OFF"})
        }
               
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
