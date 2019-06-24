import React, { Component } from 'react';
import data from './Data.json';

class NewsDetail extends Component {
    render() {
        console.log(this.props);
        

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
                    if(value.id==this.props.match.params.id)
                     return(
                        <div className="jumbotron jumbotron-fluid">
                        <div className="container newsDetaiimg">
                        <img src={value.anh} className="img-fluid " alt="news" />
                        <h1 className="display-3">{value.tieuDe}</h1>
                        <p>   {value.noiDung}             
                         </p>
                        </div>
                    </div>
                    )
                    
                   
                })
               }
                <div className="container">
                    <h4 className="card-title text-center">Related news</h4>
                    <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                        <div className="card">
                            <a href="/news-detail"><img src="http://placehold.it/500x300" alt="news" className="img-fluid" /></a>
                            <div className="card-body">
                            <a href="/news-detail"><h4 className="card-title">Tin tuc so 1</h4></a> 
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus totam tempora sint magni aspernatur? Exercitationem harum corrupti cupiditate commodi omnis blanditiis, rerum, sint possimus animi, at tenetur numquam! Perspiciatis, eos.</p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="/news-detail"><img src="http://placehold.it/500x300" alt="news" className="img-fluid" /></a>
                            <div className="card-body">
                            <a href="/news-detail"><h4 className="card-title">Tin tuc so 1</h4></a> 
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus totam tempora sint magni aspernatur? Exercitationem harum corrupti cupiditate commodi omnis blanditiis, rerum, sint possimus animi, at tenetur numquam! Perspiciatis, eos.</p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="/news-detail"><img src="http://placehold.it/500x300" alt="news" className="img-fluid" /></a>
                            <div className="card-body">
                            <a href="/news-detail"><h4 className="card-title">Tin tuc so 1</h4></a> 
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus totam tempora sint magni aspernatur? Exercitationem harum corrupti cupiditate commodi omnis blanditiis, rerum, sint possimus animi, at tenetur numquam! Perspiciatis, eos.</p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="/news-detail"><img src="http://placehold.it/500x300" alt="news" className="img-fluid" /></a>
                            <div className="card-body">
                            <a href="/news-detail"><h4 className="card-title">Tin tuc so 1</h4></a> 
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus totam tempora sint magni aspernatur? Exercitationem harum corrupti cupiditate commodi omnis blanditiis, rerum, sint possimus animi, at tenetur numquam! Perspiciatis, eos.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default NewsDetail;