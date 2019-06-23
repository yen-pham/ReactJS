import React, { Component } from 'react';

class NewsItem extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="card-deck">
                    <div className="card">
                        <a href="/news-detail"><img src={this.props.anh} alt className="img-fluid" /></a>
                        <div className="card-body">
                            <a href="/news-detail"><h4 className="card-title">{this.props.tieuDe}</h4></a> 
                            <p className="card-text"> {this.props.trichDan}</p>
                        </div>
                    </div>
                </div> <hr />
            </div>
        );
    }
}

export default NewsItem;