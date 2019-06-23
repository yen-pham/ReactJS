import React, { Component } from 'react';
import NewsItem from './NewsItem';

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
     
      <NewsItem anh  ="https://cdn.24h.com.vn/upload/2-2018/images/2018-05-11/Ghe-Nha-Trang-he-nay-kham-pha-4-1526028011-478-width960height724.jpg"
      tieuDe="Ghé Nha Trang hè này khám phá  bãi tắm đôi duy nhất ở Việt Nam" trichDan ="Trải nghiệm tắm ở bãi biển đôi nước xanh trong, ghé hang yến xem loài chim làm tổ và leo núi Du Hạ...khiến du khách mê mẩn khi đến Nha Trang hè này."/>
      <NewsItem anh  ="https://cdn.24h.com.vn/upload/2-2018/images/2018-05-11/Ghe-Nha-Trang-he-nay-kham-pha-4-1526028011-478-width960height724.jpg"
      tieuDe="Ghé Nha Trang hè này khám phá  bãi tắm đôi duy nhất ở Việt Nam" trichDan ="Trải nghiệm tắm ở bãi biển đôi nước xanh trong, ghé hang yến xem loài chim làm tổ và leo núi Du Hạ...khiến du khách mê mẩn khi đến Nha Trang hè này."/>
      <NewsItem anh  ="https://cdn.24h.com.vn/upload/2-2018/images/2018-05-11/Ghe-Nha-Trang-he-nay-kham-pha-4-1526028011-478-width960height724.jpg"
      tieuDe="Ghé Nha Trang hè này khám phá  bãi tắm đôi duy nhất ở Việt Nam" trichDan ="Trải nghiệm tắm ở bãi biển đôi nước xanh trong, ghé hang yến xem loài chim làm tổ và leo núi Du Hạ...khiến du khách mê mẩn khi đến Nha Trang hè này."/>
      <NewsItem anh  ="https://cdn.24h.com.vn/upload/2-2018/images/2018-05-11/Ghe-Nha-Trang-he-nay-kham-pha-4-1526028011-478-width960height724.jpg"
      tieuDe="Ghé Nha Trang hè này khám phá  bãi tắm đôi duy nhất ở Việt Nam" trichDan ="Trải nghiệm tắm ở bãi biển đôi nước xanh trong, ghé hang yến xem loài chim làm tổ và leo núi Du Hạ...khiến du khách mê mẩn khi đến Nha Trang hè này."/>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default News;