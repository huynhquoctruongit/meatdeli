import { useEffect } from "react";
import Link from "next/link";
import { searchProductGQL } from "@/geters/products";
import { searchNewsGQL } from "@/geters/news";
import { apollo } from "@/api/index";
import { useState } from "react";
import { useRouter } from "next/router";
import { convertCurrency } from "@/services/helper";
export async function getServerSideProps(context) {
  const { q } = context.params;

  const products = await apollo.query({
    query: searchProductGQL,
    variables: { search: q },
  });

  const news = await apollo.query({
    query: searchNewsGQL,
    variables: { search: q },
  });
  const newSearch = news?.data?.posts;
  const productSearch = products?.data?.products;
  return {
    props: { productSearch, newSearch, q },
  };
}
const Search = ({ productSearch, newSearch }) => {
  const { nodes } = productSearch;
  const { nodes: nodesNews } = newSearch;
  const router = useRouter();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  const onSearch = () => {
    router.push(`/tim-kiem/${value}`);
    setLoading(true);
  };
  useEffect(() => {
    setLoading(false);
  }, [productSearch, newSearch]);
  return (
    <div>
      <div nh-row="x7o5ch9" className>
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="dhlnwsf" nh-block-cache="true" className>
                <div className="my-50">
                  <h2 className="title-section mt-30 text-center">Tìm kiếm</h2>

                  <div className="input-group">
                    <input
                      nh-auto-suggest="product"
                      placeholder="Từ khóa tìm kiếm"
                      type="text"
                      className="form-control"
                      onChange={onChangeValue}
                      value={value}
                    />
                    <div className="input-group-append">
                      <button
                        onClick={() => {
                          onSearch();
                        }}
                        className="btn btn-submit"
                      >
                        {loading ? "Vui lòng đợi..." : "Tìm kiếm"}
                      </button>
                    </div>
                  </div>
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
                    {nodes?.map((item, index) => (
                      <div key={index} className="col-lg-3 col-md-6 col-6">
                        <div
                          nh-product-attribute-special
                          className="product-item bg-white rounded-15"
                        >
                          <div className="inner-image">
                            <div className="product-status" />
                            <div className="product-status-right" />
                            <div className="wrp-effect-change-img ratio-custome">
                              <Link href={`/chi-tiet-sp/${item?.slug}`}>
                                <img
                                  nh-lazy="image"
                                  className="img-fluid rounded-12"
                                  src={item?.image.sourceUrl}
                                  alt={item?.name}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="inner-content">
                            <h4 className="product-title">
                              <Link href={`/chi-tiet-sp/${item?.slug}`}>
                                {item?.name}
                              </Link>
                            </h4>
                            <div className="product-rating-price">
                              <div className="price">
                                <span className="price-amount">
                                  {convertCurrency(item?.price)}
                                </span>
                              </div>
                            </div>
                            <div className="mt-5 mt-lg-10">
                              <Link
                                nh-btn-action="add-cart"
                                href="#"
                                title="Thêm giỏ hàng"
                              >
                                <div className="btn-product-action fs-14 fs-xl-16 bg-hightlight w-100 text-center rounded text-white d-block d-flex align-items-center justify-content-center">
                                  <i className="iconsax isax-add fs-22 fs-xl-24 pr-lg-10 pr-5" />{" "}
                                  Thêm giỏ hàng
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* <ul className="pagination justify-content-center">
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
                </ul> */}
              </div>
              <div nh-block="tsldivb" nh-block-cache="false" className>
                <h3 className="title-section mb-20">Tin tức</h3>
                <div className="row">
                  {nodesNews?.map((item, index) => (
                    <div
                      key={index}
                      className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"
                    >
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
                                src={item.featuredImage?.node?.sourceUrl}
                                alt={item.title}
                                loading="lazy"
                                srcSet={item.featuredImage?.node?.srcSet}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="inner-content">
                          <h4 className="article-title">
                            <Link href="/cam-ket-chat-luong">
                              {item?.title}
                            </Link>
                          </h4>
                          <div className="article-entry-info">
                            <span className="article-category">
                              <Link href="/chinh-sach-dich-vu-va-cam-ket">
                                <>
                                  Chính sách, dịch vụ và cam kết
                                  <span className="comma-item">, </span>
                                </>
                              </Link>
                            </span>
                            <span className="post-date">26/07/2022</span>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
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
