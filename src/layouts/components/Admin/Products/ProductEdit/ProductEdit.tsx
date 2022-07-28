import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Col,
  Row,
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from "antd";
import UploadImage from "~/components/UploadImage";
import { createProduct, getOnce, updateProduct } from "~/api/product";
import { useNavigate, useParams } from "react-router-dom";
import { upload } from "~/api/images";

const { TextArea } = Input;
const { Option } = Select;

interface typeProduct {
  id: number | null;
  name: string;
  feature: string;
  description: string;
  image: string;
  originalPrice: number | null;
  saleOffPrice: number | null;
}

const ProductAdd = () => {
  const [uploadedImage, setUploadedImage] = React.useState("");
  const [product, setProduct] = React.useState<typeProduct>({
    id: null,
    name: "",
    feature: "",
    description: "",
    image: "",
    originalPrice: null,
    saleOffPrice: null,
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const handleGet = async (id: any) => {
      try {
        const { data } = await getOnce(id);
        setProduct(data);
      } catch (error) {}
    };
    handleGet(id);
  }, [id]);
  console.log(product);
  const onFinish = async (values: any) => {
    const data = {
      ...values,
      image: uploadedImage ? uploadedImage : product.image,
    };

    try {
      await updateProduct(data, id);
      message.success("Chỉnh sửa thành công");
      navigate(-1);
    } catch (err) {
      message.error("Có lỗi xảy ra");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const uploadImage = async (base64Image: string) => {
    try {
      const res = await upload(base64Image);
      const data = res.data;
      setUploadedImage(data.url);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Chinh sua san pham
        </Typography.Title>
      </Breadcrumb>
      <Row gutter={16}>
        <Col span={10}>
          <UploadImage uploadImage={uploadImage} image={product.image} />
        </Col>
        <Col span={14}>
          <Typography.Title level={5}>Chinh sua sản phẩm</Typography.Title>
          <Form
            // name="product"
            initialValues={{
              name: product.name,
              originalPrice: product.originalPrice,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            labelCol={{ span: 24 }}
          >
            <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="Tên sản phẩm"
              rules={[
                { required: true, message: "Tên sản phẩm không được trống" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="originalPrice"
                  label="Giá gốc"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Gía sản phẩm" }]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="saleOffPrice"
                  label="Giá giảm"
                  labelCol={{ span: 24 }}
                  rules={[{ required: true, message: "Gía sản phẩm" }]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Phân loại"
                  name="categoryId"
                  rules={[{ required: true }]}
                >
                  <Select style={{ width: "100%" }} size="large">
                    <Option value={+1}>Điện thoại</Option>
                    <Option value={+2}>Laptop</Option>
                    <Option value={+3}>Máy tính bảng</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="feature"
              labelCol={{ span: 24 }}
              label="Đặc điểm nổi bật"
              rules={[{ required: true, message: "Đặc điểm sản phẩm" }]}
            >
              <TextArea name="feature" />
            </Form.Item>
            <Form.Item
              name="description"
              labelCol={{ span: 24 }}
              label="Mô tả sản phẩm"
              rules={[{ required: true, message: "Mô tả sản phẩm" }]}
            >
              <TextArea name="description" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tạo mới sản phẩm
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Label = styled.div`
  font-size: 13px;
`;

export default ProductAdd;
