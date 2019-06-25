import React, { Component } from 'react';

class TableData extends Component {
    render() {
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
                    <tr>
                        <td scope="row">1</td>
                        <td>Phạm Tấn Khang</td>
                        <td>0122908976</td>
                        <td>Moderator</td>
                        <td>
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit    "> Sửa </i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-delete    "> Xóa </i>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">2</td>
                        <td>Trần Quang Huy</td>
                        <td>0122908976</td>
                        <td>Moderator</td>
                        <td>
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit    "> Sửa </i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-delete    "> Xóa </i>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">3</td>
                        <td>Huỳnh Gia Bảo</td>
                        <td>6545645623</td>
                        <td>Moderator</td>
                        <td>
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit    "> Sửa </i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-delete   "> Xóa </i>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">4</td>
                        <td>Nguyễn Huy Vũ</td>
                        <td>077890544</td>
                        <td>Moderator</td>
                        <td>
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit    "> Sửa </i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-delete   "> Xóa </i>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">5</td>
                        <td>Bùi Hiếu</td>
                        <td>0909086754</td>
                        <td>Moderator</td>
                        <td>
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit    "> Sửa </i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-delete    "> Xóa </i>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">6</td>
                        <td>Mỹ Hoằng</td>
                        <td>078954356</td>
                        <td>Moderator</td>
                        <td>
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit    "> Sửa </i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-delete    "> Xóa </i>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">6</td>
                        <td>Phạm Yến</td>
                        <td>012657357</td>
                        <td>Moderator</td>
                        <td>
                        <div className="btn btn-warning sua">
                            <i className="fa fa-edit    "> Sửa </i>
                        </div>
                        <div className="btn btn-danger xoa">
                            <i className="fa fa-delete    "> Xóa </i>
                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>

        );
    }
}

export default TableData;