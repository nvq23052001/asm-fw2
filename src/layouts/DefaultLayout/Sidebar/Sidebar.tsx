import React from "react";
import className from "classnames/bind";

import style from "./Sidebar.module.scss";

type Props = {};

const cx = className.bind(style);

function Sidebar({}: Props) {
  return <div className={cx("wrapper")}>Sidebar</div>;
}

export default Sidebar;
