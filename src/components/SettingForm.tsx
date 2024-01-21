"use client";
import React from "react";
import { Button, Form, Input, Radio, Space, Upload } from "antd";
import RequiredMark from "./RequiredMark";
import { UploadOutlined } from "@ant-design/icons";

type FieldType = {
  name?: string;
  breed?: string;
  ownerName?: string;
  age?: string;
  date?: string;
  examinationType?: "first" | "second";
  signature?: Blob;
};

const SettingForm = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const customRequest = async ({ file, onSuccess, onError }: any) => {
    try {
      setTimeout(() => {
        onSuccess("ok");
      }, 1000);
    } catch (error) {
      console.error("Upload error:", error);
      onError(error);
    }
  };

  return (
    <div
      style={{
        borderRadius: "4px",
        border: "1px solid var(--Gray_3, #DEE2E6)",
        background: "var(--White, #FFF)",
        padding: "20px 40px",
        width: "80%",
      }}
    >
      <Form
        name="basic"
        layout="horizontal"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={RequiredMark}
      >
        <Form.Item<FieldType>
          label="환자정보"
          name="name"
          rules={[{ required: true, message: "환자정보 입력해주세요" }]}
          style={{ width: "480px", marginBottom: "10px" }}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          label="견종"
          name="breed"
          rules={[{ required: true, message: "견종을 입력해주세요" }]}
          style={{ width: "480px", marginBottom: "10px" }}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          label="보호자 성함"
          name="ownerName"
          rules={[{ required: true, message: "보호자 성함을 입력해주세요" }]}
          style={{ width: "480px", marginBottom: "10px" }}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          label="나이"
          name="age"
          rules={[{ required: true, message: "나이를 입력해주세요" }]}
          style={{ width: "480px", marginBottom: "10px" }}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          label="측정일"
          name="date"
          rules={[{ required: true, message: "측정일을 입력해주세요" }]}
          style={{ width: "480px", marginBottom: "10px" }}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          label="초진/재진"
          name="examinationType"
          rules={[{ required: true, message: "검사종류를 선택해주세요" }]}
          style={{ width: "480px", marginBottom: "10px" }}
        >
          <Radio.Group>
            <Radio value="first">초진</Radio>
            <Radio value="second">재진</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="수의사 서명 등록"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "서명을 업로드해주세요" }]}
          style={{ width: "480px", marginBottom: "40px" }}
        >
          <Upload
            name="signature"
            listType="picture"
            customRequest={customRequest} // Mock upload
            // action="your-upload-endpoint" // 서버 개발 후 customRequest 대체
          >
            <Button icon={<UploadOutlined />}>서명 업로드</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{ width: "210px" }}
            >
              저장하기
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SettingForm;
