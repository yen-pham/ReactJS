import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập từ khóa" style={{width: '610px'}} />
                        <div className="btn btn-info"> Tìm </div>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Search;