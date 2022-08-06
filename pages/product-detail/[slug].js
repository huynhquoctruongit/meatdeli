import React, { Component } from "react";
import Link from "next/link";
import { productGQL, productDetailGQL } from "@/geters/products";
import { apollo } from "@/api/index";
import { convertCurrency } from "@/services/helper";
export async function getStaticPaths() {
  const { data } = await apollo.query({ query: productGQL });
  const paths = data?.products?.nodes?.map((element) => ({
    params: { slug: element?.slug },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const result = await apollo.query({
    query: productDetailGQL,
    variables: { slug: params?.slug },
  });
  const { product } = result?.data;

  if (!product) return { notfound: true };
  const productCategories = product?.productCategories?.nodes[0]?.products;

  return {
    props: { product, productCategories },
  };
}
const ProductDetail = ({ product, productCategories }) => {
  return (
    <div>
      <div nh-row="5eckual" className="bg-white mb-20">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="mz4eo5d" nh-block-cache="false" className>
                <nav className="breadcrumbs-section py-15">
                  <Link href="/">Trang chủ</Link>
                  <Link href="/thit-bo-my">
                    <span>{product?.productCategories?.nodes?.[0]?.name}</span>
                  </Link>
                  <h1>
                    <Link href="/thit-bap-hoa-bo-my-hang-usda-choice-loai-cao-cap">
                      <span>{product?.name}</span>
                    </Link>
                  </h1>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div nh-row="4n5fdgq" className="mb-15">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="jcqsxy5" nh-block-cache="false" className>
                <ol
                  data-toc="div.product-detail-footer"
                  data-toc-headings="h2,h3,h4"
                  className="mb-0"
                />
                <div className="product-detail-head">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="product-image-detail">
                        <div className="row">
                          <div className="col-lg-12 col-12 product-image-detail-top">
                            <div
                              nh-owl-slick='{"slidesToShow":1,"slidesToScroll":1,"infinite":false,"fade":true,"asNavFor":".slider-thumbs"}'
                              className="slider-main border bg-white slick-initialized slick-slider"
                              loaded={1}
                            >
                              <button
                                className="slick-prev slick-arrow slick-disabled"
                                aria-label="Previous"
                                type="button"
                                aria-disabled="true"
                                style={{}}
                              >
                                Previous
                              </button>
                              <div className="slick-list draggable">
                                <div
                                  className="slick-track"
                                  style={{ opacity: 1, width: "1412px" }}
                                >
                                  <div
                                    className="slick-slide slick-current slick-active"
                                    data-slick-index={0}
                                    aria-hidden="false"
                                    style={{
                                      width: "353px",
                                      position: "relative",
                                      left: "0px",
                                      top: "0px",
                                      zIndex: 999,
                                      opacity: 1,
                                    }}
                                    tabIndex={0}
                                  >
                                    <div className="inner-image">
                                      <img
                                        className="img-fluid"
                                        src={product?.image.sourceUrl}
                                        alt={product?.name}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide"
                                    data-slick-index={1}
                                    aria-hidden="true"
                                    style={{
                                      width: "353px",
                                      position: "relative",
                                      left: "-353px",
                                      top: "0px",
                                      zIndex: 998,
                                      opacity: 0,
                                    }}
                                    tabIndex={-1}
                                  >
                                    <div className="inner-image">
                                      <img
                                        className="img-fluid"
                                        src="https://cdn.5sfood.vn/media/san-pham-5s/bap-hoa-bo-my/choice-loai-cao-cap-thit-bap-hoa-bo-my-hang-usda-2.jpg"
                                        alt={product?.name}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide"
                                    data-slick-index={2}
                                    aria-hidden="true"
                                    style={{
                                      width: "353px",
                                      position: "relative",
                                      left: "-706px",
                                      top: "0px",
                                      zIndex: 998,
                                      opacity: 0,
                                    }}
                                    tabIndex={-1}
                                  >
                                    <div className="inner-image">
                                      <img
                                        className="img-fluid"
                                        src="https://cdn.5sfood.vn/media/san-pham-5s/bap-hoa-bo-my/choice-loai-cao-cap-thit-bap-hoa-bo-my-hang-usda-3.jpg"
                                        alt={product?.name}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide"
                                    data-slick-index={3}
                                    aria-hidden="true"
                                    style={{
                                      width: "353px",
                                      position: "relative",
                                      left: "-1059px",
                                      top: "0px",
                                      zIndex: 998,
                                      opacity: 0,
                                    }}
                                    tabIndex={-1}
                                  >
                                    <div className="inner-image">
                                      <img
                                        className="img-fluid"
                                        src="https://cdn.5sfood.vn/media/san-pham-5s/bap-hoa-bo-my/choice-loai-cao-cap-thit-bap-hoa-bo-my-hang-usda-4.jpg"
                                        alt={product?.name}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button
                                className="slick-next slick-arrow"
                                aria-label="Next"
                                type="button"
                                style={{}}
                                aria-disabled="false"
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="social-share mb-20">
                        <Link
                          className="facebook-icon px-15"
                          href="#"
                          nh-link-redirect="https://www.facebook.com/sharer/sharer.php?u=https://5sfood.vn/thit-bap-hoa-bo-my-hang-usda-choice-loai-cao-cap"
                          target="_blank"
                          title="Facebook"
                        >
                          <div className="facebook-icon px-15">
                            <span className="image-facebook">
                              <img
                                nh-lazy="image"
                                className="img-fluid"
                                src="https://5sfood.vn/templates/fashion02/assets/media/icon/icon_awesome-facebook-f_1.png"
                                style={{}}
                              />
                            </span>
                            <span className="facebook-share-title pl-25 color-main fs-12">
                              Chia sẻ Facebook
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div
                        nh-product-detail
                        nh-product={39}
                        nh-product-item-id={53}
                        nh-product-attribute-special
                        className="product-content-detail"
                      >
                        <div className="bg-white rounded-10 mb-10 p-15">
                          <h2 className="product-title-detail fs-17 fs-md-24 font-weight-bold">
                            {product?.name}
                          </h2>
                          <div className="code-review-link d-flex align-items-center flex-nowrap align-items-center">
                            <div className="code fs-14 color-gray">
                              <span>Mã SP:</span>
                              <span nh-label-code={2020016}>
                                {product?.databaseId}
                              </span>
                            </div>
                            <div className="color-main">
                              <span className="color-gray px-10">|</span>
                              <span className="color-gray">Tình trạng: </span>
                              {product?.status === "publish"
                                ? "Còn hàng"
                                : "Hết hàng"}
                            </div>
                          </div>
                          <div className="price ">
                            <strong className="fs-16">Giá: </strong>
                            <span
                              nh-label-price={359000}
                              className="price-amount fs-24 color-hightlight"
                            >
                              <span nh-label-value>
                                {convertCurrency(
                                  product?.productCategories?.nodes?.[0]
                                    ?.products?.nodes?.[0]?.salePrice
                                )}
                              </span>
                            </span>
                            <span
                              nh-label-price-special={399000}
                              className="price-amount old-price"
                            >
                              <span nh-label-value>
                                {convertCurrency(
                                  product?.productCategories?.nodes?.[0]
                                    ?.products?.nodes?.[0]?.price
                                )}
                              </span>
                            </span>
                            <span className="discount-detail">10%</span>
                          </div>
                        </div>
                        <div className="entire-cart ">
                          <div className="bg-white rounded-10 mb-10 p-15">
                            {/* <div className="d-flex align-items-center mb-10">
                              <strong className="fs-16 pr-15">Số lượng:</strong>
                              <div
                                nh-quantity-product="wrap"
                                className="product-quantity"
                              >
                                <span
                                  nh-quantity-product="subtract"
                                  className="btn-quantity"
                                >
                                  <i className="iconsax isax-minus" />
                                </span>
                                <input
                                  nh-quantity-product="quantity"
                                  defaultValue={1}
                                  className="text-center quantity-input events-none"
                                  type="text"
                                />
                                <span
                                  nh-quantity-product="add"
                                  className="btn-quantity"
                                >
                                  <i className="iconsax isax-add" />
                                </span>
                              </div>
                            </div> */}
                            <p className="font-italic color-gray m-0">
                              Do đặc tính sản phẩm nên trọng lượng thực tế có
                              thể chênh lệch so với số lượng bạn đặt hàng.
                              5sFood sẽ xác nhận với bạn khi có sự thay đổi
                            </p>
                          </div>
                          <div className="quantity-buy d-flex flex-sm-wrap flex-row bg-white rounded-10 mb-10 p-15">
                            <div className="btn-cart-buy d-flex flex-sm-wrap">
                              <Link
                                nh-btn-action="add-cart"
                                href="#"
                                className="add-to-cart rounded"
                              >
                                Thêm giỏ hàng
                              </Link>
                              <Link
                                nh-btn-action="add-cart"
                                nh-redirect="/order/checkout"
                                href="#"
                                className="add-to-cart add-to-cart-buy rounded"
                              >
                                Mua ngay
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fs-24 font-weight-bold mt-50 mb-20 color-black">
                  Thông tin sản phẩm
                </div>
                <div className="bg-white rounded-5 mb-10 p-15">
                  <div id="product-information" className="initialized">
                    <div
                      className="copy__inner"
                      dangerouslySetInnerHTML={{ __html: product?.description }}
                    ></div>
                    {/* <div className="copy__gradient" /> */}
                  </div>
                  {/* <div className="text-center">
                    <span className="more-less">Đọc tiếp</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div nh-row="t8o4f0u" className="mb-15">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="jfv3t9e" nh-block-cache="true" className="mb-20">
                <div className="tu-van rounded-10">
                  <div className="title-tuvan bg-white fs-15 font-weight-bold text-uppercase color-gray px-10">
                    Tư vấn đặt hàng
                  </div>
                  <div className="p-10">
                    <div className="tuvan-top d-flex mb-15 pb-15 border-bottom">
                      <img
                        nh-lazy="image"
                        className="img-fluid"
                        alt="icon"
                        src="https://5sfood.vn/templates/fashion02/assets/media/icon/support.png"
                        style={{}}
                      />
                      <span className="pl-20">
                        <strong className="m-0 color-hightlight fs-18">
                          0869.836.236
                        </strong>
                        <p className="m-0 fs-13">(Từ 8h - 19h30 hàng ngày)</p>
                      </span>
                    </div>
                    <div className="dichvu-item d-flex align-items-center mb-20">
                      <img
                        nh-lazy="image"
                        className="img-fluid"
                        alt="CHẤT LƯỢNG HÀNG ĐẦU"
                        src="https://5sfood.vn/templates/fashion02/assets/media/icon/icon-tuvan-1.png"
                        style={{}}
                      />
                      <span className="pl-15 fs-13">
                        <p className="m-0 text-uppercase fs-14">
                          CHẤT LƯỢNG HÀNG ĐẦU
                        </p>
                        Tiêu chuẩn Global GAP, 5s
                      </span>
                    </div>
                    <div className="dichvu-item d-flex align-items-center mb-20">
                      <img
                        nh-lazy="image"
                        className="img-fluid"
                        alt="Giao hàng tận nơi "
                        src="https://5sfood.vn/templates/fashion02/assets/media/icon/icon-tuvan-2.png"
                        style={{}}
                      />
                      <span className="pl-15 fs-13">
                        <p className="m-0 text-uppercase fs-14">
                          Giao hàng tận nơi{" "}
                        </p>
                        (Nhanh chóng sau 30 phút)
                      </span>
                    </div>
                    <div className="dichvu-item d-flex align-items-center mb-20">
                      <img
                        nh-lazy="image"
                        className="img-fluid"
                        alt="Miễn phí sơ chế"
                        src="https://5sfood.vn/templates/fashion02/assets/media/icon/icon-tuvan-3.png"
                        style={{}}
                      />
                      <span className="pl-15 fs-13">
                        <p className="m-0 text-uppercase fs-14">
                          Miễn phí sơ chế
                        </p>
                        cắt thái theo yêu cầu
                      </span>
                    </div>
                    <div className="dichvu-item d-flex align-items-center mb-20">
                      <img
                        nh-lazy="image"
                        className="img-fluid"
                        alt="Khách hàng thân thiết"
                        src="https://5sfood.vn/templates/fashion02/assets/media/icon/icon-tuvan-4.png"
                        style={{}}
                      />
                      <span className="pl-15 fs-13">
                        <p className="m-0 text-uppercase fs-14">
                          Khách hàng thân thiết
                        </p>
                        (Tích điểm)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                nh-block="fgq0mzw"
                nh-block-cache="true"
                className="title-right"
              >
                <div className="d-flex justify-content-between align-items-center mb-10 mb-xl-0">
                  <h3 className="title-section mb-0 mb-xl-10">
                    Sản phẩm cùng loại
                  </h3>
                </div>
                <div className="section-product-scoll">
                  <div className="row">
                    <div className="col-lg-12 col-md-6 col-6">
                      <div
                        nh-product={46}
                        nh-product-item-id={60}
                        nh-product-attribute-special
                        className="product-item bg-white rounded-15"
                      >
                        <div className="inner-image">
                          <div className="product-status" />
                          <div className="product-status-right" />
                          <div className="wrp-effect-change-img ratio-custome">
                            <Link
                              href="/suon-non-rut-xuong-bo-wagyu-snake-river-farms-srf"
                              title="Sườn non rút xương bò Wagyu Snake River Farms (SRF)"
                            >
                              <img
                                nh-lazy="image"
                                className="img-fluid rounded-12"
                                alt="Sườn non rút xương bò Wagyu Snake River Farms (SRF)"
                                src="https://cdn.5sfood.vn/media/san-pham-5s/suon-non-rut-xuong-bo-wagyu-srf/suon-non-rut-xuong-bo-wagyu-snake-river-farms-srf.jpg"
                                style={{}}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="inner-content">
                          <h4 className="product-title">
                            <Link href="/suon-non-rut-xuong-bo-wagyu-snake-river-farms-srf">
                              Sườn non rút xương bò Wagyu Snake River Farms ...
                            </Link>
                          </h4>
                          <div className="product-rating-price">
                            <div className="price">
                              <span className="price-amount">
                                2,135,000
                                <span className="currency-symbol">đ</span>
                              </span>
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
                                <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />{" "}
                                Thêm giỏ hàng
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-6">
                      <div
                        nh-product={45}
                        nh-product-item-id={59}
                        nh-product-attribute-special
                        className="product-item bg-white rounded-15"
                      >
                        <div className="inner-image">
                          <div className="product-status" />
                          <div className="product-status-right" />
                          <div className="wrp-effect-change-img ratio-custome">
                            <Link
                              href="/than-noi-bo-my-tenderloin-beef-usda-choice"
                              title="Thăn nội bò Mỹ - Tenderloin Beef USDA Choice (loại cao cấp)"
                            >
                              <img
                                nh-lazy="image"
                                className="img-fluid rounded-12"
                                alt="Thăn nội bò Mỹ - Tenderloin Beef USDA Choice (loại cao cấp)"
                                src="https://cdn.5sfood.vn/media/san-pham-5s/than-noi-bo-my/choice-loai-cao-cap-than-noi-bo-my-tenderloin-beef-usda.jpg"
                                style={{}}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="inner-content">
                          <h4 className="product-title">
                            <Link href="/than-noi-bo-my-tenderloin-beef-usda-choice">
                              Thăn nội bò Mỹ - Tenderloin Beef USDA Choice ...
                            </Link>
                          </h4>
                          <div className="product-rating-price">
                            <div className="price">
                              <span className="price-amount">
                                1,359,000
                                <span className="currency-symbol">đ</span>
                              </span>
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
                                <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />{" "}
                                Thêm giỏ hàng
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-6">
                      <div
                        nh-product={44}
                        nh-product-item-id={58}
                        nh-product-attribute-special
                        className="product-item bg-white rounded-15"
                      >
                        <div className="inner-image">
                          <div className="product-status" />
                          <div className="product-status-right" />
                          <div className="wrp-effect-change-img ratio-custome">
                            <Link
                              href="/than-ngoai-bo-my-striploin-beef-usda-choice-loai-cao-cap"
                              title="Thăn ngoại bò Mỹ - Striploin beef USDA Choice (loại cao cấp)"
                            >
                              <img
                                nh-lazy="image"
                                className="img-fluid rounded-12"
                                alt="Thăn ngoại bò Mỹ - Striploin beef USDA Choice (loại cao cấp)"
                                src="https://cdn.5sfood.vn/media/san-pham-5s/than-ngoai-bo-my/choice-loai-cao-cap-than-ngoai-bo-my-striploin-beef-usda.jpg"
                                style={{}}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="inner-content">
                          <h4 className="product-title">
                            <Link href="/than-ngoai-bo-my-striploin-beef-usda-choice-loai-cao-cap">
                              Thăn ngoại bò Mỹ - Striploin beef USDA Choice ...
                            </Link>
                          </h4>
                          <div className="product-rating-price">
                            <div className="price">
                              <span className="price-amount">
                                789,000
                                <span className="currency-symbol">đ</span>
                              </span>
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
                                <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />{" "}
                                Thêm giỏ hàng
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-6">
                      <div
                        nh-product={43}
                        nh-product-item-id={57}
                        nh-product-attribute-special
                        className="product-item bg-white rounded-15"
                      >
                        <div className="inner-image">
                          <div className="product-status" />
                          <div className="product-status-right" />
                          <div className="wrp-effect-change-img ratio-custome">
                            <Link
                              href="/than-lung-bo-my-rib-eye-beef-usda-choice-loai-cao-cap"
                              title="Thăn lưng bò Mỹ  - Rib Eye Beef USDA Choice (loại cao cấp)"
                            >
                              <img
                                nh-lazy="image"
                                className="img-fluid rounded-12"
                                alt="Thăn lưng bò Mỹ  - Rib Eye Beef USDA Choice (loại cao cấp)"
                                src="https://cdn.5sfood.vn/media/san-pham-5s/than-lung-bo-my/choice-loai-cao-cap-than-lung-bo-my-rib-eye-beef-usda.jpg"
                                style={{}}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="inner-content">
                          <h4 className="product-title">
                            <Link href="/than-lung-bo-my-rib-eye-beef-usda-choice-loai-cao-cap">
                              Thăn lưng bò Mỹ - Rib Eye Beef USDA Choice ...
                            </Link>
                          </h4>
                          <div className="product-rating-price">
                            <div className="price">
                              <span className="price-amount">
                                849,000
                                <span className="currency-symbol">đ</span>
                              </span>
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
                                <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />{" "}
                                Thêm giỏ hàng
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6 col-6">
                      <div
                        nh-product={42}
                        nh-product-item-id={56}
                        nh-product-attribute-special
                        className="product-item bg-white rounded-15"
                      >
                        <div className="inner-image">
                          <div className="product-status" />
                          <div className="product-status-right" />
                          <div className="wrp-effect-change-img ratio-custome">
                            <Link
                              href="/suon-non-bo-my-rut-xuong-short-rib-boneless-usda-choice-loai-cao-cap"
                              title="Sườn non bò Mỹ rút xương - Short Rib Boneless USDA Choice (loại cao cấp)"
                            >
                              <img
                                nh-lazy="image"
                                className="img-fluid rounded-12"
                                alt="Sườn non bò Mỹ rút xương - Short Rib Boneless USDA Choice (loại cao cấp)"
                                src="https://cdn.5sfood.vn/media/san-pham-5s/suon-non-bo-my-rut-xuong/choice-loai-cao-cap-suon-non-bo-my-rut-xuong-short-rib-boneless-usda.jpg"
                                style={{}}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="inner-content">
                          <h4 className="product-title">
                            <Link href="/suon-non-bo-my-rut-xuong-short-rib-boneless-usda-choice-loai-cao-cap">
                              Sườn non bò Mỹ rút xương - Short Rib Boneless ...
                            </Link>
                          </h4>
                          <div className="product-rating-price">
                            <div className="price">
                              <span className="price-amount">
                                1,115,000
                                <span className="currency-symbol">đ</span>
                              </span>
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
                                <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />{" "}
                                Thêm giỏ hàng
                              </div>
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
      </div>
      <div nh-row="isjawmp" className="mb-15">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="zdi3rma" nh-block-cache="false" className>
                <div
                  nh-comment='{"class":"","cache":"0","number_record":"10","sort_field":"created","login_required":"0","awaiting_approval":"0"}'
                  nh-anchor="comment"
                  className="comment-section"
                >
                  <div className="d-flex flex-column-reverse">
                    <ul
                      nh-list-comment
                      className="list-comment p-15 mb-10 rounded-5"
                    />
                    <b className="total-comment fs-24 font-weight-bold mt-20 mb-10 color-black">
                      <span nh-total-comment />
                      Bình luận
                    </b>
                  </div>
                  <div className="bg-white rounded-5 mb-10 p-15">
                    <div className="fs-16 title-binh-luan mb-20 pb-10">
                      <strong>Bình luận</strong>
                    </div>
                    <div nh-comment-info className="customer-info d-none">
                      <span nh-comment-change-info>
                        <i className="iconsax isax-lg isax-edit mr-5" />
                        <span nh-comment-fullname />
                      </span>
                    </div>
                    <div className="edit-comment">
                      <textarea
                        nh-input-comment
                        placeholder="Mời bạn để lại bình luận"
                        style={{ height: "66px", overflowY: "hidden" }}
                        defaultValue={""}
                      />
                      <div className="box-comment">
                        <label>
                          <span nh-trigger-upload>
                            <img
                              nh-lazy="image"
                              className="img-fluid"
                              alt="icon"
                              src="https://5sfood.vn/templates/fashion02/assets/media/icon/icon_feather-camera.png"
                              style={{}}
                            />
                          </span>
                        </label>
                        <input
                          nh-input-comment-images
                          name="files[]"
                          type="file"
                          className="d-none"
                          accept="image/jpeg, image/png"
                          multiple="multiple"
                        />
                      </div>
                      <span
                        nh-btn-send-comment
                        className="btn rounded-0 btn-submit rounded-5"
                      >
                        Gửi bình luận
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div nh-row="spv6cre" className="mb-20">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="ptkj46x" nh-block-cache="true" className>
                <div className="store-system bg-white p-15 rounded-10">
                  <div className="title-system font-weight-bold mb-10">
                    Hệ thống cửa hàng
                  </div>
                  <div id="system" className="content-system">
                    <div className="form-group validate-form">
                      <div className="dropdown bootstrap-select form-control input-hover">
                        <select
                          name="city_id"
                          id="city_id"
                          className="form-control selectpicker input-hover"
                          data-size={10}
                          data-live-search={1}
                          tabIndex={-98}
                        >
                          <option value>-- Tỉnh thành --</option>
                          <option value={1}>Hà Nội</option>
                          <option value={2}>Hà Giang</option>
                          <option value={4}>Cao Bằng</option>
                          <option value={6}>Bắc Kạn</option>
                          <option value={8}>Tuyên Quang</option>
                          <option value={10}>Lào Cai</option>
                          <option value={11}>Điện Biên</option>
                          <option value={12}>Lai Châu</option>
                          <option value={14}>Sơn La</option>
                          <option value={15}>Yên Bái</option>
                          <option value={17}>Hòa Bình</option>
                          <option value={19}>Thái Nguyên</option>
                          <option value={20}>Lạng Sơn</option>
                          <option value={22}>Quảng Ninh</option>
                          <option value={24}>Bắc Giang</option>
                          <option value={25}>Phú Thọ</option>
                          <option value={26}>Vĩnh Phúc</option>
                          <option value={27}>Bắc Ninh</option>
                          <option value={30}>Hải Dương</option>
                          <option value={31}>Hải Phòng</option>
                          <option value={33}>Hưng Yên</option>
                          <option value={34}>Thái Bình</option>
                          <option value={35}>Hà Nam</option>
                          <option value={36}>Nam Định</option>
                          <option value={37}>Ninh Bình</option>
                          <option value={38}>Thanh Hóa</option>
                          <option value={40}>Nghệ An</option>
                          <option value={42}>Hà Tĩnh</option>
                          <option value={44}>Quảng Bình</option>
                          <option value={45}>Quảng Trị</option>
                          <option value={46}>Thừa Thiên Huế</option>
                          <option value={48}>Đà Nẵng</option>
                          <option value={49}>Quảng Nam</option>
                          <option value={51}>Quảng Ngãi</option>
                          <option value={52}>Bình Định</option>
                          <option value={54}>Phú Yên</option>
                          <option value={56}>Khánh Hòa</option>
                          <option value={58}>Ninh Thuận</option>
                          <option value={60}>Bình Thuận</option>
                          <option value={62}>Kon Tum</option>
                          <option value={64}>Gia Lai</option>
                          <option value={66}>Đắk Lắk</option>
                          <option value={67}>Đắk Nông</option>
                          <option value={68}>Lâm Đồng</option>
                          <option value={70}>Bình Phước</option>
                          <option value={72}>Tây Ninh</option>
                          <option value={74}>Bình Dương</option>
                          <option value={75}>Đồng Nai</option>
                          <option value={77}>Bà Rịa - Vũng Tàu</option>
                          <option value={79}>Hồ Chí Minh</option>
                          <option value={80}>Long An</option>
                          <option value={82}>Tiền Giang</option>
                          <option value={83}>Bến Tre</option>
                          <option value={84}>Trà Vinh</option>
                          <option value={86}>Vĩnh Long</option>
                          <option value={87}>Đồng Tháp</option>
                          <option value={89}>An Giang</option>
                          <option value={91}>Kiên Giang</option>
                          <option value={92}>Cần Thơ</option>
                          <option value={93}>Hậu Giang</option>
                          <option value={94}>Sóc Trăng</option>
                          <option value={95}>Bạc Liêu</option>
                          <option value={96}>Cà Mau</option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light bs-placeholder"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-1"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-id="city_id"
                          title="-- Tỉnh thành --"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                -- Tỉnh thành --
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div
                          className="dropdown-menu"
                          style={{ maxHeight: "333px", overflow: "hidden" }}
                        >
                          <div className="bs-searchbox">
                            <input
                              type="search"
                              className="form-control"
                              autoComplete="off"
                              role="combobox"
                              aria-label="Search"
                              aria-controls="bs-select-1"
                              aria-autocomplete="list"
                              aria-activedescendant="bs-select-1-0"
                            />
                          </div>
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-1"
                            tabIndex={-1}
                            style={{ maxHeight: "290px", overflowY: "auto" }}
                          >
                            <ul
                              className="dropdown-menu inner show"
                              role="presentation"
                              style={{
                                marginTop: "0px",
                                marginBottom: "0px",
                              }}
                            >
                              <li className="selected active">
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item active selected"
                                  id="bs-select-1-0"
                                  tabIndex={0}
                                  aria-setsize={64}
                                  aria-posinset={1}
                                  aria-selected="true"
                                >
                                  <span className="text">-- Tỉnh thành --</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-1"
                                  tabIndex={0}
                                >
                                  <span className="text">Hà Nội</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-2"
                                  tabIndex={0}
                                  href="#"
                                >
                                  <span className="text">Hà Giang</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-3"
                                  tabIndex={0}
                                  href="#"
                                >
                                  <span className="text">Cao Bằng</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-4"
                                  tabIndex={0}
                                >
                                  <span className="text">Bắc Kạn</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-5"
                                  tabIndex={0}
                                >
                                  <span className="text">Tuyên Quang</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-6"
                                  tabIndex={0}
                                >
                                  <span className="text">Lào Cai</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-7"
                                  tabIndex={0}
                                >
                                  <span className="text">Điện Biên</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-8"
                                  tabIndex={0}
                                >
                                  <span className="text">Lai Châu</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-9"
                                  tabIndex={0}
                                >
                                  <span className="text">Sơn La</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-10"
                                  tabIndex={0}
                                >
                                  <span className="text">Yên Bái</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-11"
                                  tabIndex={0}
                                >
                                  <span className="text">Hòa Bình</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-12"
                                  tabIndex={0}
                                >
                                  <span className="text">Thái Nguyên</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-13"
                                  tabIndex={0}
                                >
                                  <span className="text">Lạng Sơn</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-14"
                                  tabIndex={0}
                                >
                                  <span className="text">Quảng Ninh</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-15"
                                  tabIndex={0}
                                >
                                  <span className="text">Bắc Giang</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-16"
                                  tabIndex={0}
                                >
                                  <span className="text">Phú Thọ</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-17"
                                  tabIndex={0}
                                >
                                  <span className="text">Vĩnh Phúc</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-18"
                                  tabIndex={0}
                                >
                                  <span className="text">Bắc Ninh</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-19"
                                  tabIndex={0}
                                >
                                  <span className="text">Hải Dương</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-20"
                                  tabIndex={0}
                                >
                                  <span className="text">Hải Phòng</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-21"
                                  tabIndex={0}
                                >
                                  <span className="text">Hưng Yên</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-22"
                                  tabIndex={0}
                                >
                                  <span className="text">Thái Bình</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-23"
                                  tabIndex={0}
                                >
                                  <span className="text">Hà Nam</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-24"
                                  tabIndex={0}
                                >
                                  <span className="text">Nam Định</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-25"
                                  tabIndex={0}
                                >
                                  <span className="text">Ninh Bình</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-26"
                                  tabIndex={0}
                                >
                                  <span className="text">Thanh Hóa</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-27"
                                  tabIndex={0}
                                >
                                  <span className="text">Nghệ An</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-28"
                                  tabIndex={0}
                                >
                                  <span className="text">Hà Tĩnh</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-29"
                                  tabIndex={0}
                                >
                                  <span className="text">Quảng Bình</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-30"
                                  tabIndex={0}
                                >
                                  <span className="text">Quảng Trị</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-31"
                                  tabIndex={0}
                                >
                                  <span className="text">Thừa Thiên Huế</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-32"
                                  tabIndex={0}
                                >
                                  <span className="text">Đà Nẵng</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-33"
                                  tabIndex={0}
                                >
                                  <span className="text">Quảng Nam</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-34"
                                  tabIndex={0}
                                >
                                  <span className="text">Quảng Ngãi</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-35"
                                  tabIndex={0}
                                >
                                  <span className="text">Bình Định</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-36"
                                  tabIndex={0}
                                >
                                  <span className="text">Phú Yên</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-37"
                                  tabIndex={0}
                                >
                                  <span className="text">Khánh Hòa</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-38"
                                  tabIndex={0}
                                >
                                  <span className="text">Ninh Thuận</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-39"
                                  tabIndex={0}
                                >
                                  <span className="text">Bình Thuận</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-40"
                                  tabIndex={0}
                                >
                                  <span className="text">Kon Tum</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-41"
                                  tabIndex={0}
                                >
                                  <span className="text">Gia Lai</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-42"
                                  tabIndex={0}
                                >
                                  <span className="text">Đắk Lắk</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-43"
                                  tabIndex={0}
                                >
                                  <span className="text">Đắk Nông</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-44"
                                  tabIndex={0}
                                >
                                  <span className="text">Lâm Đồng</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-45"
                                  tabIndex={0}
                                >
                                  <span className="text">Bình Phước</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-46"
                                  tabIndex={0}
                                >
                                  <span className="text">Tây Ninh</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-47"
                                  tabIndex={0}
                                >
                                  <span className="text">Bình Dương</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-48"
                                  tabIndex={0}
                                >
                                  <span className="text">Đồng Nai</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-49"
                                  tabIndex={0}
                                >
                                  <span className="text">
                                    Bà Rịa - Vũng Tàu
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-50"
                                  tabIndex={0}
                                >
                                  <span className="text">Hồ Chí Minh</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-51"
                                  tabIndex={0}
                                >
                                  <span className="text">Long An</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  role="option"
                                  className="dropdown-item"
                                  id="bs-select-1-52"
                                  tabIndex={0}
                                >
                                  <span className="text">Tiền Giang</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  href="#"
                                  className="dropdown-item"
                                  id="bs-select-1-53"
                                  tabIndex={0}
                                >
                                  <span className="text">Bến Tre</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  href="#"
                                  className="dropdown-item"
                                  id="bs-select-1-54"
                                  tabIndex={0}
                                >
                                  <span className="text">Trà Vinh</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  href="#"
                                  className="dropdown-item"
                                  id="bs-select-1-55"
                                  tabIndex={0}
                                >
                                  <span className="text">Vĩnh Long</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  href="#"
                                  className="dropdown-item"
                                  id="bs-select-1-56"
                                  tabIndex={0}
                                >
                                  <span className="text">Đồng Tháp</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  href="#"
                                  className="dropdown-item"
                                  id="bs-select-1-57"
                                  tabIndex={0}
                                >
                                  <span className="text">An Giang</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  href="#"
                                  className="dropdown-item"
                                  id="bs-select-1-58"
                                  tabIndex={0}
                                >
                                  <span className="text">Kiên Giang</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  href="#"
                                  className="dropdown-item"
                                  id="bs-select-1-59"
                                  tabIndex={0}
                                >
                                  <span className="text">Cần Thơ</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  href="#"
                                  className="dropdown-item"
                                  id="bs-select-1-60"
                                  tabIndex={0}
                                >
                                  <span className="text">Hậu Giang</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  href="#"
                                  className="dropdown-item"
                                  id="bs-select-1-61"
                                  tabIndex={0}
                                >
                                  <span className="text">Sóc Trăng</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  href="#"
                                  className="dropdown-item"
                                  id="bs-select-1-62"
                                  tabIndex={0}
                                >
                                  <span className="text">Bạc Liêu</span>
                                </Link>
                              </li>
                              <li>
                                <Link
                                  role="option"
                                  href="#"
                                  className="dropdown-item"
                                  id="bs-select-1-63"
                                  tabIndex={0}
                                >
                                  <span className="text">Cà Mau</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group validate-form">
                      <div className="dropdown bootstrap-select form-control input-hover">
                        <select
                          name="district_id"
                          id="district_id"
                          className="form-control selectpicker input-hover"
                          data-size={10}
                          data-live-search={1}
                          tabIndex={-98}
                        >
                          <option value>-- Quận huyện --</option>
                        </select>
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light bs-placeholder"
                          data-toggle="dropdown"
                          role="combobox"
                          aria-owns="bs-select-2"
                          aria-haspopup="listbox"
                          aria-expanded="false"
                          data-id="district_id"
                          title="-- Quận huyện --"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                -- Quận huyện --
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div className="dropdown-menu ">
                          <div className="bs-searchbox">
                            <input
                              type="search"
                              className="form-control"
                              autoComplete="off"
                              role="combobox"
                              aria-label="Search"
                              aria-controls="bs-select-2"
                              aria-autocomplete="list"
                            />
                          </div>
                          <div
                            className="inner show"
                            role="listbox"
                            id="bs-select-2"
                            tabIndex={-1}
                          >
                            <ul
                              className="dropdown-menu inner show"
                              role="presentation"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      list-data="shop"
                      className="address border p-10 rounded"
                    >
                      <div
                        className="form-check form-check-inline align-items-start mr-0 col-lg-12 col-md-12 col-12"
                        data-shop='{"id":5,"name":"5s food qu\u1eadn 1","phone":"09201920190","email":null,"city_id":79,"address":"135 Nam K\u1ef3 Kh\u1edfi Ngh\u0129a, ph\u01b0\u1eddng B\u1ebfn Th\u00e0nh, Qu\u1eadn 1, TP. HCM","created":1650880126,"updated":1650880126,"position":1,"status":1}'
                      >
                        <input
                          className="form-check-input mr-10"
                          type="radio"
                          name="address_shop"
                          id="address_5"
                          defaultValue={5}
                          data-address="135 Nam Kỳ Khởi Nghĩa, phường Bến Thành, Quận 1, TP. HCM"
                        />
                        <label
                          className="form-check-label font-weight-normal"
                          htmlFor="address_5"
                        >
                          5s food quận 1
                        </label>
                      </div>
                      <div
                        className="form-check form-check-inline align-items-start mr-0 col-lg-12 col-md-12 col-12"
                        data-shop='{"id":4,"name":"5s food l\u00e1ng h\u1ea1","phone":"0966659999","email":null,"city_id":1,"address":"97 99 L\u00e1ng H\u1ea1, \u0110\u1ed1ng \u0110a, H\u00e0 N\u1ed9i","created":1650622322,"updated":1650622835,"position":1,"status":1}'
                      >
                        <input
                          className="form-check-input mr-10"
                          type="radio"
                          name="address_shop"
                          id="address_4"
                          defaultValue={4}
                          data-address="97 99 Láng Hạ, Đống Đa, Hà Nội"
                        />
                        <label
                          className="form-check-label font-weight-normal"
                          htmlFor="address_4"
                        >
                          5s food láng hạ
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div nh-row="hvauop7" className>
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="tcy8g9q" nh-block-cache="true" className>
                <div className="address-map">
                  <div className="map">
                    <iframe
                      // src="https://maps.google.com/maps?hl=en&q=135 Nam Kỳ Khởi Nghĩa, phường Bến Thành, Quận 1, TP. HCM&t=p&z=14&ie=UTF8&iwloc=B&output=embed"
                      width={600}
                      height={450}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
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
export default ProductDetail;
