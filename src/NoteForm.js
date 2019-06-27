import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            noteTitle: '',
            noteContent:''
        }
    }
    
    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]:value
        });
    }

    addData  = (title,content) => {
        var item ={};
        item.title=title;
        item.content=content;
        console.log(item);
    }
    render() {
        return (
            <div className="col-4 bg-dark text-white pt-5 pb-5 w-90%" >
                <h3>SỬA NỘI DUNG NOTE</h3>
                <div className="form-group ">
                    <label htmlFor="notetitle">Tiêu đề Note</label>
                    <input onChange ={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="notetitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề Note" />
                    <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                </div>
                <div className="form-group">
                    <label htmlFor="notetitle">Nội dung Note</label>
                    <input onChange ={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="notetitle" aria-describedby="helpIdNoteTitle" placeholder="Nội dung Note" />
                    <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
                </div>
                <button onClick ={(title,content) => this.addData(this.state.noteTitle,this.state.noteContent)} type="submit" className="btn btn-primary btn-block">Lưu</button>
            </div>

        );
    }
}

export default NoteForm;