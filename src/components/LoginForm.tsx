"use client";
import React from "react";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { URL } from "@/app/data/url";

type FieldType = {
  userID?: string;
  userPW?: string;
  remember?: string;
};

const LoginForm = () => {
  const router = useRouter();

  const onFinish = (values: FieldType) => {
    console.log("Success:", values);
    if (values.userID === "admin" && values.userPW === "admin") {
      router.push(URL.SETTING);
    } else {
      alert("아이디와 비밀번호를 확인해주세요");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
        name="userID"
        rules={[{ required: true, message: "아이디를 입력해주세요" }]}
        style={{ marginBottom: "10px" }}
      >
        <Input placeholder="아이디를 입력해주세요" size="large" />
      </Form.Item>

      <Form.Item<FieldType>
        name="userPW"
        rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
        style={{ marginBottom: "10px" }}
      >
        <Input.Password placeholder="비밀번호를 입력해주세요" size="large" />
      </Form.Item>

      <Form.Item<FieldType> name="remember" valuePropName="checked">
        <Flex vertical={false} justify="space-between" align="center">
          <Checkbox>자동로그인</Checkbox>
          <Button type="text">아이디 | 비밀번호 찾기</Button>
        </Flex>
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
            // htmlType="submit"
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
