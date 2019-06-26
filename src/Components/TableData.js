import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteButtonClick  = (idUser) => {
        this.props.deleteUser(idUser);
    }
    mappingDataUse = () => 
         this.props.dataUserProps.map((value,key)=>
                (
                    <TableDataRow userName ={value.name} key={key} stt={key} 
                    id ={value.id}
                    tel={value.tel} permission ={value.Permission}
                     editFunClick ={ (user) => this.props.editFun(value)}
                     changeEditUserStatus ={() => this.props.changeEditUserStatus()}
                     deleteButtonClick ={(idUser) => this.deleteButtonClick(idUser)}/>
                )
             
         )
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead>
                    <tr>
                        <th>STT </th>
                        <th>Tên </th>
                        <th>Điện thoại </th>
                        <th>Quyền </th>
                        <th>Thao tác </th>
                    </tr>
                    </thead>
                    <tbody>
                   {this.mappingDataUse()}
                    
                    </tbody>
                </table>
                </div>

        );
    }
}

export default TableData;