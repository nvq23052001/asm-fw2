import React from "react";
import classNames from "classnames/bind";

import style from "./NotSidebarLayout.module.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
const cx = classNames.bind(style);

type Props = {
  children: React.ReactNode;
};

function NotSidebarLayout({ children }: Props) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default NotSidebarLayout;
