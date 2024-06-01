"use client";
import React, { useState } from "react";
import { Button, Form, Input, Upload, message, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { signup, emailDuplicateCheck } from "@/service/doctor";
import { URL } from "@/app/data/url";

type FieldType = {
  userName: string;
  userPW: string;
  email: string;
  signature: any; // 수정: UploadFile에서 any로 변경
};

const SignUpForm = () => {
  const router = useRouter();
  const [emailChecked, setEmailChecked] = useState(false);

  const onFinish = async (values: FieldType) => {
    if (
      !values.userName ||
      !values.userPW ||
      !values.email ||
      !values.signature
    ) {
      return;
    }

    if (!emailChecked) {
      message.error("이메일 중복체크를 완료해주세요.");
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
          values.userName,
          values.userPW,
          values.email,
          base64Signature
        );
        message.success("회원가입에 성공했습니다.");
        router.push(URL.LOGIN);
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

  const handleEmailCheck = async () => {
    const email = form.getFieldValue("email");
    if (!email) {
      message.error("이메일을 입력해주세요.");
      return;
    }

    try {
      const isAvaliable = await emailDuplicateCheck(email);
      if (isAvaliable) {
        message.success("사용 가능한 이메일입니다.");
        setEmailChecked(true);
      } else {
        message.error("이미 사용 중인 이메일입니다.");
        setEmailChecked(false);
      }
    } catch (error) {
      message.error("이메일 중복체크에 실패했습니다.");
      console.error("Email check error:", error);
    }
  };

  const [form] = Form.useForm();

  return (
    <Form
      form={form}
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
        label="이름"
        name="userName"
        rules={[{ required: true, message: "이름을 입력해주세요" }]}
      >
        <Input placeholder="이름 입력" />
      </Form.Item>
      <Form.Item
        label="비밀번호"
        name="userPW"
        rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}
      >
        <Input.Password placeholder="비밀번호 입력" />
      </Form.Item>
      <Form.Item label="이메일" required>
        <Row gutter={8}>
          <Col span={16}>
            <Form.Item
              name="email"
              noStyle
              rules={[{ required: true, message: "이메일을 입력해주세요" }]}
            >
              <Input placeholder="이메일 입력" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Button onClick={handleEmailCheck}>중복체크</Button>
          </Col>
        </Row>
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
