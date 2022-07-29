import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { GRAPHQL_QUERY } from "@/geters/submit-cart";
import axios from "axios";
import { print } from "graphql";
const CheckoutCart = () => {
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  const [isTabPayment, tabPayment] = useState(false);
  const openTabPayment = (status) => {
    tabPayment(status);
  };

  useEffect(() => {
    let localCart = localStorage.getItem("cart");
    setCarts(
      localCart !== "null" && localCart !== null && JSON.parse(localCart)
    );
  }, []);
  const [callPostReview] = useMutation(GRAPHQL_QUERY, {
    variables: {
      address1: 123,
    },
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);


  const deleteProduct = (id) => {
    let localCart = JSON.parse(localStorage.getItem("cart"));
    var filteredItems = localCart.filter((itemVal) => itemVal.id !== id);
    localStorage.setItem("cart", JSON.stringify(filteredItems));
    setCarts(filteredItems);
  };
  var totalTemp = 0;
  useEffect(() => {
    carts &&
      carts.length > 0 &&
      carts?.map((item, index) => {
        totalTemp = totalTemp += parseInt(item.quality) * parseInt(item.price);
      });
    setTotal(totalTemp);
  }, [carts]);

  const submitOrder = () => {
    callPostReview();
  };

  const changeQuality = (type, item) => {
    let localCart = JSON.parse(localStorage.getItem("cart"));
    var merge = [];
    localCart.map((itemVal) => {
      if (itemVal.id === item.id) {
        if (type === "add") {
          itemVal.quality = itemVal.quality + 1;
        } else {
          if (itemVal.quality >= 1) {
            itemVal.quality = itemVal.quality - 1;
          } else {
            deleteProduct(itemVal.id);
          }
        }
        merge.push(itemVal);
      } else {
        merge.push(itemVal);
      }
    });
    localStorage.setItem("cart", JSON.stringify(merge));
    setCarts(merge);
  };
  if (!carts) return null;
  return (
    <div>
      <div nh-row="73ai61d" className="pb-30 ">
        <div className="row no-gutters">
          <div className="col-12">
            <div
              nh-block="n8vak24"
              nh-block-cache="false"
              className="session-cart"
            >
              <div nh-order-info>
                <div className="bg-breadcrums bg-white mb-15 mb-lg-30">
                  <div className="container">
                    <nav className="breadcrumbs-section py-15">
                      <Link href="/">Trang chủ</Link>
                      <h1>
                        <span>Thông tin đơn hàng</span>
                      </h1>
                    </nav>
                  </div>
                </div>
                <div className="container">
                  <div className="checkout-section">
                    <form id="order-info" method="post" noValidate="novalidate">
                      <div className="row">
                        <div id="order-info-left" className="col-lg-8 col-md-6">
                          <div className="billing-details">
                            <div className="d-flex justify-content-between align-items-center mb-10">
                              <h3 className="fs-16 mb-0">
                                <b>Thông tin đặt hàng</b>
                              </h3>
                            </div>
                            <div className="inner-col-1 mb-15 p-15 bg-white rounded-5">
                              <div>
                                <strong>Thông tin khách hàng </strong>
                                <span>mua không cần tài khoản</span>
                              </div>
                              <div className="form-billing">
                                <div className="form-group validate-form">
                                  <input
                                    className="bg-white border form-control rounded input-hover"
                                    name="full_name"
                                    type="text"
                                    placeholder="Họ và tên"
                                  />
                                </div>
                                <div className="row">
                                  <div className="col-lg-8 col-12">
                                    <div className="form-group validate-form">
                                      <input
                                        className="bg-white border form-control rounded input-hover"
                                        name="email"
                                        type="text"
                                        placeholder="Email"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-12">
                                    <div className="form-group validate-form">
                                      <input
                                        className="bg-white border form-control rounded input-hover"
                                        name="phone"
                                        type="text"
                                        placeholder="Số điện thoại"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group validate-form">
                                  <input
                                    className="bg-white border form-control rounded input-hover"
                                    name="address"
                                    placeholder="Địa chỉ"
                                    type="text"
                                  />
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-12">
                                    <div className="form-group validate-form">
                                      <div className="dropdown bootstrap-select form-controls input-hover">
                                        <select
                                          name="city_id"
                                          id="city_id"
                                          className="form-control selectpicker input-hover"
                                          data-size={10}
                                          data-live-search={1}
                                          tabIndex={-98}
                                        >
                                          <option value>
                                            -- Tỉnh thành --
                                          </option>
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
                                          <option value={19}>
                                            Thái Nguyên
                                          </option>
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
                                          <option value={46}>
                                            Thừa Thiên Huế
                                          </option>
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
                                          <option value={77}>
                                            Bà Rịa - Vũng Tàu
                                          </option>
                                          <option value={79}>
                                            Hồ Chí Minh
                                          </option>
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

                                        <div className="dropdown-menu ">
                                          <div className="bs-searchbox">
                                            <input
                                              type="search"
                                              className="form-control"
                                              autoComplete="off"
                                              role="combobox"
                                              aria-label="Search"
                                              aria-controls="bs-select-1"
                                              aria-autocomplete="list"
                                            />
                                          </div>
                                          <div
                                            className="inner show"
                                            role="listbox"
                                            id="bs-select-1"
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
                                  </div>
                                  {/* <div className="col-lg-4 col-12">
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
                                          <option value>
                                            -- Quận huyện --
                                          </option>
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
                                  </div>
                                  <div className="col-lg-4 col-12">
                                    <div className="form-group validate-form">
                                      <div className="dropdown bootstrap-select form-control input-hover">
                                        <select
                                          name="ward_id"
                                          id="ward_id"
                                          className="form-control selectpicker input-hover"
                                          data-size={10}
                                          data-live-search={1}
                                          tabIndex={-98}
                                        >
                                          <option value>-- Phường xã --</option>
                                        </select>
                                        <button
                                          type="button"
                                          className="btn dropdown-toggle btn-light bs-placeholder"
                                          data-toggle="dropdown"
                                          role="combobox"
                                          aria-owns="bs-select-3"
                                          aria-haspopup="listbox"
                                          aria-expanded="false"
                                          data-id="ward_id"
                                          title="-- Phường xã --"
                                        >
                                          <div className="filter-option">
                                            <div className="filter-option-inner">
                                              <div className="filter-option-inner-inner">
                                                -- Phường xã --
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
                                              aria-controls="bs-select-3"
                                              aria-autocomplete="list"
                                            />
                                          </div>
                                          <div
                                            className="inner show"
                                            role="listbox"
                                            id="bs-select-3"
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
                                  </div> */}
                                </div>
                              </div>
                            </div>
                            <div className="inner-col-2 mt-5 mb-15 p-15 bg-white rounded-5">
                              <label>Ghi chú</label>
                              <div className="form-additional">
                                <textarea
                                  className="bg-white border form-control rounded input-hover"
                                  name="note"
                                  rows={2}
                                  cols={5}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="payment-method mb-10 bg-white rounded p-15">
                              <div className="d-flex align-content-stretch flex-wrap ">
                                <ul className="nav w-100" role="tablist">
                                  <li
                                    className="nav-item clearfix mb-10"
                                    onClick={() => openTabPayment(false)}
                                  >
                                    <div
                                      nh-gateway-item="cod"
                                      className={`nav-link color-black d-flex  align-items-center border px-15 ${
                                        !isTabPayment ? "active" : ""
                                      }`}
                                      data-toggle="tab"
                                      role="tab"
                                    >
                                      <div className="inner-icon position-relative  mr-15">
                                        <img
                                          className="img-fluid rti-abs-contain"
                                          src="https://5sfood.vn/templates/fashion02/assets/img/payment/cod.png"
                                          alt="cod"
                                        />
                                      </div>
                                      <div className="inner-label text-left">
                                        Thanh toán sau khi nhận hàng (COD)
                                      </div>
                                    </div>
                                  </li>
                                  <li
                                    className="nav-item clearfix mb-10"
                                    onClick={() => openTabPayment(true)}
                                  >
                                    <div
                                      nh-gateway-item="bank"
                                      className={`nav-link color-black d-flex  align-items-center border px-15 ${
                                        isTabPayment ? "active" : ""
                                      }`}
                                      data-toggle="tab"
                                      role="tab"
                                    >
                                      <div className="inner-icon position-relative  mr-15">
                                        <img
                                          className="img-fluid rti-abs-contain"
                                          src="https://5sfood.vn/templates/fashion02/assets/img/payment/bank.png"
                                          alt="bank"
                                        />
                                      </div>
                                      <div className="inner-label text-left">
                                        Thanh toán qua chuyển khoản
                                        <div className="content-payment fs-14 font-weight-normal">
                                          <p>
                                            Freeship bán kính 5km khi chuyển
                                            khoản đơn hàng từ 600k
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                {isTabPayment && (
                                  <div className="tab-content w-100 mt-3">
                                    <div
                                      id="cod"
                                      className="tab-pane"
                                      role="tabpanel"
                                    ></div>
                                    <div
                                      id="bank"
                                      className="tab-pane active"
                                      role="tabpanel"
                                    >
                                      <h3 className="title-checkout color-black">
                                        <b>Tài khoản ngân hàng</b>
                                      </h3>
                                      <div className="entry-bank mb-30">
                                        <table className="table w-100 mb-15">
                                          <tbody>
                                            <tr>
                                              <td>Tên ngân hàng</td>
                                              <td>
                                                <b>Ngân hàng Vietcombank</b>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Chủ tài khoản</td>
                                              <td>
                                                <b>Bùi Văn Toàn</b>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Số tài khoản</td>
                                              <td>
                                                <b>0021 0020 63897</b>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                              <input
                                name="payment_gateway"
                                defaultValue
                                type="hidden"
                              />
                              <input name="code" defaultValue type="hidden" />
                            </div>
                          </div>
                        </div>
                        <div
                          id="order-info-right"
                          className="col-lg-4 col-md-6"
                        >
                          <div className="product-order-info-right product-order-cart mb-15 p-15 bg-white rounded-5">
                            <table className="table table-info-right border-0">
                              <thead>
                                <tr>
                                  <th className="text-left bg-white border-0 color-text p-0">
                                    <h3 className="fs-16 mb-0 d-flex justify-content-between">
                                      <b>Sản phẩm đã chọn : 1</b>
                                      <b>Giá</b>
                                    </h3>
                                  </th>
                                  {/* <th className="text-right bg-white border-0 color-text fs-16 font-weight-bold p-0">
                                    Giá
                                  </th> */}
                                </tr>
                              </thead>
                              <tbody>
                                {carts?.map((item, index) => (
                                  <tr key={index}>
                                    <td>
                                      <div className="product-element-top row py-10">
                                        <div className="col-lg-5 col-sm-5 col-5">
                                          <div className="position-relative rti-100 bg-light">
                                            <Link href="/ca-hoi-nauy-nguyen-con-seafood-from-norway-sfn">
                                              <img
                                                className="img-fluid rti-abs-cover rounded-10 border border-color-main"
                                                src={item.img}
                                                alt="Cá hồi Na Uy nguyên con - Seafood From Norway (SFN) (Kg)"
                                              />
                                            </Link>
                                            <div className="position-absolute rounded-circle bg-blue text-white quantity-info-right text-center">
                                              <span>{item.quality}</span>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-7 col-sm-7 col-7">
                                          <div className="top-name-right">
                                            <div className="name-element font-weight-bold d-flex justify-content-between">
                                              <Link href="/ca-hoi-nauy-nguyen-con-seafood-from-norway-sfn">
                                                {item.name}
                                              </Link>
                                              <p>
                                                {item.quality * item.price}
                                                <span className="currency-symbol">
                                                  đ
                                                </span>
                                              </p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                              <div
                                                data-title="Số lượng"
                                                className="item-quantity"
                                              >
                                                <div
                                                  nh-quantity-product="wrap"
                                                  className="product-quantity"
                                                >
                                                  <span
                                                    onClick={() =>
                                                      changeQuality(
                                                        "minus",
                                                        item
                                                      )
                                                    }
                                                    nh-quantity-product="subtract"
                                                    className="btn-quantity"
                                                  >
                                                    <i className="iconsax isax-minus" />
                                                  </span>
                                                  <input
                                                    value={item.quality}
                                                    nh-quantity-product="quantity"
                                                    className="text-center quantity-input events-none"
                                                    type="text"
                                                  />
                                                  <span
                                                    onClick={() =>
                                                      changeQuality("add", item)
                                                    }
                                                    nh-quantity-product="add"
                                                    className="btn-quantity"
                                                  >
                                                    <i className="iconsax isax-add" />
                                                  </span>
                                                </div>
                                              </div>
                                              <p>
                                                {item.price}{" "}
                                                <span className="currency-symbol">
                                                  đ
                                                </span>
                                              </p>
                                            </div>
                                            {/* <div
                                                onClick={() =>
                                                  deleteProduct(item.id)
                                                }
                                              >
                                                <p
                                                  style={{
                                                    textAlign: "left",
                                                    marginTop: "20px",
                                                    color: "red",
                                                  }}
                                                >
                                                  Xóa
                                                </p>
                                              </div> */}
                                            {item.tag == "thit-heo" && (
                                              <div>
                                                <div className="dropdown bootstrap-select form-controls input-hover">
                                                  <div className="d-flex justify-content-center align-items-center">
                                                    <span
                                                      style={{
                                                        width: "40%",
                                                      }}
                                                    >
                                                      Sơ chế
                                                    </span>
                                                    <select
                                                      name="city_id"
                                                      id="city_id"
                                                      className="form-control selectpicker input-hover"
                                                      data-size={10}
                                                      data-live-search={1}
                                                      tabIndex={-98}
                                                    >
                                                      <option selected disabled>
                                                        Sơ chế
                                                      </option>
                                                      <option value={1}>
                                                        Xay
                                                      </option>
                                                      <option value={2}>
                                                        Chặt khúc
                                                      </option>
                                                    </select>
                                                  </div>

                                                  <div className="dropdown-menu ">
                                                    <div className="bs-searchbox">
                                                      <input
                                                        type="search"
                                                        className="form-control"
                                                        autoComplete="off"
                                                        role="combobox"
                                                        aria-label="Search"
                                                        aria-controls="bs-select-1"
                                                        aria-autocomplete="list"
                                                      />
                                                    </div>
                                                    <div
                                                      className="inner show"
                                                      role="listbox"
                                                      id="bs-select-1"
                                                      tabIndex={-1}
                                                    >
                                                      <ul
                                                        className="dropdown-menu inner show"
                                                        role="presentation"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="mt-3 dropdown bootstrap-select form-controls input-hover">
                                                  <div className="d-flex">
                                                    <span
                                                      style={{
                                                        width: "40%",
                                                      }}
                                                    >
                                                      Khẩu vị
                                                    </span>
                                                    <select
                                                      name="city_id"
                                                      id="city_id"
                                                      className="form-control selectpicker input-hover"
                                                      data-size={10}
                                                      data-live-search={1}
                                                      tabIndex={-98}
                                                    >
                                                      <option selected disabled>
                                                        Khẩu vị
                                                      </option>
                                                      <option value={1}>
                                                        Rất nạc
                                                      </option>
                                                      <option value={2}>
                                                        Nạc
                                                      </option>
                                                      <option value={2}>
                                                        Trung bình
                                                      </option>
                                                      <option value={2}>
                                                        Mỡ
                                                      </option>
                                                      <option value={2}>
                                                        Rất mỡ
                                                      </option>
                                                    </select>
                                                  </div>

                                                  <div className="dropdown-menu ">
                                                    <div className="bs-searchbox">
                                                      <input
                                                        type="search"
                                                        className="form-control"
                                                        autoComplete="off"
                                                        role="combobox"
                                                        aria-label="Search"
                                                        aria-controls="bs-select-1"
                                                        aria-autocomplete="list"
                                                      />
                                                    </div>
                                                    <div
                                                      className="inner show"
                                                      role="listbox"
                                                      id="bs-select-1"
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
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    {/* <td className="text-right">
                                        <div className="price-quantity mt-10">
                                          <span className>
                                            {item.quality * item.price}
                                            <span className="currency-symbol">
                                              đ
                                            </span>
                                          </span>
                                        </div>
                                      </td> */}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <div className="order-review">
                            <div className="entry-order-review">
                              <div className="cart-drop-botoom">
                                <div id="accordion-order">
                                  <div className="card bg-white rounded  mb-10">
                                    <div className="card-header">
                                      <div
                                        className="btn d-flex justify-content-between align-items-center w-100"
                                        data-toggle="collapse"
                                        data-target="#coupon-panel"
                                        aria-expanded="true"
                                      >
                                        <span className="d-flex align-items-center">
                                          <img
                                            nh-lazy="image"
                                            className="img-fluid"
                                            alt="icon"
                                            src="https://5sfood.vn/templates/fashion02/assets/media/icon/icon-disscount.png"
                                            style={{}}
                                          />
                                          <span className="pl-10">
                                            Phiếu giảm giá
                                          </span>
                                        </span>
                                        <span className="d-flex align-items-center">
                                          <span>
                                            <i className="iconsax isax-arrow-down-1" />
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      id="coupon-panel"
                                      className="collapse"
                                      data-parent="#accordion-order"
                                    >
                                      <div className="p-15">
                                        <div className="form-group mb-10">
                                          <input
                                            id="order-coupon-code"
                                            defaultValue
                                            type="text"
                                            className="bg-white border form-control rounded input-hover"
                                            placeholder="Nhập phiếu giảm giá"
                                          />
                                        </div>
                                        <span
                                          nh-btn-action="apply-coupon"
                                          className="btn bg-main btn-1a color-white py-10 fs-16 fs-14 px-25 mb-15 w-100 rounded"
                                        >
                                          Áp dụng
                                        </span>
                                        <div className="d-flex justify-content-between align-items-center mb-5">
                                          <Link
                                            className="btn border border-hover"
                                            href="#"
                                            nh-btn-action="list-coupon"
                                          >
                                            <div>
                                              <i className="iconsax isax-ticket" />
                                              Lấy phiếu giảm giá
                                            </div>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <input
                                    name="coupon"
                                    defaultValue
                                    type="hidden"
                                  />
                                  <input
                                    name="promotion_id"
                                    defaultValue
                                    type="hidden"
                                  />
                                </div>
                              </div>
                              <div className="product-order-info-right-bottom  bg-white rounded p-15">
                                <div className="d-flex justify-content-between mb-15">
                                  <span>Đơn giá</span>
                                  <span className="text-right">
                                    <strong>
                                      <span className="fs-15 font-weight-bold">
                                        {total}
                                        <span>đ</span>
                                      </span>
                                    </strong>
                                  </span>
                                </div>
                                <div className="separation-dash mb-15" />
                                <div className="d-flex justify-content-between mb-15">
                                  <span>Thành tiền</span>
                                  <span className="text-right">
                                    <strong>
                                      <span className="fs-15 font-weight-bold">
                                        {total}
                                        <span>đ</span>
                                      </span>
                                    </strong>
                                  </span>
                                </div>
                              </div>
                              <div className="checkout-payment bg-white mb-10 px-15 pb-15">
                                <span
                                  onClick={() => submitOrder()}
                                  nh-btn-action="create-order"
                                  className="btn bg-hightlight btn-1a color-white px-25 py-10 w-100 rounded text-uppercase fs-16"
                                >
                                  Đặt hàng
                                </span>
                                <Link href="/order/cart-info">
                                  <div
                                    title="Quay lại giỏ hàng"
                                    className="order-back fs-14 d-flex align-items-center color-main mt-15"
                                  >
                                    <i className="iconsax isax-arrow-left mr-5" />
                                    Quay lại giỏ hàng
                                  </div>
                                </Link>
                              </div>
                              <div className="note-order-review rounded-5 px-15 py-10 mb-15 text-center color-main d-flex">
                                <div
                                  nh-block="tqsf4rh"
                                  type-load="document-ready"
                                  loaded={1}
                                >
                                  <div className="row">
                                    <div className="col-12">
                                      <article className="item-only-title">
                                        <div className="article-description mb-0 color-main fs-16">
                                          <p>
                                            Ghi chú:{" "}
                                            <em>
                                              Nội dung ghi chú riêng quản trị
                                              viên có thể thay đổi tùy biến
                                              trong quản trị
                                            </em>
                                          </p>
                                        </div>
                                      </article>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  id="list-coupon-modal"
                  className="modal fade"
                  tabIndex={-1}
                  role="dialog"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content shadow-modal">
                      <Link
                        href="#"
                        className="effect-rotate close-coupon-modal icon-close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="iconsax isax-add" />
                      </Link>
                      <div className="modal-body">
                        <div nh-promotion>
                          Hiện không có phiếu giảm giá nào được áp dụng
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
  );
};
export default CheckoutCart;
