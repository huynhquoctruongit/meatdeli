import Link from "next/link";
import { newsGQL } from "@/geters/news";
import { apollo } from "@/api/index";
export async function getStaticProps() {
  const result = await apollo.query({ query: newsGQL });
  const news = {};
  Object.keys(result?.data || {}).map((key) => {
    const element = result?.data[key];
    news[key] = element?.nodes || [];
    news["pageInfo"] = element?.pageInfo;
  });

  return { props: { news } };
}

const News = ({ news }) => {
  const { posts } = news;
  console.log(posts, "posts");
  return (
    <div>
      <div nh-row="to4396u" className="bg-white mb-20 breadcrumb-article">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="mz4eo5d" nh-block-cache="false" className>
                <nav className="breadcrumbs-section py-15">
                  <Link href="/">Trang chủ</Link>
                  <h1>
                    <Link href="/tin-tuc">
                      <span>Tin tức</span>
                    </Link>
                  </h1>
                </nav>
              </div>
              <div
                nh-block="uib6q12"
                nh-block-cache="true"
                className="menu-category-article"
              >
                {/* <div nh-menu="active" className="category-article">
                  <ul className="categories-section list-unstyled">
                    <li className>
                      <Link href="/khach-hang-phan-hoi">
                        Khách hàng phản hồi
                      </Link>
                    </li>
                    <li className>
                      <Link href="/tuyen-dung">Tuyển dụng</Link>
                    </li>
                    <li className>
                      <Link href="/tin-tuc">Tin tức</Link>
                    </li>
                    <li className>
                      <Link href="/gioi-thieu">Giới thiệu</Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div nh-row="uxq503k" className>
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div nh-block="v3mgzkp" nh-block-cache="true" className="mb-20">
                <div className="row">
                  {posts?.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-4 col-sm-4 col-12 col-12 order-2 article-right"
                    >
                      <article className="article-item mb-20 hover-image article-slide position-relative">
                        <div className="inner-image position-relative overflow-hidden rounded-10">
                          <div className="featured-media" />
                          <div className="ratio-8-5">
                            <Link
                              href="/top-list-5-mon-ngon-tu-ca-hoi-chile-cat-khuc"
                              title="Top List 5 món ngon từ cá hồi Chile cắt khúc"
                            >
                              <img
                                nh-lazy="image"
                                className="img-fluid rounded-10"
                                src={item.featuredImage?.node?.sourceUrl}
                                alt={item.title}
                                loading="lazy"
                                srcSet={item.featuredImage?.node?.srcSet}
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="inner-content">
                          <h4 className="article-title text-uppercase">
                            <a href="/top-list-5-mon-ngon-tu-ca-hoi-chile-cat-khuc">
                              {item?.title}
                            </a>
                          </h4>
                          <div className="article-description">
                            {" "}
                            Bỏ túi ngay các món ăn từ cá hồi Chile cắt khúc ngon
                            tuyệt vời của 5sfood. Thịt cá chắc mẩy, vị cá beo
                            béo cùng một chút vị ngậy đặc trưng của cá hồi sẽ
                            làm vừa lòng cả thực khách khó ...
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
export default News;
