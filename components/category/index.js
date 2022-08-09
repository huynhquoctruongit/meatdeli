import React from "react";
import Link from "next/link";
const Banner1 = ({ productCategories }) => {
  return (
    <div nh-row="reuyskd" className="bg-white pt-30">
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <div nh-block="tocxsd0" nh-block-cache="true" className>
              <div className="row">
                {productCategories?.map((item, index) => {
                  if (item?.children?.nodes.length > 0) {
                    return (
                      <div className="col-lg-3 col-md-3 col-3">
                        <div className="list_category mb-30">
                          <div className="img_category text-center mb-15">
                            <Link href="/category/thit-nhap-khau">
                              <img
                                nh-lazy="image"
                                className="img-fluid"
                                alt="Thịt nhập khẩu"
                                src={item.image.sourceUrl}
                              />
                            </Link>
                          </div>
                          <div className="item-title-category text-center fs-10 font-weight-bold  fs-md-14">
                            <Link href="/category/thit-nhap-khau">
                              {item?.name}
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner1;
