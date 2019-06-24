import React, { Component } from 'react';

class NewsDetail extends Component {
    render() {
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
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <img src="http://placehold.it/1900x800" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="news" />
                    <h1 className="display-3">Fluid jumbo heading</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed commodi nobis ex mollitia quidem quaerat! Vitae inventore officia autem, iure corporis ipsa suscipit assumenda, eos laudantium saepe velit ad aut?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aut perferendis est rerum! Modi vitae provident optio, officiis veniam architecto impedit. Dolorem at cupiditate molestiae nulla veritatis aliquid? Ad, perspiciatis?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, officia exercitationem quasi tempore quae nihil ipsa necessitatibus placeat soluta voluptatem? Autem placeat cupiditate amet nostrum dolor, quod voluptate sit temporibus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident asperiores id laboriosam vel expedita inventore, fugit porro. Beatae amet similique nisi tempore aliquid ipsa a, harum explicabo ea ad nemo?
                    </p>
                    </div>
                </div>
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