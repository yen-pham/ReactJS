import React, { Component } from 'react';

class NoteForm extends Component {
    render() {
        return (
            <div className="col-4 bg-dark text-white pt-5 pb-5 w-90%" >
                <h3>SỬA NỘI DUNG NOTE</h3>
                <div className="form-group ">
                    <label htmlFor="notetitle">Tiêu đề Note</label>
                    <input type="text" className="form-control" name="notetitle" id="notetitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề Note" />
                    <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                </div>
                <div className="form-group">
                    <label htmlFor="notetitle">Nội dung Note</label>
                    <input type="text" className="form-control" name="noteContent" id="notetitle" aria-describedby="helpIdNoteTitle" placeholder="Nội dung Note" />
                    <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Lưu</button>
            </div>

        );
    }
}

export default NoteForm;