import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    mappingDataUse = () => 
         this.props.dataUserProps.map((value,key)=>
                (
                    <TableDataRow userName ={value.name} key={key} stt={key} 
                    tel={value.tel} permission ={value.Permission} />
                )
             
         )
    render() {
        console.log(this.props.dataUserProps);
        return (
            <div className="col-9">
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