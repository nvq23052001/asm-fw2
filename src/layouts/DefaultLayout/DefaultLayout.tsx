import React from "react";
import classNames from "classnames/bind";

import style from "./DefaultLayout.module.scss";

import Header from "../components/Header";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";
const cx = classNames.bind(style);

type Props = {
  children: React.ReactNode;
};

function DefaultLayout({ children }: Props) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
