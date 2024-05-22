"use client";
import React from "react";
import { Button, Flex, Form, Input, message } from "antd";
import { useRouter } from "next/navigation";
import { URL } from "@/app/data/url";
import { login } from "@/service/auth";

type FieldType = {
  userEmail?: string;
  userPW?: string;
  remember?: boolean;
};

const LoginForm = () => {
  const router = useRouter();

  const onFinish = async (values: FieldType) => {
    if (!values.userEmail || !values.userPW) {
      return;
    }

    await login(values.userEmail, values.userPW);

    if (values.userEmail === "admin") {
      router.push(URL.ADMIN);
    } else {
      router.push(URL.MODE);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    message.error(errorInfo);
  };

  const onSignUp = () => {
    router.push(URL.SIGNUP);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      style={{
        width: "320px",
      }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<FieldType>
        name="userEmail"
        rules={[{ required: true, message: "이메일을 입력해주세요" }]}
        style={{ marginBottom: "10px" }}
      >
        <Input placeholder="이메일을 입력해주세요" size="large" />
      </Form.Item>

      <Form.Item<FieldType>
        name="userPW"
        rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
        style={{ marginBottom: "10px" }}
      >
        <Input.Password placeholder="비밀번호를 입력해주세요" size="large" />
      </Form.Item>

      <Form.Item>
        <Flex vertical gap="small">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "320px", height: "52px" }}
          >
            로그인
          </Button>
          <Button
            type="text"
            size="large"
            style={{ width: "320px", height: "52px" }}
            onClick={onSignUp}
          >
            회원가입
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
