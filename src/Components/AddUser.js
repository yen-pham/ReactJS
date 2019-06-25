import React, { Component } from 'react';



class AddUser extends Component {
    hienThiForm=()=>{
        
        if(this.props.hienThiForm===true){
            return(
                <div className="card mb-3 mt-2 ">
                <div className="card-header">Thêm mới</div>
                <div className="card-body">
                    <div className="form-group">
                    
                    <input type="text" className="form-control"  placeholder="Tên user" />
                    </div>
                    <div className="form-group">
                    
                    <input type="text" className="form-control"  placeholder="Điện thoại" />
                    </div>
                    <hr/>
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
            )
        }
    }
    render() {
        return (
            <div className="col-3">
                <div>
                    {/* {this.hienThiNut()} */}
                    {this.hienThiForm()}
                            </div>
                            </div>

        );
    }
}

export default AddUser;