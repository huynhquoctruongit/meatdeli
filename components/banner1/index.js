import React from "react";
import Link from "next/link";
const Banner1 = () => {
  return (
    <div nh-row="ctnof1g" className="pb-10 pt-10">
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <div nh-block="eu87ot9" nh-block-cache="true" className>
              <div className="slider-section">
                <div
                  nh-owl-slick='{"infinite":true,"slidesToShow":1,"slidesToScroll":1,"dots":false,"arrows":true,"autoplay":true,"autoplaySpeed":5000,"responsive":[{"breakpoint":767,"settings":{"arrows":false}}]}'
                  className="slick-initialized slick-slider"
                  loaded={1}
                >
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: "394px",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      {/* <Slider {...settings}></Slider> */}
                      <div
                        className="item slick-slide slick-current slick-active"
                        style={{ width: "394px" }}
                        data-slick-index={0}
                        aria-hidden="false"
                        tabIndex={0}
                      >
                        <Link className="d-block" href="/" tabIndex={0}>
                          <img
                            className="img-fluid"
                            src="https://cdn.5sfood.vn/media/slide-ngang/banner2a.jpg"
                            alt="Slide 1"
                          />
                        </Link>
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
export default Banner1;
