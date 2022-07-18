import React from "react";
import className from "classnames/bind";

import styles from "./Admin.module.scss";
import styled from "styled-components";

import Header from "../components/Admin/Header";
import Footer from "../components/Admin/Footer";

import Sidebar from "../components/Admin/Sidebar";
import { Breadcrumb, Layout, Menu } from "antd";

type Props = {
  children: React.ReactNode;
};

const { Content, Sider } = Layout;

const cx = className.bind(styles);

function AdminLayout({ children }: Props) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: "0 24px 24px" }}>
          <ContentCustom>{children}</ContentCustom>
        </Layout>
      </Layout>
    </div>
  );
}

const ContentCustom = styled(Content)`
  min-height: calc(100vh - 90px);
`;
export default AdminLayout;
