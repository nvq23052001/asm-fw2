import React from "react";
import className from "classnames/bind";

import styles from "./Home.module.scss";

import ProductItem from "~/components/ProductItem";
import Cart from "~/components/Cart";
type Props = {};

const cx = className.bind(styles);

function Home({}: Props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      <Cart />
    </div>
  );
}

export default Home;
