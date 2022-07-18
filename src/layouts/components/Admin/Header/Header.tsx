import { Layout } from "antd";
import React from "react";
import styled from "styled-components";

import Image from "~/assets";

const { Header, Content } = Layout;

const App: React.FC = () => (
  <Layout>
    <HeaderCustom>
      <Logo src={Image.logo} />
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
    </HeaderCustom>
  </Layout>
);

const HeaderCustom = styled(Header)`
  background-color: #00b0d7;
  height: 64px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 64px;
  height: auto;
`;

export default App;
