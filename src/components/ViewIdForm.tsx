"use client";
import React from "react";
import { Button, Form, FormProps, Input } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  petID?: string;
};

const ViewIdForm = () => {
  const router = useRouter();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    router.push(`/report/${values.petID}`);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="환자ID"
        name="petID"
        rules={[{ required: true, message: "Please input your 환자ID!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{ width: "320px" }}
        >
          조회
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ViewIdForm;
