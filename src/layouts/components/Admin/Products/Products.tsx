import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Space, Select, Modal } from "antd";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { deleteProduct, getAll } from "~/api/product";
import { getCateFilter, getCates } from "~/api/categories";

interface DataType {
  id: number;
  name: string;
  saleOffPrice: number;
  feature: string;
  description: string;
  image: string;
}
const { Paragraph } = Typography;
const { Option } = Select;

const ProductAdminPage = () => {
  const [dataTable, setDataTable] = useState([]);
  const [dataCates, setDataCates] = useState([]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Đặc điểm",
      dataIndex: "feature",
      key: "feature",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Giá khuyến mãi",
      dataIndex: "saleOffPrice",
      key: "saleOffPrice",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <Space size="middle">
          <img src={image} style={{ width: 200 }} alt="" />
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (data) => (
        <Space size="middle" onClick={() => handleDelete(data.id)}>
          <DeleteOutlined />
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (data) => (
        <Space size="middle">
          <Link to={`/admin/product/${data.id}/edit`}>
            <EditOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  function handleDelete(id: number) {
    Modal.confirm({
      title: "Are you sure? You want to delete this product?",
      okText: "Yes",
      onOk: async () => {
        try {
          const { data } = await deleteProduct(id);
          setDataTable((preState) =>
            preState.filter((data: any) => data.id !== id)
          );
        } catch {}
      },
    });
  }

  const handleChange = async (value: { value: string; key: number }) => {
    let data;
    try {
      if (value.key) {
        console.log(value.key);
        data = await getCateFilter(value.key);
        setDataTable(data.data.products.reverse());
      } else {
        console.log(value.key);
        data = await getAll();
        setDataTable(data.data.reverse());
      }
    } catch {}
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAll();
        const result = data.reverse();
        setDataTable(result);
      } catch (err) {}
    };

    const fetchCate = async () => {
      try {
        const data = await getCates();
        setDataCates(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    fetchCate();
  }, []);
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Điện thoại
        </Typography.Title>
        <Select
          labelInValue
          defaultValue={{ value: "Tat ca", key: 0 }}
          style={{ width: 200 }}
          onChange={handleChange}
        >
          <Option value="">Tat ca</Option>
          {dataCates.map((data: any) => {
            return <Option value={data.id}>{data.name}</Option>;
          })}
        </Select>
        <Link to="/admin/product/add">
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
        </Link>
      </Breadcrumb>
      <Table columns={columns} dataSource={dataTable} />
    </>
  );
};

const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export default ProductAdminPage;
