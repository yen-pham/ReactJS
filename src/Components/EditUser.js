import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel : this.props.userEditObject.tel,
            Permission : this.props.userEditObject.Permission
        }
    }
    
    isChange  = (event) => {
        const name = event.target.name;
        const value =event.target.value;
        this.setState(
            {
                [name] : value
            }
        );
    }

    render() {
        console.log(this.state);
        return (
            <div className="row">
                <div className="col-12">
                    <form>
                            <div className="card mb-3 mt-2 text-white bg-secondary ">
                            <div className="card-header text-center">Sửa thông tin User</div>
                            <div className="card-body">
                                <div className="form-group">
                                
                                <input onChange ={(event) => this.isChange(event)} type="text" name="name" className="form-control"  placeholder="Tên user" defaultValue={this.props.userEditObject.name} />
                                </div>
                                <div className="form-group">
                                
                                <input onChange ={(event) => this.isChange(event)} type="text" name="tel"  className="form-control" placeholder="Điện thoại" defaultValue={this.props.userEditObject.tel}/>
                                </div>
                                <hr/>
                                <div className="form-group">
                                <select onChange ={(event) => this.isChange(event)} className="custom-select" required name="name" name="Permission" defaultValue={this.props.userEditObject.Permission} >
                                    <option value>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Nomal</option>
                                </select>
                                </div>
                                <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick ={() => this.props.changeEditUserStatus()} value ="Lưu">
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