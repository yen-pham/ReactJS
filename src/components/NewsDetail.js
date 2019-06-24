import React, { Component } from 'react';
import data from './Data.json';
import NewsRelated from './NewsRelated.js';

class NewsDetail extends Component {
    render() {
        var dem =1;

        return (
            <div>
                
                <header className="masthead new ">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 my-auto">
                        <div className="header-content mx-auto">
                            <h1 className="mb-5">News Detail </h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin new */}
               
               {
                   data.map((value,key) =>{
                    if(value.id===parseInt(this.props.match.params.id,20))
                    {
                         return(
                        <div className="jumbotron jumbotron-fluid" key="key">
                        <div className="container newsDetaiimg">
                        <img src={value.anh} className="img-fluid " alt="news" />
                        <h1 className="display-3">{value.tieuDe}</h1>
                        <p>   {value.noiDung}             
                         </p>
                        </div>
                    </div>
                    )
                    }
                    else {return 0 ;} 
                    
                    
                   
                })
               }
                <div className="container">
                    <h4 className="card-title text-center">Related news</h4>
                    <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                            {
                                data.map((value,key) => {
                                    if(value.id !== parseInt(this.props.match.params.id,20)){
                                        if(dem<=4){
                                            dem++;
                                            return(
                                            <NewsRelated  key={key} anh  ={value.anh}
                                            tinId={value.id}
                                                tieuDe={value.tieuDe} trichDan ={value.trichDan}/>)
                                      
                                         }
                                         
                                    }
                                    return true;
                                }
                                   
                                    )
                            }
                       
                        </div>
                    </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default NewsDetail;