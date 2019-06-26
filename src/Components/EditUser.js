import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <form>
                            <div className="card mb-3 mt-2 text-white bg-secondary ">
                            <div className="card-header text-center">Sửa thông tin User</div>
                            <div className="card-body">
                                <div className="form-group">
                                
                                <input type="text" name="name" className="form-control"  placeholder="Tên user" />
                                </div>
                                <div className="form-group">
                                
                                <input type="text" name="tel"  className="form-control" placeholder="Điện thoại" />
                                </div>
                                <hr/>
                                <div className="form-group">
                                <select className="custom-select" required name="name" name="Permission" >
                                    <option value>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Nomal</option>
                                </select>
                                </div>
                                <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary"  value ="Thêm mới">
                                </input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default EditUser;