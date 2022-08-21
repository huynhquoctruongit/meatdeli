import Link from "next/link";
const Menu = ({ setOpenMenu, isOpenMenu, dataCate, openMenu }) => {

  return (
    <div>
      <div
        onClick={() => setOpenMenu(false)}
        className={`back-drop ${isOpenMenu ? "open" : ""}`}
      ></div>
      <nav
        id="menu-section"
        className={`menu-section p-0 ${isOpenMenu ? "open" : ""}`}
        nh-menu="sidebar"
      >
        <div className="bg-main px-15 pt-5 pb-15">
          <div className="menu-top mt-0 mb-0">
            <div
              onClick={() => openMenu()}
              href="#"
              nh-menu="btn-close"
              className="close-sidebar effect-rotate icon-close"
            >
              <i className="iconsax isax-add" />
            </div>
          </div>
        </div>
        <ul>
          {dataCate?.map((item, index) => {
            if (item?.children?.nodes.length > 0) {
              return (
                <Link href={`/category/${item.slug}`}>
                  <li onClick={() => openMenu()} className="position-relative">
                    <div>
                      <>
                        <span className="icon-name-marker">
                          <img
                            src={item.image.sourceUrl}
                            alt="Thịt nhập khẩu"
                            className="marker-image"
                          />
                        </span>
                        <span className="text-name">{item?.name}</span>
                        <span className="iconsax isax-arrow-down-1" />
                      </>
                    </div>
                    <span className="grower" nh-toggle="y3pn0xs4ia" />
                    <ul
                      nh-toggle-element="y3pn0xs4ia"
                      className="entry-menu dropdown"
                    >
                      <li className=" ">
                        <div className="menu-link" href="/thit-bo-my">
                          Thịt bò Mỹ
                        </div>
                      </li>
                      <li className=" ">
                        <div className="menu-link" href="/thit-bo-uc">
                          Thịt bò Úc
                        </div>
                      </li>
                      <li className=" ">
                        <div className="menu-link" href="/thit-bo-nhat-ban">
                          Thịt bò Nhật Bản
                        </div>
                      </li>
                    </ul>
                  </li>
                </Link>
              );
            }
          })}

          <li onClick={() => openMenu()}>
            <div href="/">
              <>
                <span className="text-name">Công thức hay</span>
                <span className="iconsax isax-arrow-down-1" />
              </>
            </div>
          </li>
          <li>
            <div href="/tin-tuc">
              <>
                <span className="text-name">Blog tin tức</span>
                <span className="iconsax isax-arrow-down-1" />
              </>
            </div>
          </li>
          <Link href="gioi-thieu">
            <li onClick={() => openMenu()}>
              <div>
                <span className="icon-name-marker" />
                <span className="text-name">Giới thiệu</span>
                <span className="iconsax isax-arrow-down-1" />
              </div>
            </li>
          </Link>
          <li onClick={() => openMenu()}>
            <div href="/huong-dan-dat-hang">
              <>
                <span className="icon-name-marker" />
                <span className="text-name">Hướng dẫn đặt hàng</span>
                <span className="iconsax isax-arrow-down-1" />
              </>
            </div>
          </li>
          <li>
            <div href="/">
              <>
                {" "}
                <span className="icon-name-marker" />
                <span className="text-name">Phương thức thanh toán</span>
                <span className="iconsax isax-arrow-down-1" />
              </>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
