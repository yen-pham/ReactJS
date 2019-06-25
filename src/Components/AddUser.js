import React, { Component } from 'react';




class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id : "",
            name:"",
            tel:"",
            Permission : ""
        }
    }
    
    hienThiForm=()=>{   
        if(this.props.hienThiForm===true){
            return(
                <div className="col-12">
                <div className="card mb-3 mt-2 ">
                <div className="card-header">Thêm mới</div>
                <div className="card-body">
                    <div className="form-group">
                    
                    <input type="text" name="name" className="form-control" onChange ={ (event) => this.isChange(event)} placeholder="Tên user" />
                    </div>
                    <div className="form-group">
                    
                    <input type="text" name="tel"  className="form-control" onChange ={ (event) => this.isChange(event)} placeholder="Điện thoại" />
                    </div>
                    <hr/>
                    <div className="form-group">
                    <select className="custom-select" required name="name" onChange ={ (event) => this.isChange(event)} name="Permission" >
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
            )
        }
    }
    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(
            {[name] : value}
        );
        var item =[];
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.Permission = this.state.Permission;
        console.log(item);
    }
    render() {
        // console.log(this.state);
        return (
           
                <div>
                    {/* {this.hienThiNut()} */}
                    {this.hienThiForm()}
                 </div>

        );
    }
}

export default AddUser;