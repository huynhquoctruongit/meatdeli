import React, { useState } from "react";
import CartModal from "../../components/popup/cart";
import Link from "next/link";
const Banner1 = () => {
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
      <div nh-row="7rq91od" className="section-flash-sale-mb">
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
                    Gi?? s???c h??m nay
                  </h3>
                  <div className="time d-flex align-items-center">
                    <div
                      className="show-countdown"
                      id="show-countdown"
                      nh-time-end="06/19/2022 23:59:00"
                    >
                      <span>Khuy???n m???i k???t th??c</span>
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
                        data-slick-index={-2}
                        id
                        aria-hidden="true"
                        style={{ width: "192px" }}
                      >
                        <div>
                          <div
                            nh-product={36}
                            nh-product-item-id={50}
                            
                            className="product-item bg-white rounded-15"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="inner-image">
                              <div className="product-status" />
                              <div className="product-status-right">
                                <span
                                  className="giam-gia bg-product-status"
                                  nh-lazy="image-background"
                                >
                                  Gi???m 10%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/suon-hoang-de-bo-my-usda-choice-loai-cao-cap"
                                  title="S?????n Ho??ng ????? b?? M??? USDA Choice (lo???i cao c???p)"
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    data-src="https://cdn.5sfood.vn/media/san-pham-5s/suon-hoang-de-bo-my/choice-loai-cao-cap-suon-hoang-de-bo-my.jpg"
                                    alt="S?????n Ho??ng ????? b?? M??? USDA Choice (lo???i cao c???p)"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link href="/suon-hoang-de-bo-my-usda-choice-loai-cao-cap">
                                  S?????n Ho??ng ????? b?? M??? USDA Choice (lo???i cao c???p)
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    529,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    589,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <Link
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  nh-btn-action="add-cart"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                >
                                  <div>
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            nh-product={33}
                            nh-product-item-id={45}
                            
                            className="product-item bg-white rounded-15"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="inner-image">
                              <div className="product-status" />
                              <div className="product-status-right">
                                <span
                                  className="giam-gia bg-product-status"
                                  nh-lazy="image-background"
                                >
                                  Gi???m 10%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/thit-gau-bo-my-brisket-point-beef-usda-choice-loai-cao-cap"
                                  title="Th???t g???u b?? M??? - Brisket Point Beef USDA Choice (lo???i cao c???p)"
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    data-src="https://cdn.5sfood.vn/media/san-pham-5s/thit-gau-bo-my/choice-loai-cao-cap-thit-gau-bo-my-brisket-point-beef-usda.jpg"
                                    alt="Th???t g???u b?? M??? - Brisket Point Beef USDA Choice (lo???i cao c???p)"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link href="/thit-gau-bo-my-brisket-point-beef-usda-choice-loai-cao-cap">
                                  Th???t g???u b?? M??? - Brisket Point Beef USDA ...
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    339,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    379,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <Link
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  nh-btn-action="add-cart"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                >
                                  <div>
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index={-1}
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
                                >
                                  Gi???m 21%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/ca-tuyet-nauy-fillet-norwegian-cod"
                                  title="C?? tuy???t Nauy fillet - Norwegian Cod"
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    data-src="https://cdn.5sfood.vn/media/san-pham-5s/ca-tuyet-nauy/ca-tuyet-nauy-phi-le.jpg"
                                    alt="C?? tuy???t Nauy fillet - Norwegian Cod"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link href="/ca-tuyet-nauy-fillet-norwegian-cod">
                                  C?? tuy???t Nauy fillet - Norwegian Cod
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    725,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    915,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <Link
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  nh-btn-action="add-cart"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                >
                                  <div>
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div />
                      </div>
                      <div
                        className="slick-slide slick-current slick-active"
                        data-slick-index={0}
                        aria-hidden="false"
                        style={{ width: "192px" }}
                        tabIndex={0}
                      >
                        <div>
                          <div
                            nh-product={39}
                            nh-product-item-id={53}
                            
                            className="product-item bg-white rounded-15"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="inner-image">
                              <div className="product-status" />
                              <div className="product-status-right">
                                <span
                                  className="giam-gia bg-product-status"
                                  nh-lazy="image-background"
                                  
                                >
                                  Gi???m 10%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/product-detail/thit-bap-hoa-bo-my-hang-usda-choice-loai-cao-cap"
                                  title="Th???t b???p hoa b?? M??? h???ng USDA Choice (lo???i cao c???p)"
                                  tabIndex={0}
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    alt="Th???t b???p hoa b?? M??? h???ng USDA Choice (lo???i cao c???p)"
                                    src="https://cdn.5sfood.vn/media/san-pham-5s/bap-hoa-bo-my/choice-loai-cao-cap-thit-bap-hoa-bo-my-hang-usda.jpg"
                                    style={{}}
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link
                                  href="/product-detail/thit-bap-hoa-bo-my-hang-usda-choice-loai-cao-cap"
                                  tabIndex={0}
                                >
                                  <div>
                                    Th???t b???p hoa b?? M??? h???ng USDA Choice (lo???i
                                    cao c???p)
                                  </div>
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    359,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    399,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <div
                                  onClick={() =>
                                    addToCart({
                                      price: "359.000",
                                      quality: 1,
                                      id: "/thit-bap-hoa-bo-my-hang-usda-choice-loai-cao-cap",
                                      name: "Th???t b???p hoa b?? M??? h???ng USDA Choice (lo???i cao c???p)",
                                      img: "https://cdn.5sfood.vn/media/san-pham-5s/bap-hoa-bo-my/choice-loai-cao-cap-thit-bap-hoa-bo-my-hang-usda.jpg",
                                      url: "/thit-bap-hoa-bo-my-hang-usda-choice-loai-cao-cap",
                                    })
                                  }
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                >
                                  <div>
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            nh-product={38}
                            nh-product-item-id={52}
                            
                            className="product-item bg-white rounded-15"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="inner-image">
                              <div className="product-status" />
                              <div className="product-status-right">
                                <span
                                  className="giam-gia bg-product-status"
                                  nh-lazy="image-background"
                                 
                                >
                                  Gi???m 10%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/product-detail/product-detail/thit-de-suon-bo-my-rib-finger-beef-usda-choice-loai-cao-cap"
                                  title="Th???t d??? s?????n b?? M??? - Rib Finger Beef USDA Choice (lo???i cao c???p)"
                                  tabIndex={0}
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    alt="Th???t d??? s?????n b?? M??? - Rib Finger Beef USDA Choice (lo???i cao c???p)"
                                    src="https://cdn.5sfood.vn/media/san-pham-5s/de-suon-bo-my/choice-loai-cao-cap-thit-de-suon-bo-my-rib-finger-beef-usda-1.jpg"
                                    style={{}}
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link
                                  href="/product-detail/thit-de-suon-bo-my-rib-finger-beef-usda-choice-loai-cao-cap"
                                  tabIndex={0}
                                >
                                  Th???t d??? s?????n b?? M??? - Rib Finger Beef USDA ...
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    429,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    479,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <div
                                  onClick={() =>
                                    addToCart({
                                      price: "429.000",
                                      quality: 1,
                                      id: "/thit-de-suon-bo-my-rib-finger-beef-usda-choice-loai-cao-cap",
                                      name: "Th???t d??? s?????n b?? M??? - Rib Finger Beef USDA Choice (lo???i cao c???p)",
                                      img: "https://cdn.5sfood.vn/media/san-pham-5s/de-suon-bo-my/choice-loai-cao-cap-thit-de-suon-bo-my-rib-finger-beef-usda-1.jpg",
                                      url: "/thit-de-suon-bo-my-rib-finger-beef-usda-choice-loai-cao-cap",
                                    })
                                  }
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                >
                                  <div>
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active"
                        data-slick-index={1}
                        aria-hidden="false"
                        style={{ width: "192px" }}
                        tabIndex={0}
                      >
                        <div>
                          <div
                            nh-product={36}
                            nh-product-item-id={50}
                            
                            className="product-item bg-white rounded-15"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="inner-image">
                              <div className="product-status" />
                              <div className="product-status-right">
                                <span
                                  className="giam-gia bg-product-status"
                                  nh-lazy="image-background"
                                 
                                >
                                  Gi???m 10%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/suon-hoang-de-bo-my-usda-choice-loai-cao-cap"
                                  title="S?????n Ho??ng ????? b?? M??? USDA Choice (lo???i cao c???p)"
                                  tabIndex={0}
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    alt="S?????n Ho??ng ????? b?? M??? USDA Choice (lo???i cao c???p)"
                                    src="https://cdn.5sfood.vn/media/san-pham-5s/suon-hoang-de-bo-my/choice-loai-cao-cap-suon-hoang-de-bo-my.jpg"
                                    style={{}}
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link
                                  href="/suon-hoang-de-bo-my-usda-choice-loai-cao-cap"
                                  tabIndex={0}
                                >
                                  <div>
                                    {" "}
                                    S?????n Ho??ng ????? b?? M??? USDA Choice (lo???i cao
                                    c???p)
                                  </div>
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    529,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    589,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <Link
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  nh-btn-action="add-cart"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                  tabIndex={0}
                                >
                                  <div>
                                    {" "}
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            nh-product={33}
                            nh-product-item-id={45}
                            
                            className="product-item bg-white rounded-15"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="inner-image">
                              <div className="product-status" />
                              <div className="product-status-right">
                                <span
                                  className="giam-gia bg-product-status"
                                  nh-lazy="image-background"
                                  
                                >
                                  Gi???m 10%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/thit-gau-bo-my-brisket-point-beef-usda-choice-loai-cao-cap"
                                  title="Th???t g???u b?? M??? - Brisket Point Beef USDA Choice (lo???i cao c???p)"
                                  tabIndex={0}
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    alt="Th???t g???u b?? M??? - Brisket Point Beef USDA Choice (lo???i cao c???p)"
                                    src="https://cdn.5sfood.vn/media/san-pham-5s/thit-gau-bo-my/choice-loai-cao-cap-thit-gau-bo-my-brisket-point-beef-usda.jpg"
                                    style={{}}
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link
                                  href="/thit-gau-bo-my-brisket-point-beef-usda-choice-loai-cao-cap"
                                  tabIndex={0}
                                >
                                  <p>
                                    Th???t g???u b?? M??? - Brisket Point Beef USDA ...
                                  </p>
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    339,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    379,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <Link
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  nh-btn-action="add-cart"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                  tabIndex={0}
                                >
                                  <div>
                                    {" "}
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={2}
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
                                  
                                >
                                  Gi???m 21%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/ca-tuyet-nauy-fillet-norwegian-cod"
                                  title="C?? tuy???t Nauy fillet - Norwegian Cod"
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    alt="C?? tuy???t Nauy fillet - Norwegian Cod"
                                    src="https://cdn.5sfood.vn/media/san-pham-5s/ca-tuyet-nauy/ca-tuyet-nauy-phi-le.jpg"
                                    style={{}}
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link href="/ca-tuyet-nauy-fillet-norwegian-cod">
                                  <p>C?? tuy???t Nauy fillet - Norwegian Cod</p>
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    725,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    915,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <Link
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  nh-btn-action="add-cart"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                >
                                  <div>
                                    {" "}
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div />
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index={3}
                        id
                        aria-hidden="true"
                        style={{ width: "192px" }}
                      >
                        <div>
                          <div
                            nh-product={39}
                            nh-product-item-id={53}
                            
                            className="product-item bg-white rounded-15"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="inner-image">
                              <div className="product-status" />
                              <div className="product-status-right">
                                <span
                                  className="giam-gia bg-product-status"
                                  nh-lazy="image-background"
                                >
                                  Gi???m 10%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/thit-bap-hoa-bo-my-hang-usda-choice-loai-cao-cap"
                                  title="Th???t b???p hoa b?? M??? h???ng USDA Choice (lo???i cao c???p)"
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    data-src="https://cdn.5sfood.vn/media/san-pham-5s/bap-hoa-bo-my/choice-loai-cao-cap-thit-bap-hoa-bo-my-hang-usda.jpg"
                                    alt="Th???t b???p hoa b?? M??? h???ng USDA Choice (lo???i cao c???p)"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link href="/thit-bap-hoa-bo-my-hang-usda-choice-loai-cao-cap">
                                  <p>
                                    {" "}
                                    Th???t b???p hoa b?? M??? h???ng USDA Choice (lo???i
                                    cao c???p)
                                  </p>
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    359,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    399,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <Link
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  nh-btn-action="add-cart"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                >
                                  <div>
                                    {" "}
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            nh-product={38}
                            nh-product-item-id={52}
                            
                            className="product-item bg-white rounded-15"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="inner-image">
                              <div className="product-status" />
                              <div className="product-status-right">
                                <span
                                  className="giam-gia bg-product-status"
                                  nh-lazy="image-background"
                                >
                                  Gi???m 10%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/thit-de-suon-bo-my-rib-finger-beef-usda-choice-loai-cao-cap"
                                  title="Th???t d??? s?????n b?? M??? - Rib Finger Beef USDA Choice (lo???i cao c???p)"
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    data-src="https://cdn.5sfood.vn/media/san-pham-5s/de-suon-bo-my/choice-loai-cao-cap-thit-de-suon-bo-my-rib-finger-beef-usda-1.jpg"
                                    alt="Th???t d??? s?????n b?? M??? - Rib Finger Beef USDA Choice (lo???i cao c???p)"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link href="/thit-de-suon-bo-my-rib-finger-beef-usda-choice-loai-cao-cap">
                                  <p>
                                    {" "}
                                    Th???t d??? s?????n b?? M??? - Rib Finger Beef USDA
                                    ...
                                  </p>
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    429,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    479,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <div
                                  onClick={() =>
                                    addToCart({
                                      price: "429.000",
                                      quality: 1,
                                      id: "/thit-de-suon-bo-my-rib-finger-beef-usda-choice-loai-cao-cap",
                                      name: "Th???t d??? s?????n b?? M??? - Rib Finger Beef USDA Choice (lo???i cao c???p)",
                                      img: "https://cdn.5sfood.vn/media/san-pham-5s/de-suon-bo-my/choice-loai-cao-cap-thit-de-suon-bo-my-rib-finger-beef-usda-1.jpg",
                                      url: "/thit-de-suon-bo-my-rib-finger-beef-usda-choice-loai-cao-cap",
                                    })
                                  }
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                >
                                  <div>
                                    {" "}
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index={4}
                        id
                        aria-hidden="true"
                        style={{ width: "192px" }}
                      >
                        <div>
                          <div
                            nh-product={36}
                            nh-product-item-id={50}
                            
                            className="product-item bg-white rounded-15"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="inner-image">
                              <div className="product-status" />
                              <div className="product-status-right">
                                <span
                                  className="giam-gia bg-product-status"
                                  nh-lazy="image-background"
                                >
                                  Gi???m 10%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/suon-hoang-de-bo-my-usda-choice-loai-cao-cap"
                                  title="S?????n Ho??ng ????? b?? M??? USDA Choice (lo???i cao c???p)"
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    data-src="https://cdn.5sfood.vn/media/san-pham-5s/suon-hoang-de-bo-my/choice-loai-cao-cap-suon-hoang-de-bo-my.jpg"
                                    alt="S?????n Ho??ng ????? b?? M??? USDA Choice (lo???i cao c???p)"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link href="/suon-hoang-de-bo-my-usda-choice-loai-cao-cap">
                                  <p>
                                    {" "}
                                    S?????n Ho??ng ????? b?? M??? USDA Choice (lo???i cao
                                    c???p)
                                  </p>
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    529,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    589,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <Link
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  nh-btn-action="add-cart"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                >
                                  <div>
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div
                            nh-product={33}
                            nh-product-item-id={45}
                            
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
                                  Gi???m 10%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/thit-gau-bo-my-brisket-point-beef-usda-choice-loai-cao-cap"
                                  title="Th???t g???u b?? M??? - Brisket Point Beef USDA Choice (lo???i cao c???p)"
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    data-src="https://cdn.5sfood.vn/media/san-pham-5s/thit-gau-bo-my/choice-loai-cao-cap-thit-gau-bo-my-brisket-point-beef-usda.jpg"
                                    alt="Th???t g???u b?? M??? - Brisket Point Beef USDA Choice (lo???i cao c???p)"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link href="/thit-gau-bo-my-brisket-point-beef-usda-choice-loai-cao-cap">
                                  <p>
                                    Th???t g???u b?? M??? - Brisket Point Beef USDA ...
                                  </p>
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    339,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    379,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <Link
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  nh-btn-action="add-cart"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                >
                                  <div>
                                    {" "}
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                                  Gi???m 21%
                                </span>
                              </div>
                              <div className="wrp-effect-change-img ratio-custome">
                                <Link
                                  href="/ca-tuyet-nauy-fillet-norwegian-cod"
                                  title="C?? tuy???t Nauy fillet - Norwegian Cod"
                                >
                                  <img
                                    nh-lazy="image"
                                    className="img-fluid rounded-12"
                                    data-src="https://cdn.5sfood.vn/media/san-pham-5s/ca-tuyet-nauy/ca-tuyet-nauy-phi-le.jpg"
                                    alt="C?? tuy???t Nauy fillet - Norwegian Cod"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="inner-content">
                              <h4 className="product-title">
                                <Link href="/ca-tuyet-nauy-fillet-norwegian-cod">
                                  <p> C?? tuy???t Nauy fillet - Norwegian Cod</p>
                                </Link>
                              </h4>
                              <div className="product-rating-price">
                                <div className="price">
                                  <span className="price-amount">
                                    725,000
                                    <span className="currency-symbol">??</span>
                                  </span>
                                  <div className="price-amount old-price">
                                    915,000
                                    <span className="currency-symbol">??</span>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-5 mt-lg-10">
                                <Link
                                  className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                  nh-btn-action="add-cart"
                                  href="#"
                                  title="Th??m gi??? h??ng"
                                >
                                  <div>
                                    {" "}
                                    <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />
                                    Th??m gi??? h??ng
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
      </div>
    </>
  );
};
export default Banner1;
