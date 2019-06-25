import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue:''
        }
    }
    isChange  = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue : event.target.value
        });
        this.props.checkConnectProps(event.target.value);
    }
    hienThiNut=() =>{
        if(this.props.hienThiForm===false)
        {
            return (
                <div className="btn btn-block btn-outline-info"  onClick={()=> this.props.ketNoi()}>Thêm mới</div>
            )
        }
        else {
            return(
                <div className="btn btn-outline-secondary btn-block" onClick={()=> this.props.ketNoi()} >Đóng lại</div>
            )
        }
    }
    render() {
        return (
            
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange ={(event)=> this.isChange(event)} placeholder="Nhập từ khóa" style={{width: '610px'}} />
                        <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}> Tìm </div>
                    </div>
                    <div>
                       { this.hienThiNut()}
                       
                    </div>
                    
                </div>
                <hr/>
            </div>
        );
    }
}

export default Search;