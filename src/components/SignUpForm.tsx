"use client";
import React from "react";
import { Button, Form, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { signup } from "@/service/user";

type FieldType = {
  userID: string;
  userPW: string;
  email: string;
  signature: any; // 수정: UploadFile에서 any로 변경
};

const SignUpForm = () => {
  const router = useRouter();

  const onFinish = async (values: FieldType) => {
    if (
      !values.userID ||
      !values.userPW ||
      !values.email ||
      !values.signature
    ) {
      return;
    }

    // 서명 이미지를 base64로 변환
    const file = values.signature[0].originFileObj;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Signature = reader.result as string;

      try {
        await signup(
          values.userID,
          values.userPW,
          values.email,
          base64Signature
        );
        message.success("회원가입에 성공했습니다.");
        router.push("/login"); // Adjust the URL as necessary
      } catch (error) {
        if (error instanceof Error) {
          message.error(error.message);
        } else {
          message.error("알 수 없는 오류가 발생했습니다.");
        }
      }
    };
    reader.onerror = (error) => {
      message.error("이미지 변환에 실패했습니다.");
      console.error("Image conversion error:", error);
    };
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    const fileList = Array.isArray(e) ? e : e?.fileList;
    return fileList;
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
          maxCount={1}
          beforeUpload={() => false} // 파일 업로드를 직접 처리하기 위해 기본 업로드 동작 방지
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
