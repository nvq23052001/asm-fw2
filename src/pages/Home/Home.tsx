import React from "react";
import className from "classnames/bind";

import styles from "./Home.module.scss";

import ProductItem from "~/components/ProductItem";
type Props = {};

const cx = className.bind(styles);

function Home({}: Props) {
  return (
    <div className={cx("wrapper")}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
}

export default Home;
