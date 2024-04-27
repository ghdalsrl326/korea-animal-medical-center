"use client";
import React from "react";
import {
  Button,
  Form,
  Input,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

type FieldType = {
  userID: string;
  userPW: string;
  email: string;
  signature: UploadFile;
};

const uploadProps: UploadProps = {
  beforeUpload: (file) => {
    const isImage =
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png";
    if (!isImage) {
      message.error(`${file.name} is not a jpg/png file`);
    }
    return isImage || Upload.LIST_IGNORE;
  },
};

const SignUpForm = () => {
  const router = useRouter();

  const onFinish = (values: FieldType) => {
    console.log("Form Data:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    const fileList = Array.isArray(e) ? e : e?.fileList;
    return fileList;
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
    <Form
      name="signUp"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 20 }}
      initialValues={{}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="horizontal"
    >
      <Form.Item
        label="아이디"
        name="userID"
        rules={[{ required: true, message: "아이디를 입력해주세요" }]}
      >
        <Input placeholder="아이디 입력" />
      </Form.Item>
      <Form.Item
        label="비밀번호"
        name="userPW"
        rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
      >
        <Input.Password placeholder="비밀번호 입력" />
      </Form.Item>
      <Form.Item
        label="이메일"
        name="email"
        rules={[{ required: true, message: "이메일을 입력해주세요" }]}
      >
        <Input placeholder="이메일 입력" />
      </Form.Item>
      <Form.Item<Partial<FieldType>>
        label="서명 업로드"
        name="signature"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: "서명을 업로드해주세요" }]}
      >
        <Upload
          name="signature"
          listType="picture"
          customRequest={customRequest} // Mock upload
          // action="your-upload-endpoint" // 서버 개발 후 customRequest 대체
          maxCount={1}
          {...uploadProps}
        >
          <Button icon={<UploadOutlined />}>서명 업로드</Button>
        </Upload>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "320px", height: "52px" }}
        >
          회원가입
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
