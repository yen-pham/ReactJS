import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" placeholder="Nhập từ khóa" style={{width: '610px'}} />
                        <div className="btn btn-info"> Tìm </div>
                    </div>
                    <div>
                        <div className="btn btn-block btn-outline-info"  onClick={()=> this.props.ketNoi()}>Thêm mới</div>
                        <div className="btn btn-outline-secondary btn-block" >Đóng lại</div>
                    </div>
                    
                </div>
                <hr/>
            </div>
        );
    }
}

export default Search;