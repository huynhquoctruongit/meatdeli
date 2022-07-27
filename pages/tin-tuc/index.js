import Link from "next/link";
const News = () => {
  return (
    <div>
      <div nh-row="to4396u" className="bg-white mb-20 breadcrumb-article">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="mz4eo5d" nh-block-cache="false" className>
                <nav className="breadcrumbs-section py-15">
                  <Link href="/">Trang chủ</Link>
                  <h1>
                    <Link href="/tin-tuc">
                      <span>Tin tức</span>
                    </Link>
                  </h1>
                </nav>
              </div>
              <div
                nh-block="uib6q12"
                nh-block-cache="true"
                className="menu-category-article"
              >
                <div nh-menu="active" className="category-article">
                  <ul className="categories-section list-unstyled">
                    <li className>
                      <Link href="/khach-hang-phan-hoi">
                        Khách hàng phản hồi
                      </Link>
                    </li>
                    <li className>
                      <Link href="/tuyen-dung">Tuyển dụng</Link>
                    </li>
                    <li className>
                      <Link href="/tin-tuc">Tin tức</Link>
                    </li>
                    <li className>
                      <Link href="/gioi-thieu">Giới thiệu</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div nh-row="uxq503k" className>
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="v3mgzkp" nh-block-cache="true" className="mb-20">
                <div className="row">
                  <div className="col-lg-4 col-sm-4 col-12 col-12 order-2 article-right">
                    <article className="article-item mb-20 hover-image article-slide position-relative">
                      <div className="inner-image position-relative overflow-hidden rounded-10">
                        <div className="featured-media" />
                        <div className="ratio-8-5">
                          <Link
                            href="/top-list-5-mon-ngon-tu-ca-hoi-chile-cat-khuc"
                            title="Top List 5 món ngon từ cá hồi Chile cắt khúc"
                          >
                            <img
                              nh-lazy="image"
                              className="img-fluid rounded-10"
                              alt="Top List 5 món ngon từ cá hồi Chile cắt khúc"
                              src="https://cdn.5sfood.vn/media/san-pham-5s/ca-hoi-chile/ca-hoi-chile-cat-khuc%20(1).jpg"
                              style={{}}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="inner-content">
                        <h4 className="article-title text-uppercase">
                          <a href="/top-list-5-mon-ngon-tu-ca-hoi-chile-cat-khuc">
                            Top List 5 món ngon từ cá hồi Chile cắt khúc
                          </a>
                        </h4>
                        <div className="article-description">
                          {" "}
                          Bỏ túi ngay các món ăn từ cá hồi Chile cắt khúc ngon
                          tuyệt vời của 5sfood. Thịt cá chắc mẩy, vị cá beo béo
                          cùng một chút vị ngậy đặc trưng của cá hồi sẽ làm vừa
                          lòng cả thực khách khó ...
                        </div>
                      </div>
                    </article>
                    <article className="article-item mb-20 hover-image article-slide position-relative">
                      <div className="inner-image position-relative overflow-hidden rounded-10">
                        <div className="featured-media" />
                        <div className="ratio-8-5">
                          <Link
                            href="/seafood-from-norway-sfn-chinh-phuc-vi-tri-so-1-ve-chat-luong-hai-san"
                            title="Seafood From Norway (SFN) - Vị Trí Số 1 Về Chất Lượng Hải Sản"
                          >
                            <img
                              nh-lazy="image"
                              className="img-fluid rounded-10"
                              alt="Seafood From Norway (SFN) - Vị Trí Số 1 Về Chất Lượng Hải Sản"
                              src="https://cdn.5sfood.vn/media/sfn/cong-nghe-danh-bat-bao-quan-hien-dai-theo-chuan-eu.jpg"
                              style={{}}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="inner-content">
                        <h4 className="article-title text-uppercase">
                          <Link href="/seafood-from-norway-sfn-chinh-phuc-vi-tri-so-1-ve-chat-luong-hai-san">
                            Seafood From Norway (SFN) - Vị Trí Số 1 Về Chất
                            Lượng Hải Sản
                          </Link>
                        </h4>
                        <div className="article-description">
                          {" "}
                          Bạn đã biết đến nhãn hiệu Seafood From Norway (SFN)
                          hay chưa? Nếu chưa, hôm nay 5sFood sẽ mang đến cho bạn
                          những thông tin thú về hành trình chinh phục vị trí số
                          1 thế giới về chất lượng hải sản của nhãn hiệu này.{" "}
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-8 col-sm-8 col-12 col-12 order-1">
                    <div
                      className="overflow-hidden slick-initialized slick-slider"
                      nh-owl-slick='{"infinite":false,"slidesToShow":1,"slidesToScroll":1,"dots":false,"arrows":true,"autoplay":true,"autoplaySpeed":5000,"responsive":[{"breakpoint":767,"settings":{"arrows":false}}]}'
                      loaded={1}
                    >
                      <div className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{
                            opacity: 1,
                            width: "0px",
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
