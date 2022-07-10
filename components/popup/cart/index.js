import React, { useEffect, useState } from "react";
import Link from "next/link";
const Card = ({ open, setOpen, isChangeCart }) => {
  const [carts, setCarts] = useState([]);
  var isChangeLocal = false;
  useEffect(() => {
    let localCart = localStorage.getItem("cart");
    setCarts(
      localCart !== "null" && localCart !== null && JSON.parse(localCart)
    );
    window.globalvar1 = !isChangeLocal;
  }, [isChangeCart]);

  const deleteProduct = (id) => {
    let localCart = JSON.parse(localStorage.getItem("cart"));
    var filteredItems = localCart.filter((itemVal) => itemVal.id !== id);
    localStorage.setItem("cart", JSON.stringify(filteredItems));
    setCarts(filteredItems);
  };

  var total = 0;
  carts?.map((item, index) => {
    console.log(index, "index");
    total = total += parseInt(item.quality) * parseInt(item.price);
  });

  return (
    <div
      nh-mini-cart="sidebar"
      className={`sidebar-mini-cart ${open ? "open" : ""}`}
    >
      <div className="title-top-cart d-flex  justify-content-between align-items-center  mx-md-30 mx-10">
        <div className="title-cart fs-md-24 fs-17 font-weight-bold">
          Giỏ hàng của bạn
        </div>
        <div className="sidebar-header">
          <Link
            onClick={() => setOpen(false)}
            href="#"
            nh-mini-cart="close"
            className="close-sidebar effect-rotate icon-close"
          >
            <i className="iconsax isax-add" />
          </Link>
        </div>
      </div>
      <div className="content-mini-cart">
        <div className="box-minicart " nh-total-quantity-cart={5}>
          <ul className="cart-list list-unstyled mb-0 px-10 px-md-30">
            {carts.length > 0 &&
              carts.map((item) => (
                <li
                  key={item.id}
                  nh-cart-item={52}
                  nh-cart-item-quantity={5}
                  className="cart-item clearfix"
                >
                  <div className="inner-image">
                    <Link href={item.url} title={item.name}>
                      <img
                        className="img-fluid"
                        src={item.img}
                        alt="Thịt dẻ sườn bò Mỹ - Rib Finger Beef USDA Choice (loại cao cấp)"
                      />
                    </Link>
                  </div>
                  <div className="inner-content">
                    <Link
                      className="product-title mr-5"
                      href="/thit-de-suon-bo-my-rib-finger-beef-usda-choice-loai-cao-cap"
                    >
                      {item.name}
                    </Link>
                    <div className="quantity">
                      <span className="mr-5">{item.quality}</span>x
                      <span className="price-amount ml-5">
                        {item.price}
                        <span className="currency-symbol">đ</span>
                      </span>
                    </div>
                    <div className="btn-delete-save mt-5">
                      <ul className="mb-0 pl-0 d-flex font-weight-bold">
                        <li className="mr-15">
                          <Link
                            onClick={() => deleteProduct(item.id)}
                            href="#"
                            className="color-hover"
                            nh-remove-item-cart={52}
                          >
                            Xóa
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <div className="entire-bottom-minicart bg-white px-10 px-md-30">
            <div className="total-price mb-10 clearfix">
              <label>Giá tạm tính: </label>
              <p className="price-amount">
                {total}
                <span className="currency-symbol">đ</span>
              </p>
            </div>
            <div className="mini-cart-btn">
              <Link
                href="/order/cart-info"
                className="btn-cart-info btn-submit"
              >
                Xem Giỏ hàng
              </Link>
              <Link href="/order/info" className="btn-checkout btn-submit">
                Thanh toán
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
