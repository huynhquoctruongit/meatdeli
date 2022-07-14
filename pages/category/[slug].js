import React, { Component } from "react";
import Link from "next/link";
export default class Category extends Component {
  render() {
    return (
      <div>
        <div nh-row="rd0zqgv" className>
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <div nh-block="mz4eo5d" nh-block-cache="false" className>
                  <nav className="breadcrumbs-section py-15">
                    <Link href="/">Trang chủ</Link>
                    <h1>
                      <Link href="/thit-nhap-khau">
                        <span>Thịt nhập khẩu</span>
                      </Link>
                    </h1>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div nh-row="2ijfh7t" className>
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <div nh-block="yzp8of0" nh-block-cache="false" className>
                  <div className="category-content ">
                    <div className="fs-15 fs-lg-20 font-weight-bold mb-15 bg-white rounded p-15">
                      Thịt nhập khẩu
                    </div>
                    <div
                      id="content-product"
                      className="bg-white rounded p-15 mb-15"
                    >
                      <div className="content-main">
                        <p>
                          <strong>5sfood.vn</strong>&nbsp;đặt tiêu chí&nbsp;
                          <strong>Chất lượng Sản Phẩm</strong>&nbsp;và&nbsp;
                          <strong>Dịch Vụ Khách Hàng 5 Sao</strong>&nbsp;lên
                          hàng đầu, và luôn nỗ lực tốt hơn từng ngày để cung cấp
                          đến tay khách hàng những sản phẩm Tươi Ngon Nhất - An
                          Toàn Nhất - Chất Lượng Nhất.
                        </p>
                        <p>
                          <strong>5sfood.vn</strong>&nbsp;nhập khẩu trực tiếp từ
                          các nước hàng đầu trên thế giới về các ngành hàng thủy
                          hải sản, thịt bò tươi sống, đông lạnh như: Nauy, Mỹ,
                          Nhật, Úc… cùng nhiều ngành hàng hấp dẫn khác như
                          Sashimi, Sushi, các loại sốt, sản phẩm Ready to Eat/
                          Cook…
                        </p>
                        <p>
                          <strong>5sfood.vn</strong>&nbsp;cam kết:
                        </p>
                        <ul>
                          <li aria-level={1}>Giao Hàng 2H.</li>
                          <li aria-level={1}>
                            Đổi Trả Miễn Phí tại nhà nhanh chóng.
                          </li>
                          <li aria-level={1}>
                            Miễn phí vận chuyển cho đơn hàng từ 500k trong bán
                            kính 3 km.
                          </li>
                          <li aria-level={1}>
                            Sản phẩm an toàn, nguồn gốc rõ ràng.
                          </li>
                        </ul>
                        <p>
                          Với phương châm Khách Hàng là trung tâm trong mọi hành
                          động,&nbsp;<strong>5sfood.vn</strong>&nbsp;liên tục
                          cải tiến để mang đến những trải nghiệm mua sắm cao
                          cấp.
                        </p>
                        <p>
                          <strong>5sfood.vn</strong>&nbsp;đáp ứng đầy đủ cho Quý
                          Khách các nhu cầu từ ăn tại văn phòng, nấu nướng hằng
                          ngày, đến những bữa tiệc gia đình thân mật, và lớn hơn
                          nữa.
                        </p>
                        <p>
                          Hãy gọi điện ngay cho&nbsp;<strong>5sfood.vn</strong>
                          &nbsp;khi bạn cần nhé. Hotline&nbsp;
                          <strong>0869.836.236.</strong>
                        </p>
                      </div>

                      <div className="load-more text-center mt-20">
                        <div className="btn btn-view-all btn-show  border">
                          <div>
                            Xem thêm{" "}
                            <i className="iconsax isax-arrow-down pl-10" />
                          </div>
                        </div>
                        <div className="btn btn-view-all btn-hide border">
                          <div>
                            Thu gọn
                            <i className="iconsax isax-arrow-up-3 pl-10" />
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
        <div nh-row="ia65esy" className>
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <div
                  nh-block="jn5e9x4"
                  nh-block-cache="false"
                  className="mb-15"
                >
                  <div className="d-flex flex-wrap justify-content-end bg-white p-15 rounded align-items-center">
                    <div className="title-solf mr-15">Săp xếp theo:</div>
                    <div className="per-page-section  mr-5 rounded border">
                      <div className="dropdown ">
                        <span
                          className="orderby-title d-flex justify-content-between align-items-center"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span>Sản phẩm</span>
                          <i className="pl-20 iconsax isax-arrow-down-1" />
                        </span>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            className="dropdown-item"
                            href="#"
                            nh-link-redirect="/thit-nhap-khau?limit=12"
                          >
                            12 Sản phẩm
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="#"
                            nh-link-redirect="/thit-nhap-khau?limit=24"
                          >
                            24 Sản phẩm
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="#"
                            nh-link-redirect="/thit-nhap-khau?limit=36"
                          >
                            36 Sản phẩm
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="per-page-section rounded border">
                      <div className="dropdown ">
                        <span
                          className="orderby-title d-flex justify-content-between align-items-center"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span>Sắp xếp</span>
                          <i className="pl-20 iconsax isax-arrow-down-1" />
                        </span>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            className="dropdown-item"
                            href="#"
                            nh-link-redirect="/thit-nhap-khau?sort=name-asc"
                          >
                            Sắp xếp theo tên
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="#"
                            nh-link-redirect="/thit-nhap-khau?sort=price-asc"
                          >
                            Giá từ thấp đến cao
                          </Link>
                          <Link
                            className="dropdown-item"
                            href="#"
                            nh-link-redirect="/thit-nhap-khau?sort=price"
                          >
                            Giá từ cao đến thấp
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
        <div nh-row="14t0svn" className="pb-15">
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <div
                  nh-block="wo8nl63"
                  nh-block-cache="false"
                  className="list-product-cat"
                >
                  <div className="d-flex justify-content-between align-items-center  mb-xl-0" />
                  <div className="section-product-scoll">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-6">
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
                                Sườn non rút xương bò Wagyu Snake River Farms
                                ...
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
                      <div className="col-lg-3 col-md-6 col-6">
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
                      <div className="col-lg-3 col-md-6 col-6">
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
                                Thăn ngoại bò Mỹ - Striploin beef USDA Choice
                                ...
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
                      <div className="col-lg-3 col-md-6 col-6">
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
                      <div className="col-lg-3 col-md-6 col-6">
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
                                Sườn non bò Mỹ rút xương - Short Rib Boneless
                                ...
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
                      <div className="col-lg-3 col-md-6 col-6">
                        <div
                          nh-product={41}
                          nh-product-item-id={55}
                          nh-product-attribute-special
                          className="product-item bg-white rounded-15"
                        >
                          <div className="inner-image">
                            <div className="product-status" />
                            <div className="product-status-right" />
                            <div className="wrp-effect-change-img ratio-custome">
                              <Link
                                href="/suon-non-bo-my-co-xuong-short-rib-bone-in-usda-choice-loai-cao-cap"
                                title="Sườn non bò Mỹ có xương - Short Rib Bone In USDA Choice (loại cao cấp)"
                              >
                                <img
                                  nh-lazy="image"
                                  className="img-fluid rounded-12"
                                  alt="Sườn non bò Mỹ có xương - Short Rib Bone In USDA Choice (loại cao cấp)"
                                  src="https://cdn.5sfood.vn/media/san-pham-5s/suon-non-bo-my-co-xuong/choice-loai-cao-cap-suon-non-bo-my-co-xuong-short-rib-bone-in-usda.jpg"
                                  style={{}}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="inner-content">
                            <h4 className="product-title">
                              <Link href="/suon-non-bo-my-co-xuong-short-rib-bone-in-usda-choice-loai-cao-cap">
                                Sườn non bò Mỹ có xương - Short Rib Bone In ...
                              </Link>
                            </h4>
                            <div className="product-rating-price">
                              <div className="price">
                                <span className="price-amount">
                                  525,000
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
                      <div className="col-lg-3 col-md-6 col-6">
                        <div
                          nh-product={40}
                          nh-product-item-id={54}
                          nh-product-attribute-special
                          className="product-item bg-white rounded-15"
                        >
                          <div className="inner-image">
                            <div className="product-status" />
                            <div className="product-status-right" />
                            <div className="wrp-effect-change-img ratio-custome">
                              <Link
                                href="/thit-diem-than-bo-my-outside-skirt-usda-choice-loai-cao-cap"
                                title="Thịt diềm thăn bò Mỹ - Outside Skirt USDA Choice (loại cao cấp)"
                              >
                                <img
                                  nh-lazy="image"
                                  className="img-fluid rounded-12"
                                  alt="Thịt diềm thăn bò Mỹ - Outside Skirt USDA Choice (loại cao cấp)"
                                  src="https://cdn.5sfood.vn/media/san-pham-5s/thit-diem-than-bo-my/choice-loai-cao-cap-thit-diem-than-bo-my-outside-skirt-usda.jpg"
                                  style={{}}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="inner-content">
                            <h4 className="product-title">
                              <Link href="/thit-diem-than-bo-my-outside-skirt-usda-choice-loai-cao-cap">
                                Thịt diềm thăn bò Mỹ - Outside Skirt USDA ...
                              </Link>
                            </h4>
                            <div className="product-rating-price">
                              <div className="price">
                                <span className="price-amount">
                                  699,000
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
                      <div className="col-lg-3 col-md-6 col-6">
                        <div
                          nh-product={39}
                          nh-product-item-id={53}
                          nh-product-attribute-special
                          className="product-item bg-white rounded-15"
                        >
                          <div className="inner-image">
                            <div className="product-status" />
                            <div className="product-status-right">
                              <span
                                className="giam-gia bg-product-status"
                                nh-lazy="image-background"
                                style={{
                                  backgroundImage:
                                    'url("/templates/fashion02/assets/media/icon/bg-sale.png")',
                                }}
                              >
                                Giảm 10%
                              </span>
                            </div>
                            <div className="wrp-effect-change-img ratio-custome">
                              <Link
                                href="/thit-bap-hoa-bo-my-hang-usda-choice-loai-cao-cap"
                                title="Thịt bắp hoa bò Mỹ hạng USDA Choice (loại cao cấp)"
                              >
                                <img
                                  nh-lazy="image"
                                  className="img-fluid rounded-12"
                                  alt="Thịt bắp hoa bò Mỹ hạng USDA Choice (loại cao cấp)"
                                  src="https://cdn.5sfood.vn/media/san-pham-5s/bap-hoa-bo-my/choice-loai-cao-cap-thit-bap-hoa-bo-my-hang-usda.jpg"
                                  style={{}}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="inner-content">
                            <h4 className="product-title">
                              <Link href="/thit-bap-hoa-bo-my-hang-usda-choice-loai-cao-cap">
                                Thịt bắp hoa bò Mỹ hạng USDA Choice (loại cao
                                cấp)
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
                      <div className="col-lg-3 col-md-6 col-6">
                        <div
                          nh-product={38}
                          nh-product-item-id={52}
                          nh-product-attribute-special
                          className="product-item bg-white rounded-15"
                        >
                          <div className="inner-image">
                            <div className="product-status" />
                            <div className="product-status-right">
                              <span
                                className="giam-gia bg-product-status"
                                nh-lazy="image-background"
                                style={{
                                  backgroundImage:
                                    'url("/templates/fashion02/assets/media/icon/bg-sale.png")',
                                }}
                              >
                                Giảm 10%
                              </span>
                            </div>
                            <div className="wrp-effect-change-img ratio-custome">
                              <Link
                                href="/thit-de-suon-bo-my-rib-finger-beef-usda-choice-loai-cao-cap"
                                title="Thịt dẻ sườn bò Mỹ - Rib Finger Beef USDA Choice (loại cao cấp)"
                              >
                                <img
                                  nh-lazy="image"
                                  className="img-fluid rounded-12"
                                  alt="Thịt dẻ sườn bò Mỹ - Rib Finger Beef USDA Choice (loại cao cấp)"
                                  src="https://cdn.5sfood.vn/media/san-pham-5s/de-suon-bo-my/choice-loai-cao-cap-thit-de-suon-bo-my-rib-finger-beef-usda-1.jpg"
                                  style={{}}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="inner-content">
                            <h4 className="product-title">
                              <Link href="/thit-de-suon-bo-my-rib-finger-beef-usda-choice-loai-cao-cap">
                                Thịt dẻ sườn bò Mỹ - Rib Finger Beef USDA ...
                              </Link>
                            </h4>
                            <div className="product-rating-price">
                              <div className="price">
                                <span className="price-amount">
                                  429,000
                                  <span className="currency-symbol">đ</span>
                                </span>
                                <div className="price-amount old-price">
                                  479,000
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
                                  <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />{" "}
                                  Thêm giỏ hàng
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-6">
                        <div
                          nh-product={37}
                          nh-product-item-id={51}
                          nh-product-attribute-special
                          className="product-item bg-white rounded-15"
                        >
                          <div className="inner-image">
                            <div className="product-status" />
                            <div className="product-status-right" />
                            <div className="wrp-effect-change-img ratio-custome">
                              <Link
                                href="/thit-nac-vai-bo-my-chuck-eye-roll-usda-choice-loai-cao-cap"
                                title="Thịt nạc vai bò Mỹ - Chuck Eye Roll USDA Choice (loại cao cấp)"
                              >
                                <img
                                  nh-lazy="image"
                                  className="img-fluid rounded-12"
                                  alt="Thịt nạc vai bò Mỹ - Chuck Eye Roll USDA Choice (loại cao cấp)"
                                  src="https://cdn.5sfood.vn/media/san-pham-5s/thit-nac-vai-bo-my/choice-loai-cao-cap-thit-nac-vai-bo-my-chuck-eye-roll-usda.jpg"
                                  style={{}}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="inner-content">
                            <h4 className="product-title">
                              <Link href="/thit-nac-vai-bo-my-chuck-eye-roll-usda-choice-loai-cao-cap">
                                Thịt nạc vai bò Mỹ - Chuck Eye Roll USDA ...
                              </Link>
                            </h4>
                            <div className="product-rating-price">
                              <div className="price">
                                <span className="price-amount">
                                  349,000
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
                      <div className="col-lg-3 col-md-6 col-6">
                        <div
                          nh-product={36}
                          nh-product-item-id={50}
                          nh-product-attribute-special
                          className="product-item bg-white rounded-15"
                        >
                          <div className="inner-image">
                            <div className="product-status" />
                            <div className="product-status-right">
                              <span
                                className="giam-gia bg-product-status"
                                nh-lazy="image-background"
                                style={{
                                  backgroundImage:
                                    'url("/templates/fashion02/assets/media/icon/bg-sale.png")',
                                }}
                              >
                                Giảm 10%
                              </span>
                            </div>
                            <div className="wrp-effect-change-img ratio-custome">
                              <Link
                                href="/suon-hoang-de-bo-my-usda-choice-loai-cao-cap"
                                title="Sườn Hoàng Đế bò Mỹ USDA Choice (loại cao cấp)"
                              >
                                <img
                                  nh-lazy="image"
                                  className="img-fluid rounded-12"
                                  alt="Sườn Hoàng Đế bò Mỹ USDA Choice (loại cao cấp)"
                                  src="https://cdn.5sfood.vn/media/san-pham-5s/suon-hoang-de-bo-my/choice-loai-cao-cap-suon-hoang-de-bo-my.jpg"
                                  style={{}}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="inner-content">
                            <h4 className="product-title">
                              <Link href="/suon-hoang-de-bo-my-usda-choice-loai-cao-cap">
                                Sườn Hoàng Đế bò Mỹ USDA Choice (loại cao cấp)
                              </Link>
                            </h4>
                            <div className="product-rating-price">
                              <div className="price">
                                <span className="price-amount">
                                  529,000
                                  <span className="currency-symbol">đ</span>
                                </span>
                                <div className="price-amount old-price">
                                  589,000
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
                                  <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />{" "}
                                  Thêm giỏ hàng
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-6">
                        <div
                          nh-product={33}
                          nh-product-item-id={45}
                          nh-product-attribute-special
                          className="product-item bg-white rounded-15"
                        >
                          <div className="inner-image">
                            <div className="product-status" />
                            <div className="product-status-right">
                              <span
                                className="giam-gia bg-product-status"
                                nh-lazy="image-background"
                                style={{
                                  backgroundImage:
                                    'url("/templates/fashion02/assets/media/icon/bg-sale.png")',
                                }}
                              >
                                Giảm 10%
                              </span>
                            </div>
                            <div className="wrp-effect-change-img ratio-custome">
                              <Link
                                href="/thit-gau-bo-my-brisket-point-beef-usda-choice-loai-cao-cap"
                                title="Thịt gầu bò Mỹ - Brisket Point Beef USDA Choice (loại cao cấp)"
                              >
                                <img
                                  nh-lazy="image"
                                  className="img-fluid rounded-12"
                                  alt="Thịt gầu bò Mỹ - Brisket Point Beef USDA Choice (loại cao cấp)"
                                  src="https://cdn.5sfood.vn/media/san-pham-5s/thit-gau-bo-my/choice-loai-cao-cap-thit-gau-bo-my-brisket-point-beef-usda.jpg"
                                  style={{}}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="inner-content">
                            <h4 className="product-title">
                              <Link href="/thit-gau-bo-my-brisket-point-beef-usda-choice-loai-cao-cap">
                                Thịt gầu bò Mỹ - Brisket Point Beef USDA ...
                              </Link>
                            </h4>
                            <div className="product-rating-price">
                              <div className="price">
                                <span className="price-amount">
                                  339,000
                                  <span className="currency-symbol">đ</span>
                                </span>
                                <div className="price-amount old-price">
                                  379,000
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
                                  <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />{" "}
                                  Thêm giỏ hàng
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-6">
                        <div
                          nh-product={32}
                          nh-product-item-id={124}
                          nh-product-attribute-special
                          className="product-item bg-white rounded-15"
                        >
                          <div className="inner-image">
                            <div className="product-status" />
                            <div className="product-status-right" />
                            <div className="wrp-effect-change-img ratio-custome">
                              <Link
                                href="/than-loi-nac-vai-bo-my-top-blade-beef-usda-choice-loai-cao-cap"
                                title="Thăn lõi nạc vai bò Mỹ - Top blade Beef USDA Choice (loại cao cấp)"
                              >
                                <img
                                  nh-lazy="image"
                                  className="img-fluid rounded-12"
                                  alt="Thăn lõi nạc vai bò Mỹ - Top blade Beef USDA Choice (loại cao cấp)"
                                  src="https://cdn.5sfood.vn/media/san-pham-5s/than-loi-nac-vai-bo-my/choice-loai-cao-cap-than-loi-nac-vai-bo-my-top-blade-beef-usda.jpg"
                                  style={{}}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="inner-content">
                            <h4 className="product-title">
                              <Link href="/than-loi-nac-vai-bo-my-top-blade-beef-usda-choice-loai-cao-cap">
                                Thăn lõi nạc vai bò Mỹ - Top blade Beef USDA ...
                              </Link>
                            </h4>
                            <div className="product-rating-price">
                              <div className="price">
                                <span className="price-amount">
                                  429,000
                                  <span className="currency-symbol">đ</span>
                                </span>
                              </div>
                            </div>
                            <div className="mt-5 mt-lg-10">
                              <Link
                                className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                title="Thêm giỏ hàng"
                                href="#"
                                data-toggle="modal"
                                data-target="#modal-het-hang"
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
                      <div className="col-lg-3 col-md-6 col-6">
                        <div
                          nh-product={31}
                          nh-product-item-id={43}
                          nh-product-attribute-special
                          className="product-item bg-white rounded-15"
                        >
                          <div className="inner-image">
                            <div className="product-status" />
                            <div className="product-status-right" />
                            <div className="wrp-effect-change-img ratio-custome">
                              <Link
                                href="/thit-ba-chi-bo-my-short-plate-beef-usda-choice-loai-cao-cap"
                                title="Thịt ba chỉ bò Mỹ - Short Plate Beef USDA Choice (loại cao cấp)"
                              >
                                <img
                                  nh-lazy="image"
                                  className="img-fluid rounded-12"
                                  alt="Thịt ba chỉ bò Mỹ - Short Plate Beef USDA Choice (loại cao cấp)"
                                  src="https://cdn.5sfood.vn/media/san-pham-5s/thit-ba-chi-bo-my/choice-loai-cao-cap-thit-ba-chi-bo-my-short-plate-beef-usda.jpg"
                                  style={{}}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="inner-content">
                            <h4 className="product-title">
                              <Link href="/thit-ba-chi-bo-my-short-plate-beef-usda-choice-loai-cao-cap">
                                Thịt ba chỉ bò Mỹ - Short Plate Beef USDA ...
                              </Link>
                            </h4>
                            <div className="product-rating-price">
                              <div className="price">
                                <span className="price-amount">
                                  279,000
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
        <div nh-row="84o5xbw" className>
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <div
                  nh-block="xzs1t7h"
                  nh-block-cache="true"
                  className="border category-product-left bg-white  rounded"
                >
                  <h3 className="title-section-1">Danh mục</h3>
                  <div nh-menu="active">
                    <ul className="categories-section list-unstyled">
                      <li className="has-child">
                        <Link href="/thit-nhap-khau">Thịt nhập khẩu</Link>
                        <span
                          nh-toggle="child-category-8"
                          className="dropdown-toggle"
                        />
                        <ul
                          nh-toggle-element="child-category-8"
                          className="list-child list-unstyled"
                        >
                          <li className>
                            <Link href="/thit-bo-my">Thịt bò Mỹ</Link>
                          </li>
                          <li className>
                            <Link href="/thit-bo-uc">Thịt bò Úc</Link>
                          </li>
                          <li className>
                            <Link href="/thit-bo-nhat-ban">
                              Thịt bò Nhật Bản
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child">
                        <Link href="/hai-san-nhap-khau">Hải sản nhập khẩu</Link>
                        <span
                          nh-toggle="child-category-6"
                          className="dropdown-toggle"
                        />
                        <ul
                          nh-toggle-element="child-category-6"
                          className="list-child list-unstyled"
                        >
                          <li className>
                            <Link href="/hai-san-viet-nam">
                              Hải sản Việt Nam
                            </Link>
                          </li>
                          <li className>
                            <Link href="/hai-san-nhat-ban">
                              Hải sản Nhật Bản
                            </Link>
                          </li>
                          <li className>
                            <Link href="/hai-san-nauy">Hải sản Nauy</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child">
                        <Link href="/set-box-tien-loi">Set box tiện lợi</Link>
                        <span
                          nh-toggle="child-category-5"
                          className="dropdown-toggle"
                        />
                        <ul
                          nh-toggle-element="child-category-5"
                          className="list-child list-unstyled"
                        >
                          <li className>
                            <Link href="/set-box-lau">Set Box Lẩu</Link>
                          </li>
                          <li className>
                            <Link href="/set-box-nuong">Set Box Nướng</Link>
                          </li>
                          <li className>
                            <Link href="/set-box-sashimi">Set Box Sashimi</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child">
                        <Link href="/nuoc-sot-gia-vi">Nước sốt, gia vị</Link>
                        <span
                          nh-toggle="child-category-4"
                          className="dropdown-toggle"
                        />
                        <ul
                          nh-toggle-element="child-category-4"
                          className="list-child list-unstyled"
                        >
                          <li className>
                            <Link href="/nuoc-sot-gia-vi-nhat-ban">
                              Nước sốt - Gia vị Nhật Bản
                            </Link>
                          </li>
                          <li className>
                            <Link href="/nuoc-sot-gia-vi-han-quoc">
                              Nước sốt - Gia vị Hàn Quốc
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className>
                        <Link href="/dau-an-bo-phomai">
                          Dầu ăn, Bơ &amp; Phomai
                        </Link>
                      </li>
                      <li className>
                        <Link href="/rau-cu-qua-my">Rau củ quả &amp; Mỳ</Link>
                      </li>
                      <li className>
                        <Link href="/san-pham-khac">Sản phẩm khác</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
