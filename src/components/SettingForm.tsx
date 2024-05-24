"use client";
import React from "react";
import { Button, Form, Input, Radio, Space, Upload, message } from "antd";
import RequiredMark from "./RequiredMark";
import { useAtom } from "jotai";
import { settingAtom, settingType } from "@/app/data/settingStore";
import { useRouter } from "next/navigation";

const SettingForm = () => {
  const router = useRouter();
  const [setting, setSetting] = useAtom(settingAtom);

  const onFinish = (values: Partial<settingType>) => {
    console.log("Success:", values);
    setSetting({
      id: values.id || "",
      name: values.name || "",
      breed: values.breed || "",
      ownerName: values.ownerName || "",
      sex: values.sex || null,
      neutered: values.neutered || null,
      childBirth: values.childBirth || null,
      age: values.age || "",
    });
    router.push("/cover");
  };

  return (
    <div
      style={{
        borderRadius: "4px",
        border: "1px solid var(--Gray_3, #DEE2E6)",
        background: "var(--White, #FFF)",
        padding: "20px 40px",
        maxWidth: "80%",
      }}
    >
      <Form
        name="basic"
        layout="horizontal"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        requiredMark={RequiredMark}
      >
        <Form.Item<Partial<settingType>>
          label="환자ID"
          name="id"
          rules={[{ required: true, message: "환자ID를 입력해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
          initialValue={setting.id}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<Partial<settingType>>
          label="환자정보"
          name="name"
          rules={[{ required: true, message: "환자정보를 입력해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
          initialValue={setting.name}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<Partial<settingType>>
          label="견종"
          name="breed"
          rules={[{ required: true, message: "견종을 입력해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
          initialValue={setting.breed}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<Partial<settingType>>
          label="보호자 성함"
          name="ownerName"
          rules={[{ required: true, message: "보호자 성함을 입력해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
          initialValue={setting.ownerName}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<Partial<settingType>>
          label="성별"
          name="sex"
          rules={[{ required: true, message: "성별을 선택해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
          initialValue={setting.sex}
        >
          <Radio.Group>
            <Radio value="남">남</Radio>
            <Radio value="여">여</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item<Partial<settingType>>
          label="중성화여부"
          name="neutered"
          rules={[{ required: true, message: "중성화여부를 선택해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
          initialValue={setting.neutered}
        >
          <Radio.Group>
            <Radio value="예">예</Radio>
            <Radio value="아니오">아니오</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item<Partial<settingType>>
          label="출산여부"
          name="childBirth"
          rules={[{ required: true, message: "출산여부를 입력해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
          initialValue={setting.childBirth}
        >
          <Radio.Group>
            <Radio value="예">예</Radio>
            <Radio value="아니오">아니오</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item<Partial<settingType>>
          label="나이"
          name="age"
          rules={[{ required: true, message: "나이를 입력해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
          initialValue={setting.age}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{ maxWidth: "210px" }}
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
