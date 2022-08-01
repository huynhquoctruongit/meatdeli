import React, { useState, useEffect } from "react";
import Link from "next/link";
import { convertCurrency } from "@/services/helper";

const Order = () => {
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let localCart = localStorage.getItem("cart");
    setCarts(
      localCart !== "null" && localCart !== null && JSON.parse(localCart)
    );
  }, []);
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
              <div className="bg-breadcrums bg-white mb-15 mb-lg-30">
                <div className="container">
                  <nav className="breadcrumbs-section py-15">
                    <Link href="/">Trang chủ</Link>
                    <h1>
                      <span>Giỏ hàng</span>
                    </h1>
                  </nav>
                </div>
              </div>
              <div className="container">
                <div nh-cart-info className="list-cart-item cart-item-center">
                  <div className="row">
                    <div className="col-lg-9 col-sm-8 col-12">
                      <div className="title-cart-content font-weight-bold fs-16 mb-10">
                        Giỏ hàng
                        <small>(1 Sản phẩm) </small>
                      </div>
                      <div className="bg-white rounded-5 p-15 mb-15 d-flex align-items-center">
                        <img
                          nh-lazy="image"
                          className="img-fluid"
                          alt="icon"
                          src="https://5sfood.vn/templates/fashion02/assets/media/icon/delivery-truck.png"
                          style={{}}
                        />
                        <span className="pl-10">
                          <div
                            nh-block="kdza7cw"
                            type-load="document-ready"
                            loaded={1}
                          >
                            <div className="row">
                              <div className="col-12">
                                <article className="item-only-title">
                                  <div className="article-description mb-0 color-main fs-16">
                                    <p>
                                      Một thông báo mà quản trị viên có thể thay
                                      đổi nội dung thông báo
                                    </p>
                                  </div>
                                </article>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                      {carts?.map((item) => (
                        <div
                          key={item.id}
                          nh-cart-item={89}
                          nh-cart-item-quantity={1}
                          className="cart-item bg-white rounded-5 p-10 p-lg-15 mb-15"
                        >
                          <div className="clearfix row">
                            <div className="col-lg-9 col-sm-8 col-9">
                              <div className="row">
                                <div className="col-lg-2 col-sm-4 col-4">
                                  <div className="position-relative rti-100">
                                    <Link href="/muc-an-lien-namaika">
                                      <img
                                        className="img-fluid rti-abs-cover rounded-10 border border-color-main"
                                        src={item.img}
                                        alt="Mực ăn liền Namaika (Mực ăn liền cắt sợi cỡ L)"
                                      />
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-lg-10 col-sm-8 col-8">
                                  <div>
                                    <Link href="/muc-an-lien-namaika">
                                      <div className="name-cart mb-5 mb-lg-10">
                                        {item.name}
                                      </div>
                                    </Link>
                                    <div
                                      className="fs-14 mb-5 mb-lg-10"
                                      data-title="Giá"
                                    >
                                      <span nh-cart-price={350000}>
                                        {convertCurrency(item.price)}
                                      </span>
                                    </div>
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
                                            changeQuality("minus", item)
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
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-sm-4 col-3">
                              <div className="text-right flex-column justify-content-between d-flex h-100">
                                <div
                                  className="remove-cart"
                                  onClick={() => deleteProduct(item.id)}
                                >
                                  <div
                                    nh-remove-item-cart={89}
                                    className="remove-mini-cart"
                                  >
                                    Xóa
                                  </div>
                                </div>
                                <div
                                  className="font-weight-bold fs-18"
                                  data-title="Tiền"
                                >
                                  <span nh-cart-total-item={350000}>
                                    {convertCurrency(item.quality * item.price)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="note-cart color-gray">
                        Lưu ý: Nhân Viên DVKH sẽ xác nhận lại đơn hàng của Bạn
                        trước khi giao hàng.
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-4 col-12">
                      <div className="title-cart-content font-weight-bold fs-16 mb-10">
                        Tóm tắt đơn hàng
                      </div>
                      <div className="entire-cart-totals mb-15 p-15 bg-white rounded-5">
                        {/* <div className="thoigian-giao border-bottom">
                          <p className="fs-16">Chọn thời gian giao hàng</p>
                        </div> */}
                        <div className="order-total d-flex justify-content-between align-items-center mb-10">
                          <div className="fs-16">Thành tiền</div>
                          <div>
                            <b>
                              <span className="price-amount fs-16 fs-lg-18 font-weight-bold color-hightlight">
                                <span nh-cart-total>
                                  {convertCurrency(total)}
                                </span>
                              </span>
                            </b>
                          </div>
                        </div>
                        <div className="proceed-to-checkout text-uppercase fs-16">
                          <Link href="/order/checkout">
                            <div
                              nh-cart-action="checkout"
                              className="btn-checkout bg-main-1 btn-1a color-white d-block m-auto px-25 py-10 rounded text-center"
                            >
                              Đặt hàng
                            </div>
                          </Link>
                        </div>
                        <div className="text-center fs-16">
                          <img
                            nh-lazy="image"
                            className="img-fluid"
                            alt="icon"
                            src="https://5sfood.vn/templates/fashion02/assets/media/icon/back-arrow.png"
                            style={{}}
                          />
                          <div className="color-hightlight">
                            <Link href="/">Tiếp tục mua hàng</Link>
                          </div>
                        </div>
                        <p className="text-center">
                          Phiếu giảm giá được sử dụng bước tiếp theo.
                        </p>
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
export default Order;
