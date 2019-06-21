import React, { Component } from 'react';

class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            trangThai:1
        }
    }
    thongbao = () =>{
       alert('cach xu li tuong tac trong react js');
    }
    thongbao2 = () =>{
        alert('thong bao so 2');
     }
     thongbao3 = (x) =>{
        alert(x);
     }

     renderButton  = () => (
        <div className="row">
            <div className="btn btn-group">
             <div className="btn btn-info" onClick={() => this.editclick()}>Edit</div>
             <div className="btn btn-warning" >Remove</div>
           </div>
        
        </div>
     )
     renderForm  = () => {
        return(
            <div className="row">
            <div className="form-group">
                <input defaultValue ={this.props.tieude} type="text" name id className="form-control" placeholder aria-describedby="helpId" />
            </div>
            <div className="form-group">
            <div className="btn btn-block btn-danger" onClick={() => this.saveclick()}>Save</div>
            </div>
        </div>
        )
        
     }

     displayCheck  = () => {
        if(this.state.trangThai === 0 ){
                    return this.renderForm();
        }else {
                    return this.renderButton();
                }
     }
         
     editclick  = () => {
         this.setState({trangThai :0});
     }

     saveclick  = () => {
        this.setState({trangThai :1});
    }

    render() {
        return (
            <div className="col-log-4">
              <div className="row ">
                <div className="col-lg-5 ">
                  <div className="p-1">
                    <img className="img-fluid rounded-circle" src= {this.props.anh} alt />
                  </div>
                </div>
                <div className="col-lg-7 " >
                  <div className="p-1">
                    <h2 className="display-6">{this.props.tieude}</h2>
                    <p> {this.props.trichdan}</p> 
                    {this.displayCheck()}
                  </div>
                </div>
              </div>
            </div>
          
        );
    }
}

export default Content;