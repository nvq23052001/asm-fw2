import React from "react";
import className from "classnames/bind";

import styles from "./Admin.module.scss";
import Header from "../components/Header";
import Sidebar from "../DefaultLayout/Sidebar";

type Props = {
  children: React.ReactNode;
};

const cx = className.bind(styles);

function AdminLayout({ children }: Props) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
