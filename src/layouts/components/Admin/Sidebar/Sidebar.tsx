import {
  PhoneOutlined,
  LaptopOutlined,
  TabletFilled,
  AudioOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const item3: MenuProps["items"] = [
  {
    key: "cellphone",
    icon: <PhoneOutlined />,
    label: <Link to="/admin/products">Điện thoại</Link>,
  },
  { key: "laptop", icon: <LaptopOutlined />, label: "Laptop" },
  { key: "tablet", icon: <TabletFilled />, label: "Máy tính bảng" },
  { key: "audio", icon: <AudioOutlined />, label: "Âm thanh" },
  {
    key: "categories",
    icon: <SettingOutlined />,
    label: <Link to="/admin/categories">Categories</Link>,
  },
];

const Sidebar: React.FC = () => (
  <Sider collapsible={true} width={200} className="site-layout-background">
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
      items={item3}
    />
  </Sider>
);

export default Sidebar;
