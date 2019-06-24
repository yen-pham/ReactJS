import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from './Data.json';

class News extends Component {
    render() {
        return (
            <div>
                <div>
  <header className="masthead new ">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">News</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin new */}
  <div className="container">
    <div className="row mt-3 ">
     
     {
       data.map((value,key) => {
          return(
              <NewsItem  key={key} anh  ={value.anh}
                  tieuDe={value.tieuDe} trichDan ={value.trichDan}/>)
            
       })
     }
     
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default News;