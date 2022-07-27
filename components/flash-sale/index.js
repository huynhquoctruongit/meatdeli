import React, { useState } from "react";
import CartModal from "../../components/popup/cart";
import Link from "next/link";
const Products = ({ products }) => {
  console.log(products, "products");
  const [isCartModal, setCardModal] = useState(false);
  const [isChangeCart, setChangeCart] = useState(false);
  const addToCart = (data) => {
    setCardModal(true);
    setChangeCart(!isChangeCart);
    var getCart = localStorage.getItem("cart");
    let dataCart = JSON.parse(getCart);

    var listCart = [];
    if (getCart !== null && getCart !== "null") {
      var checkMatch = dataCart?.find((item) => item.id === data.id);
      if (checkMatch && Object.keys(checkMatch).length > 0) {
        data["quality"] = checkMatch.quality + 1;
        var filteredItems = dataCart.filter(
          (itemVal) => itemVal.id !== data.id
        );
        listCart.push(...(filteredItems || []), data);
        localStorage.setItem("cart", JSON.stringify(listCart));
      } else {
        listCart.push(...dataCart, data);
        localStorage.setItem("cart", JSON.stringify(listCart));
      }
    } else {
      listCart.push(...(dataCart || []), data);
      localStorage.setItem("cart", JSON.stringify(listCart));
    }
  };
  return (
    <>
      <CartModal
        open={isCartModal}
        setOpen={setCardModal}
        isChangeCart={isChangeCart}
      ></CartModal>
      {/* <div nh-row="7rq91od" className="section-flash-sale-mb">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div
                nh-block="j2m0s3k"
                nh-block-cache="false"
                className="flash-sale slide-product px-lg-20 pt-20 rounded-10 mt-20 mb-10 mb-lg-0 mt-lg-10"
              >
                <div className="title-sale d-flex flex-row justify-content-between align-items-center mb-lg-30 mb-20">
                  <h3 className="text-uppercase fs-16 fs-md-36 text-white font-weight-bold mb-0">
                    <span className="icon-title mr-10">
                      <img
                        nh-lazy="image"
                        className="img-fluid"
                        alt="icon"
                        src="https://5sfood.vn/templates/fashion02/assets/media/icon/icon-flash.png"
                        style={{}}
                      />
                    </span>
                    Giá sốc hôm nay
                  </h3>
                  <div className="time d-flex align-items-center">
                    <div
                      className="show-countdown"
                      id="show-countdown"
                      nh-time-end="06/19/2022 23:59:00"
                    >
                      <span>Khuyến mại kết thúc</span>
                    </div>
                  </div>
                </div>
                <div
                  nh-owl-slick='{"infinite":true,"slidesToShow":5,"slidesToScroll":1,"rows":"2","dots":false,"arrows":true,"adaptiveHeight":true,"autoplay":false,"autoplaySpeed":2000,"responsive":[{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":1}},{"breakpoint":1024,"settings":{"slidesToShow":3,"slidesToScroll":1}},{"breakpoint":768,"settings":{"slidesToShow":3,"slidesToScroll":1}},{"breakpoint":767,"settings":{"slidesToShow":3,"slidesToScroll":1}},{"breakpoint":480,"settings":{"slidesToShow":2,"slidesToScroll":1}}]}'
                  className="slick-initialized slick-slider"
                  loaded={1}
                >
                  <button
                    className="slick-prev slick-arrow"
                    aria-label="Previous"
                    type="button"
                    style={{}}
                  >
                    Previous
                  </button>
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: "1616px",
                        transform: "translate3d(-404px, 0px, 0px)",
                      }}
                    >

<div
                        className="slick-slide slick-cloned"
                        data-slick-index={5}
                        id
                        aria-hidden="true"
                        style={{ width: "192px" }}
                      >
                        <div>
                          <div
                            nh-product={17}
                            nh-product-item-id={25}
                            className="product-item bg-white rounded-15"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="inner-image">
                              <div className="product-status" />
                              <div className="product-status-right">
                                <span
                                  className="giam-gia bg-product-status"
                                  nh-lazy="image-background"
                                  data-src="/templates/fashion02/assets/media/icon/bg-sale.png"
                                >
                                  Giảm 21%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/ca-tuyet-nauy-fillet-norwegian-cod"
                                  title="Cá tuyết Nauy fillet - Norwegian Cod"
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    data-src="https://cdn.5sfood.vn/media/san-pham-5s/ca-tuyet-nauy/ca-tuyet-nauy-phi-le.jpg"
                                    alt="Cá tuyết Nauy fillet - Norwegian Cod"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link href="/ca-tuyet-nauy-fillet-norwegian-cod">
                                  <p> Cá tuyết Nauy fillet - Norwegian Cod</p>
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    725,000
                                    <span className="currency-symbol">đ</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    915,000
                                    <span className="currency-symbol">đ</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <Link
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  nh-btn-action="add-cart"
                                  href="#"
                                  title="Thêm giỏ hàng"
                                >
                                  <div>
                                    {" "}
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Thêm giỏ hàng
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div />
                      </div>
                    </div>
                  </div>
                  <button
                    className="slick-next slick-arrow"
                    aria-label="Next"
                    type="button"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mb-15">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div className="mt-10 mt-lg-20 product-scoll">
                <div className="d-flex justify-content-between align-items-center mb-10 mb-xl-0">
                  <h3 className="title-section mb-0 mb-xl-10">
                    Đang khuyến mãi
                  </h3>
                  <Link
                    className="color-main d-flex align-items-center fs-14 fs-lg-16"
                    href="san-pham?status=discount"
                  >
                    <div>
                      Xem thêm <i className="iconsax isax-arrow-right-3" />
                    </div>
                  </Link>
                </div>
                <div className="section-product-scoll">
                  <div className="row">
                    {products?.map((item, index) => (
                      <div key={index}>
                        <div className="col-lg-3 col-sm-4 col-6 col-custom">
                          <div className="product-item bg-white rounded-15">
                            <div className="inner-image">
                              <div className="product-status" />
                              <div className="product-status-right">
                                <span className="giam-gia bg-product-status">
                                  Giảm 10%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/thit-bap-hoa-bo-my-hang-usda-choice-loai-cao-cap"
                                  title="Thịt bắp hoa bò Mỹ hạng USDA Choice (loại cao cấp)"
                                >
                                  <img
                                    className="img-fluid rounded-12"
                                    alt={item.image.slug}
                                    src={item?.image?.sourceUrl}
                                    style={{}}
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link href="/thit-bap-hoa-bo-my-hang-usda-choice-loai-cao-cap">
                                  {item.name}
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    359,000
                                    <span className="currency-symbol">đ</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    399,000
                                    <span className="currency-symbol">đ</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <Link
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  href="#"
                                  title="Thêm giỏ hàng"
                                >
                                  <div>
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />{" "}
                                    Thêm giỏ hàng
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
