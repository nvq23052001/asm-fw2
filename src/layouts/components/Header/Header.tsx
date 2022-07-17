import React from "react";
import className from "classnames/bind";
import { Link } from "react-router-dom";

import style from "./Header.module.scss";
import config from "~/config";
import images from "~/assets";
import Search from "~/components/Search";
import { PlaceIcon, ShipIcon, CartIcon, CarIcon } from "~/Icons";

const cx = className.bind(style);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to={config.router.home}>
            <img src={images.logo} alt="" />
          </Link>
        </div>
        <Search />
        <div className={cx("actions")}>
          <div className={cx("actions-contact")}>
            <span>Gọi mua hàng</span>
            <span>1800 2023</span>
          </div>
          <div className={cx("actions-info")}>
            <PlaceIcon />
            <div className={cx("actions-title")}>
              <span>Cửa hàng</span>
              <span>gần bạn</span>
            </div>
          </div>
          <div className={cx("actions-info")}>
            <CarIcon />
            <div className={cx("actions-title")}>
              <span>Tra cứu</span>
              <span>đơn hàng</span>
            </div>
          </div>
          <div className={cx("actions-info")}>
            <CartIcon />
            <div className={cx("actions-title")}>
              <span>Giỏ</span>
              <span>hàng</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
