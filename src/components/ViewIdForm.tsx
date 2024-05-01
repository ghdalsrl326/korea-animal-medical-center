"use client";
import React from "react";
import { Button, Form, FormProps, Input } from "antd";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { configAtom } from "@/app/data/configStore";
import { URL } from "@/app/data/url";

type FieldType = {
  petID: string;
  date: string;
};

const ViewIdForm = () => {
  const router = useRouter();
  const [configStore, setConfigStore] = useAtom(configAtom);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (!values.petID || !values.date) {
      return;
    }
    setConfigStore((prev) => ({
      ...prev,
      petId: values.petID,
      date: values.date,
    }));
    router.push(`${URL.REPORT}/${values.petID}/${values.date}/${URL.SETTING}`);
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
      <Form.Item
        label="측정일"
        name="date"
        rules={[{ required: true, message: "Please input 측정일!" }]}
      >
        <Input placeholder="YYYY-MM-DD" />
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
