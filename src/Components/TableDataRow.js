import React, { Component } from 'react';

class TableDataRow extends Component {
    permissionShow =() =>{
        if(this.props.permission===1)return "Admin";
        else  if(this.props.permission===1)return "Moderator";
        else return "Mormal User"
    }

    editClick  = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    deleteButtonClick  = (idUser) => {
        this.props.deleteButtonClick(idUser);
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt +1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                <div className="btn btn-warning sua">
                    <i className="fa fa-edit" onClick={() => this.editClick()}> Sửa </i>
                </div>
                <div className="btn btn-danger xoa">
                    <i className="fa fa-delete" onClick ={(idUser) => this.deleteButtonClick(this.props.id)}> Xóa </i>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;