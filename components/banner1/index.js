import React from "react";
import Link from "next/link";
const Banner1 = () => {
  return (
    <div  className="pb-10 pt-10">
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <div className>
              <div className="slider-section">
                <div
                  className="slick-initialized slick-slider"
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
                        aria-hidden="false"
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
