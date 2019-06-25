import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <div className="col-3">
                <div className>
                    <div className="card mb-3 ">
                    <div className="card-header">Thêm mới</div>
                    <div className="card-body">
                        <div className="form-group">
                        <label htmlFor />
                        <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                        <label htmlFor />
                        <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Điện thoại" />
                        </div>
                        <hr />
                        <div className="form-group">
                        <select className="custom-select" required>
                            <option value>Chọn quyền mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Modrator</option>
                            <option value={3}>Nomal</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <div className="btn btn-block btn-primary">
                            Thêm mới
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        );
    }
}

export default AddUser;