import Link from "next/link";
import { searchProd } from "@/geters/home";
import { apollo } from "@/api/index";
// export async function getStaticProps() {
//   const result = await apollo.query({ query: searchProd });
//   const home = {};
//   Object.keys(result?.data || {}).map((key) => {
//     const element = result?.data[key];
//     home[key] = element?.nodes || element?.posts || [];
//   });
//   const { products } = home;

//   return {
//     props: { 1: "2" },
//   };
// }
const Search = () => {
  // console.log(props,'props');
  return (
    <div>
      <div nh-row="x7o5ch9" className>
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="dhlnwsf" nh-block-cache="true" className>
                <div className="my-50">
                  <h2 className="title-section mt-30 text-center">Tìm kiếm</h2>
                  <form
                    action="/tim-kiem"
                    method="get"
                    autoComplete="off"
                    className="box-suggest"
                  >
                    <div className="input-group">
                      <input
                        nh-auto-suggest="product"
                        name="keyword"
                        placeholder="Từ khóa tìm kiếm"
                        type="text"
                        className="form-control"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-submit" nh-btn-submit>
                          Tìm kiếm
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
      <div nh-row="u2zfv6c" className="mb-80">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div
                nh-block="x7p9cdv"
                nh-block-cache="false"
                className="list-product-cat mb-40"
              >
                <div className="d-flex justify-content-between align-items-center mb-10 mb-xl-0">
                  <h3 className="title-section mb-0 mb-xl-10">Sản phẩm</h3>
                </div>
                <div className="section-product-scoll">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-6">
                      <div
                        nh-product={97}
                        nh-product-item-id={128}
                        nh-product-attribute-special='{"kg_kg":{"product_item_id":128,"code":"1000026","price":575000,"price_special":460000,"apply_special":true,"quantity_available":111}}'
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
                              Giảm 20%
                            </span>
                          </div>
                          <div className="wrp-effect-change-img ratio-custome">
                            <Link
                              href="/ca-hoi-nauy-nguyen-con-seafood-from-norway-sfn"
                              title="Cá hồi Na Uy nguyên con - Seafood From Norway (SFN)"
                            >
                              <img
                                nh-lazy="image"
                                className="img-fluid rounded-12"
                                alt="Cá hồi Na Uy nguyên con - Seafood From Norway (SFN)"
                                src="https://cdn.5sfood.vn/media/san-pham-5s/ca-hoi-nauy-tuoi-nguyen-con/ca-hoi-nauy-nguyen-con-sfn.jpg"
                                style={{}}
                              />
                            </Link>
                          </div>
                          <div className="product-quick-shop">
                            <Link
                              href="#"
                              nh-btn-action="close-quick-shop"
                              className="quick-shop-close icon-close"
                            >
                              <i className="iconsax isax-add" />
                            </Link>
                            <div className="entry-quick-shop">
                              <div className="d-flex align-items-center flex-column h-100 justify-content-center">
                                <div className="entire-attribute text-center">
                                  <div
                                    nh-attribute="kg"
                                    className="list-attribute"
                                  >
                                    <label>Kg:</label>
                                    <div className="product-attribute-switch d-flex justify-content-center flex-wrap text-switch">
                                      <div
                                        nh-attribute-option="kg"
                                        className="inner-product-attribute"
                                        nh-lazy="image-background"
                                        delay="all"
                                      >
                                        Kg
                                      </div>
                                    </div>
                                    <Link
                                      nh-btn-action="clear-attribute-option"
                                      className="reset-attribute effect-border-scale"
                                      href="#"
                                    >
                                      Xóa
                                    </Link>
                                  </div>
                                </div>
                                <div className="entire-cart d-flex flex-column align-items-center flex-wrap ">
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
                                  <Link
                                    nh-btn-action="add-cart"
                                    href="#"
                                    className="add-to-cart added_to_cart effect-shadow"
                                  >
                                    <i className="iconsax isax-shopping-cart" />
                                  </Link>
                                </div>
                                <div
                                  nh-quantity-product="out-stock"
                                  className="out-of-stock d-none"
                                >
                                  Sản phẩm hết hàng
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="inner-content">
                          <h4 className="product-title">
                            <Link href="/ca-hoi-nauy-nguyen-con-seafood-from-norway-sfn">
                              Cá hồi Na Uy nguyên con - Seafood From Norway ...
                            </Link>
                          </h4>
                          <div className="product-rating-price">
                            <div className="price">
                              <span className="price-amount">
                                460,000
                                <span className="currency-symbol">đ</span>
                              </span>
                              <span className="unit fs-11 fs-lg-12 pl-5">
                                / Kg
                              </span>
                              <div className="price-amount old-price">
                                575,000
                                <span className="currency-symbol">đ</span>
                              </div>
                            </div>
                          </div>
                          <Link href="#">
                            <div className="mt-5 mt-lg-10">
                              <div
                                className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                nh-btn-action="add-cart"
                                title="Thêm giỏ hàng"
                              >
                                <div>
                                  <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />{" "}
                                  Thêm giỏ hàng
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                      <div
                        nh-product={96}
                        nh-product-item-id={126}
                        nh-product-attribute-special
                        className="product-item bg-white rounded-15"
                      >
                        <div className="inner-image">
                          <div className="product-status" />
                          <div className="product-status-right" />
                          <div className="wrp-effect-change-img ratio-custome">
                            <Link
                              href="/duoi-ca-hoi-nauy-phi-le-100gr-seafood-from-norway-sfn"
                              title="Đuôi cá hồi Na Uy phi lê 100gr - Seafood From Norway (SFN)"
                            >
                              <img
                                nh-lazy="image"
                                className="img-fluid rounded-12"
                                alt="Đuôi cá hồi Na Uy phi lê 100gr - Seafood From Norway (SFN)"
                                src="https://cdn.5sfood.vn/media/san-pham-5s/duoi-ca-hoi-nauy-phi-le/duoi-ca-hoi-nauy-phi-le.jpg"
                                style={{}}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="inner-content">
                          <h4 className="product-title">
                            <Link href="/duoi-ca-hoi-nauy-phi-le-100gr-seafood-from-norway-sfn">
                              Đuôi cá hồi Na Uy phi lê 100gr - Seafood From ...
                            </Link>
                          </h4>
                          <div className="product-rating-price">
                            <div className="price">
                              <span className="price-amount">
                                62,000<span className="currency-symbol">đ</span>
                              </span>
                            </div>
                          </div>
                          <div className="mt-5 mt-lg-10">
                            <Link href="#">
                              <div
                                className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center"
                                nh-btn-action="add-cart"
                                title="Thêm giỏ hàng"
                              >
                                <div>
                                  <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />{" "}
                                  Thêm giỏ hàng
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="pagination justify-content-center">
                  <Link href="#">
                    <li className="page-item active">
                      <span className="page-link">1</span>
                    </li>
                  </Link>
                  <Link href="#">
                    <div
                      className="page-link"
                      nh-link-redirect="/tim-kiem?page=2"
                    >
                      <li className="page-item">2</li>
                    </div>
                  </Link>
                  <Link href="#">
                    <div
                      className="page-link"
                      nh-link-redirect="/tim-kiem?page=3"
                    >
                      <li className="page-item">3</li>
                    </div>
                  </Link>
                </ul>
              </div>
              <div nh-block="tsldivb" nh-block-cache="false" className>
                <h3 className="title-section mb-20">Tin tức</h3>
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <article className="article-item mb-30 hover-image">
                      <div className="inner-image mb-15 position-relative overflow-hidden rounded-15">
                        <div className="featured-media" />
                        <div className="ratio-8-5">
                          <Link
                            href="/cam-ket-chat-luong"
                            title="Cam kết chất lượng"
                          >
                            <img
                              nh-lazy="image"
                              className="img-fluid rounded-15"
                              alt="Cam kết chất lượng"
                              src="https://cdn.5sfood.vn/thumbs/feedback/khach-hang-4_thumb_350.png"
                              style={{}}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="inner-content">
                        <h4 className="article-title">
                          <Link href="/cam-ket-chat-luong">
                            Cam kết chất lượng
                          </Link>
                        </h4>
                        <div className="article-entry-info">
                          <span className="article-category">
                            <Link href="/chinh-sach-dich-vu-va-cam-ket">
                              <div>
                                Chính sách, dịch vụ và cam kết
                                <span className="comma-item">, </span>
                              </div>
                            </Link>
                          </span>
                          <span className="post-date">26/07/2022</span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <article className="article-item mb-30 hover-image">
                      <div className="inner-image mb-15 position-relative overflow-hidden rounded-15">
                        <div className="featured-media" />
                        <div className="ratio-8-5">
                          <Link
                            href="/chinh-sach-bao-mat"
                            title="Chính sách bảo mật"
                          >
                            <img
                              nh-lazy="image"
                              className="img-fluid rounded-15"
                              alt="Chính sách bảo mật"
                              src="https://cdn.5sfood.vn/thumbs/san-pham-5s/ca-hoi-chile/ca-hoi-chile-cat-khuc%20(1)_thumb_350.jpg"
                              style={{}}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="inner-content">
                        <h4 className="article-title">
                          <Link href="/chinh-sach-bao-mat">
                            Chính sách bảo mật
                          </Link>
                        </h4>
                        <div className="article-entry-info">
                          <span className="article-category">
                            <Link href="/chinh-sach-dich-vu-va-cam-ket">
                              <div>
                                Chính sách, dịch vụ và cam kết
                                <span className="comma-item">, </span>
                              </div>
                            </Link>
                          </span>
                          <span className="post-date">26/07/2022</span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <article className="article-item mb-30 hover-image">
                      <div className="inner-image mb-15 position-relative overflow-hidden rounded-15">
                        <div className="featured-media" />
                        <div className="ratio-8-5">
                          <Link
                            href="/chinh-sach-giai-quyet-khieu-nai"
                            title="Chính sách giải quyết khiếu nại"
                          >
                            <img
                              nh-lazy="image"
                              className="img-fluid rounded-15"
                              alt="Chính sách giải quyết khiếu nại"
                              src="https://cdn.5sfood.vn/thumbs/sfn/cong-nghe-danh-bat-bao-quan-hien-dai-theo-chuan-eu_thumb_350.jpg"
                              style={{}}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="inner-content">
                        <h4 className="article-title">
                          <Link href="/chinh-sach-giai-quyet-khieu-nai">
                            Chính sách giải quyết khiếu nại
                          </Link>
                        </h4>
                        <div className="article-entry-info">
                          <span className="article-category">
                            <Link href="/chinh-sach-dich-vu-va-cam-ket">
                              <div>
                                Chính sách, dịch vụ và cam kết
                                <span className="comma-item">, </span>
                              </div>
                            </Link>
                          </span>
                          <span className="post-date">26/07/2022</span>
                        </div>
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
  );
};
export default Search;
