import React, { useState, useEffect } from "react";
import Link from "next/link";
const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const openMenu = () => {
    setOpenMenu(!isOpenMenu);
  };

  return (
    <header>
      <div
        nh-row="uno57h6"
        className="align-row-center setting-menu-mb py-10 bg-main"
      >
        <div className="container">
          <div className="row ">
            <div className="col-3">
              <div nh-block="atcrx67" className="section-menu-mobile">
                <div className="menu-container ">
                  <a
                    id="btn-menu-mobile"
                    onClick={() => openMenu()}
                    className="btn-menu-mobile"
                    nh-menu="btn-open"
                    href="#"
                  >
                    <i className="iconsax isax-menu-1" />
                  </a>
                  <div
                    className={`back-drop ${isOpenMenu ? "open" : ""}`}
                  ></div>
                  <nav
                    id="menu-section"
                    className={`menu-section p-0 ${isOpenMenu ? "open" : ""}`}
                    nh-menu="sidebar"
                  >
                    <div className="bg-main px-15 pt-5 pb-15">
                      <div className="menu-top mt-0 mb-0">
                        <Link
                          onClick={() => openMenu()}
                          href="#"
                          nh-menu="btn-close"
                          className="close-sidebar effect-rotate icon-close"
                        >
                          <i className="iconsax isax-add" />
                        </Link>
                      </div>
                      {/* <div className="top-sidebar">
                        <ul className="list-unstyled m-0">
                          <li className="mb-10">
                            <Link
                              className="color-white fs-16 border-bottom pb-5"
                              href="he-thong-cua-hang"
                              title="Hệ thống cửa hàng"
                            >
                              Hệ thống cửa hàng
                            </Link>
                          </li>
                          <li className="pl-0">
                            <Link
                              className="text-white px-10 rounded bg-color-text box-location d-flex align-items-center justify-content-between"
                              href="#"
                            >
                              <span>
                                <i className="iconsax isax-location5 pr-5 fs-24" />
                                Bạn đang ở :
                                <span className="font-weight-bold pl-5">
                                  Hà Nội
                                </span>
                              </span>
                              <span>
                                <i className="iconsax isax-arrow-down-1 pl-30" />
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                    <ul>
                      <li className="position-relative has-child ">
                        <Link href="/thit-nhap-khau">
                          <div>
                            <span className="icon-name-marker">
                              <img
                                src="https://cdn.5sfood.vn/media/category/sirloin-steak.svg"
                                alt="Thịt nhập khẩu"
                                className="marker-image"
                              />
                            </span>
                            <span className="text-name">Thịt nhập khẩu</span>
                            <span className="iconsax isax-arrow-down-1" />
                          </div>
                        </Link>
                        <span className="grower" nh-toggle="y3pn0xs4ia" />
                        <ul
                          nh-toggle-element="y3pn0xs4ia"
                          className="entry-menu dropdown"
                        >
                          <li className=" ">
                            <Link className="menu-link" href="/thit-bo-my">
                              Thịt bò Mỹ
                            </Link>
                          </li>
                          <li className=" ">
                            <Link className="menu-link" href="/thit-bo-uc">
                              Thịt bò Úc
                            </Link>
                          </li>
                          <li className=" ">
                            <Link
                              className="menu-link"
                              href="/thit-bo-nhat-ban"
                            >
                              Thịt bò Nhật Bản
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="position-relative has-child ">
                        <Link href="/hai-san-nhap-khau">
                          <div>
                            <span className="icon-name-marker">
                              <img
                                src="https://cdn.5sfood.vn/media/category/lobster.svg"
                                alt="Hải sản nhập khẩu"
                                className="marker-image"
                              />
                            </span>
                            <span className="text-name">Hải sản nhập khẩu</span>
                            <span className="iconsax isax-arrow-down-1" />
                          </div>
                        </Link>
                        <span className="grower" nh-toggle="fb65ayohq3" />
                        <ul
                          nh-toggle-element="fb65ayohq3"
                          className="entry-menu dropdown"
                        >
                          <li className=" ">
                            <Link
                              className="menu-link"
                              href="/hai-san-viet-nam"
                            >
                              Hải sản Việt Nam
                            </Link>
                          </li>
                          <li className=" ">
                            <Link
                              className="menu-link"
                              href="/hai-san-nhat-ban"
                            >
                              Hải sản Nhật Bản
                            </Link>
                          </li>
                          <li className=" ">
                            <Link className="menu-link" href="/hai-san-nauy">
                              Hải sản Nauy
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className>
                        <Link href="/set-box-tien-loi">
                          <div>
                            <span className="icon-name-marker">
                              <img
                                src="https://cdn.5sfood.vn/media/category/hot-pot.svg"
                                alt="Set box tiện lợi"
                                className="marker-image"
                              />
                            </span>
                            <span className="text-name">Set box tiện lợi</span>
                            <span className="iconsax isax-arrow-down-1" />
                          </div>
                        </Link>
                      </li>
                      <li className="position-relative has-child ">
                        <Link href="/nuoc-sot-gia-vi">
                          <div>
                            <span className="icon-name-marker">
                              <img
                                src="https://cdn.5sfood.vn/media/category/spices.svg"
                                alt="Nước sốt, gia vị"
                                className="marker-image"
                              />
                            </span>
                            <span className="text-name">Nước sốt, gia vị</span>
                            <span className="iconsax isax-arrow-down-1" />
                          </div>
                        </Link>
                        <span className="grower" nh-toggle="xvj3bdykw2" />
                        <ul
                          nh-toggle-element="xvj3bdykw2"
                          className="entry-menu dropdown"
                        >
                          <li className=" ">
                            <Link
                              className="menu-link"
                              href="/nuoc-sot-gia-vi-nhat-ban"
                            >
                              Nước sốt - Gia vị Nhật Bản
                            </Link>
                          </li>
                          <li className=" ">
                            <Link
                              className="menu-link"
                              href="/nuoc-sot-gia-vi-han-quoc"
                            >
                              Nước sốt - Gia vị Hàn Quốc
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className>
                        <Link href="/dau-an-bo-phomai">
                          <div>
                            <span className="icon-name-marker">
                              <img
                                src="https://cdn.5sfood.vn/media/category/drink.svg"
                                alt="Dầu ăn, Bơ & Phomai"
                                className="marker-image"
                              />
                            </span>
                            <span className="text-name">
                              Dầu ăn, Bơ &amp; Phomai
                            </span>
                            <span className="iconsax isax-arrow-down-1" />
                          </div>
                        </Link>
                      </li>
                      <li className>
                        <Link href="/rau-cu-qua-my">
                          <div>
                            <span className="icon-name-marker">
                              <img
                                src="https://cdn.5sfood.vn/media/category/kitchenware.svg"
                                alt="Rau củ quả & Mỳ"
                                className="marker-image"
                              />
                            </span>
                            <span className="text-name">
                              Rau củ quả &amp; Mỳ
                            </span>
                            <span className="iconsax isax-arrow-down-1" />
                          </div>
                        </Link>
                      </li>
                      <li className>
                        <Link href="/san-pham-khac">
                          <div>
                            <span className="icon-name-marker">
                              <img
                                src="https://cdn.5sfood.vn/media/category/cooking.svg"
                                alt="Sản phẩm khác"
                                className="marker-image"
                              />
                            </span>
                            <span className="text-name">Sản phẩm khác</span>
                            <span className="iconsax isax-arrow-down-1" />
                          </div>
                        </Link>
                      </li>
                      <li className>
                        <Link href="/">
                          <div>
                            <span className="icon-name-marker">
                              <img
                                src="/templates/fashion02/assets/media/icon-menu/cong_thuc.svg"
                                alt="Công thức hay"
                                className="marker-image"
                              />
                            </span>
                            <span className="text-name">Công thức hay</span>
                            <span className="iconsax isax-arrow-down-1" />
                          </div>
                        </Link>
                      </li>
                      <li className>
                        <Link href="/tin-tuc">
                          <div>
                            <span className="icon-name-marker">
                              <img
                                src="/templates/fashion02/assets/media/icon-menu/tin_tuc.svg"
                                alt="Blog tin tức"
                                className="marker-image"
                              />
                            </span>
                            <span className="text-name">Blog tin tức</span>
                            <span className="iconsax isax-arrow-down-1" />
                          </div>
                        </Link>
                      </li>
                      <li className>
                        <Link href="/ve-chung-toi">
                          <div>
                            <span className="icon-name-marker" />
                            <span className="text-name">Giới thiệu</span>
                            <span className="iconsax isax-arrow-down-1" />
                          </div>
                        </Link>
                      </li>
                      <li className>
                        <Link href="/huong-dan-dat-hang">
                          <div>
                            <span className="icon-name-marker" />
                            <span className="text-name">
                              Hướng dẫn đặt hàng
                            </span>
                            <span className="iconsax isax-arrow-down-1" />
                          </div>
                        </Link>
                      </li>
                      <li className>
                        <Link href="/">
                          <div>
                            {" "}
                            <span className="icon-name-marker" />
                            <span className="text-name">
                              Phương thức thanh toán
                            </span>
                            <span className="iconsax isax-arrow-down-1" />
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div nh-block="r8nbkfp">
                <div className="logo-section text-center">
                  <Link href="/">
                    <img
                      className="img-fluid"
                      src="https://5sfood.vn/templates/fashion02/assets/media/template/group_1633.svg"
                      alt="logo"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div nh-block="6gxudh8" className="float-right">
                <div className="entire-action-header">
                  <div
                    className="btn-mini-cart btn-action-header"
                    nh-mini-cart="open"
                    title="Giỏ hàng"
                    href="#"
                  >
                    <>
                      <svg
                        id="Group_5300"
                        data-name="Group 5300"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="25.564"
                        height="22.995"
                        viewBox="0 0 25.564 22.995"
                      >
                        <defs>
                          <clipPath id="clip-path">
                            <rect
                              id="Rectangle_3639"
                              data-name="Rectangle 3639"
                              width="25.564"
                              height="22.995"
                              fill="#fff"
                            />
                          </clipPath>
                        </defs>
                        <g
                          id="Group_5296"
                          data-name="Group 5296"
                          clipPath="url(#clip-path)"
                        >
                          <path
                            id="Path_791"
                            data-name="Path 791"
                            d="M24.483,167.057H1.081A1.081,1.081,0,0,1,0,165.975v-1.941a1.081,1.081,0,0,1,1.081-1.081h23.4a1.081,1.081,0,0,1,1.081,1.081v1.941a1.081,1.081,0,0,1-1.081,1.081"
                            transform="translate(0 -154.293)"
                            fill="#fff"
                          />
                          <path
                            id="Path_792"
                            data-name="Path 792"
                            d="M56.585,194.778H37.324a1.234,1.234,0,0,0-1.218,1.428l1.629,10.176a1.233,1.233,0,0,0,1.218,1.038h16a1.233,1.233,0,0,0,1.218-1.038L57.8,196.206a1.234,1.234,0,0,0-1.218-1.428M41.61,204.947a.686.686,0,0,1-1.373,0v-4.824a.686.686,0,1,1,1.373,0Zm2.412,0a.686.686,0,0,1-1.373,0v-4.824a.686.686,0,1,1,1.373,0Zm2.412,0a.686.686,0,1,1-1.372,0v-4.824a.686.686,0,1,1,1.372,0Zm2.412,0a.686.686,0,1,1-1.372,0v-4.824a.686.686,0,1,1,1.372,0Zm2.412,0a.686.686,0,1,1-1.372,0v-4.824a.686.686,0,1,1,1.372,0Zm2.413,0a.686.686,0,0,1-1.373,0v-4.824a.686.686,0,1,1,1.373,0Z"
                            transform="translate(-34.172 -184.427)"
                            fill="#fff"
                          />
                          <path
                            id="Path_793"
                            data-name="Path 793"
                            d="M74.951,8.456A.9.9,0,0,1,74.236,7L79.369.353a.9.9,0,1,1,1.43,1.1L75.667,8.1a.9.9,0,0,1-.716.351"
                            transform="translate(-70.113 -0.002)"
                            fill="#fff"
                          />
                          <path
                            id="Path_794"
                            data-name="Path 794"
                            d="M282.459,8.455a.9.9,0,0,1-.716-.351l-5.132-6.647a.9.9,0,0,1,1.43-1.1L283.173,7a.9.9,0,0,1-.714,1.456"
                            transform="translate(-261.732 -0.001)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                      <span
                        nh-total-quantity-mini-cart
                        className="items-number m-0"
                      >
                        1
                      </span>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div nh-row="h6zwd0o" className="pb-10 bg-main">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="lbfcmv6">
                <div className="form-search px-xl-20">
                  <form action="/tim-kiem" method="get" autoComplete="off">
                    <div className="input-group ">
                      <div className="icon-search  position-relative">
                        <input
                          nh-auto-suggest="product"
                          name="keyword"
                          placeholder="Bạn đang cần tìm mua gì?"
                          type="text"
                          className="form-control bg-white"
                        />
                        <button
                          nh-btn-submit
                          className="btn position-absolute"
                          type="submit"
                        >
                          <i className="iconsax isax-search-normal-1 fs-24 " />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
