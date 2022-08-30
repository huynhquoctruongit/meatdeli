import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "../../components/popup/menu";
const Footer = ({ productCategories, infoSettings }) => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  var dataCate = null;

  var infoSet = null;
  if (typeof window !== "undefined" && !infoSettings) {
    dataCate =
      productCategories ||
      JSON.parse(localStorage.getItem("productCategories"));
    infoSet =
      localStorage.getItem("infoSettings") !== "undefined"
        ? JSON.parse(localStorage.getItem("infoSettings"))
        : "";
  } else {
    infoSet = infoSettings;
  }
  const openMenu = () => {
    setOpenMenu(!isOpenMenu);
  };
  useEffect(() => {
    var m = "tỉnh hà giang, hà nội".split(" ");

    var n = "thuộc hà giang, thành phố hà nội".split(" ");
    var isOk = 0;
    for (var i = 0; i < m.length; i++) {
      for (var j = 0; j < n.length; j++) {
        var reg = new RegExp("^" + m[i] + "$", "gi");
        if (n[j].match(reg)) {
          isOk = 1;
          break;
        }
      }
    }

    if (isOk == 1) console.log("match");
  }, []);
  return (
    <footer>
      <Menu
        setOpenMenu={setOpenMenu}
        isOpenMenu={isOpenMenu}
        dataCate={dataCate}
        openMenu={openMenu}
      />
      <div nh-row="ndc0lvy" className="pt-40 bg-light pb-80 mb-30">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="w1tbzgx" nh-block-cache="true" className>
                <div className="logo-section mt-0 mt-xl-40">
                  <Link href="/">
                    <img
                      nh-lazy="image"
                      className="img-fluid"
                      alt="logo"
                      src={infoSet?.avatar?.url}
                      style={{}}
                    />
                  </Link>
                </div>
                <div className="entire-info-website mt-20">
                  <address>
                    <p className="font-weight-bold text-uppercase fs-16">
                      {infoSet?.info_page?.companyname}
                    </p>
                    <div className="mb-20 border-bottom border-black">
                      <p>
                        Giấy phép kinh doanh : {infoSet?.info_page?.taxnumber}
                      </p>
                      <p>Cấp ngày : {infoSet?.info_page?.taxdate}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="iconsax isax-location-tick5 pr-5" />
                      <span>{infoSet?.info_page?.address}</span>
                    </div>
                    {/* <div className="d-flex">
                      <i className="iconsax isax-calendar-15 pr-5" />
                      <span>Giờ làm việc: Từ 8h00 - 19h30 Từ T2 đến CN</span>
                    </div> */}
                    <div className="d-flex align-items-center">
                      <i className="iconsax isax-call-incoming5 pr-5" />
                      <span> {infoSet?.info_page?.phone}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="iconsax isax-sms5 pr-5" />
                      <span> {infoSet?.info_page?.email}</span>
                    </div>
                  </address>
                </div>
              </div>
              <div nh-block="x0akdjz" nh-block-cache="true" className>
                <div className="footer-menu-section mt-30">
                  <div className="title-footer">THÔNG TIN CÔNG TY</div>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/gioi-thieu-5sfoodvn">
                        Giới thiệu công ty
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">Hệ thống cửa hàng</Link>
                    </li>
                    <li>
                      <Link href="/tin-tuc">Tin tức/ Kiến thức nhà bếp</Link>
                    </li>
                    <li>
                      <Link href="/lien-he">Liên hệ</Link>
                    </li>
                    <li>
                      <Link href="/trang-khach-hang-phan-hoi">FeedBack</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div nh-row="yhe3d98" className="session-copy">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="awlj4fk" nh-block-cache="false" className />
            </div>
          </div>
        </div>
      </div>
      <div nh-row="4dhsmk8" className>
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="meqc6t7" nh-block-cache="true" className>
                <div className="toolbar-section">
                  <div className="toolbar-item">
                    <Link href="/">
                      <div>
                        <i className="iconsax isax-home-2" />
                        <span>Trang Chủ</span>
                      </div>
                    </Link>
                  </div>
                  <div className="toolbar-item">
                    <Link href="/tim-kiem/page">
                      <div>
                        <i className="iconsax isax-search-normal-1" />
                        <span>Tìm Kiếm</span>
                      </div>
                    </Link>
                  </div>
                  <div className="toolbar-item category-tool">
                    <div className="before">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={70}
                        height={19}
                        viewBox="0 0 70 19"
                      >
                        <defs>
                          <path
                            id="b"
                            d="M219 391a42.348 42.348 0 0 1 34 17h-68a42.348 42.348 0 0 1 34-17z"
                          />
                          <filter
                            id="a"
                            width="105.9%"
                            height="123.5%"
                            x="-2.9%"
                            y="-17.6%"
                            filterUnits="objectBoundingBox"
                          >
                            <feOffset
                              dy={-1}
                              in="SourceAlpha"
                              result="shadowOffsetOuter1"
                            />
                            <feGaussianBlur
                              in="shadowOffsetOuter1"
                              result="shadowBlurOuter1"
                              stdDeviation=".5"
                            />
                            <feColorMatrix
                              in="shadowBlurOuter1"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                            />
                          </filter>
                        </defs>
                        <g
                          fill="none"
                          fillRule="evenodd"
                          transform="translate(-184 -389)"
                        >
                          <use fill="#000" filter="url(#a)" xlinkHref="#b" />
                          <use fill="#FFF" xlinkHref="#b" />
                        </g>
                      </svg>
                    </div>
                    <div nh-menu="btn-open" href="#" onClick={() => openMenu()}>
                      <i className="iconsax isax-element-equal" />
                      <span>Danh mục</span>
                    </div>
                  </div>
                  <Link href="https://zalo.me/">
                    <div className="toolbar-item">
                      <div>
                        <img
                          nh-lazy="image"
                          className="img-fluid"
                          alt="zalo"
                          src="https://cdn.5sfood.vn/media/icon/widget_icon_light_zalo.svg"
                          style={{}}
                        />
                        <span>Zalo</span>
                      </div>
                    </div>
                  </Link>
                  <Link href="https://www.facebook.com/pages/category/Shopping---retail/5S-FOOD-Th%E1%BB%B1c-Ph%E1%BA%A9m-S%E1%BA%A1ch-111625650686603/">
                    <div className="toolbar-item">
                      <div>
                        <img
                          nh-lazy="image"
                          className="img-fluid"
                          alt="Messenger"
                          src="https://cdn.5sfood.vn/media/icon/widget_icon_light_messenger.svg"
                          style={{}}
                        />
                        <span>Messenger</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div nh-row="7fszrhb" className>
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="gj3f81l" nh-block-cache="true" className>
                <div className="call-mobile">
                  <Link
                    href="tel:0869.836.236"
                    mypage
                    className="call-now"
                    rel="nofollow"
                  >
                    <div>
                      <span className="icon">
                        <img
                          nh-lazy="image"
                          className="img-fluid"
                          alt=""
                          src="https://5sfood.vn/templates/fashion02/assets/media/icon/phone_mb.svg"
                          style={{}}
                        />
                      </span>
                      <span>0869.836.236</span>
                    </div>
                  </Link>
                </div>
              </div>
              {/* <div nh-block="kwavyip" nh-block-cache="true" className>
                <div className="social-right-default">
                  <ul className="list-unstyled m-0">
                    <li className="mb-20">
                      <Link
                        href="/bo-obe-khi-tat-ca-quy-trinh-san-xuat-deu-dam"
                        target="_blank"
                      >
                        <img
                          nh-lazy="image"
                          className="img-fluid"
                          alt="Khuyến mãi"
                          src="	https://5sfood.vn/templates/fashion02/assets/media/icon/aug_2_05.svg"
                          style={{}}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" id="return-to-top">
                        <i className="iconsax isax-arrow-up-3" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
