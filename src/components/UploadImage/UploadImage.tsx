import React from "react";
import styled from "styled-components";
import { Typography, Button, Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const UploadImage = ({ uploadImage }: any) => {
  const [base64, setBase64] = React.useState("");

  const handleChangeImage = (event: any) => {
    const file = event.target.files[0];
    // previewFile(file)
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadImage(reader.result);
      console.log(reader.result);
      setBase64(reader.result);
    };
  };

  return (
    <Container>
      <UploadWrapper>
        <UploadIcon>
          <PlusCircleOutlined style={{ fontSize: 30 }} />
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            name="image"
            onChange={handleChangeImage}
          />
        </UploadIcon>

        {/* <Button type="dashed" shape="circle" icon={<PlusCircleOutlined />} />
                <Typography.Title level={5}>Thêm ảnh</Typography.Title> */}

        {base64 && <ImagePreview style={{}} src={base64} alt="Image" />}
      </UploadWrapper>
    </Container>
  );
};

const Container = styled.div``;

const Label = styled.div`
  font-weight: bold;
  font-size: 13px;
  text-align: left;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 1px dashed gray;
`;

const UploadIcon = styled.label`
  input {
    display: none;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
`;

export default UploadImage;
