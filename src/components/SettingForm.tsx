"use client";
import React from "react";
import { Button, Form, Input, Radio, Space, Upload, message } from "antd";
import RequiredMark from "./RequiredMark";
import { useAtom } from "jotai";
import { Setting } from "@/types/Setting";
import { useRouter } from "next/navigation";
import { URL } from "@/app/data/url";
import getToday from "@/util/getToday";
import { configAtom } from "@/app/data/configStore";

const SettingForm = () => {
  const router = useRouter();
  const [config, setConfig] = useAtom(configAtom);

  const onFinish = async (values: Partial<Setting>) => {
    try {
      const response = await fetch("/api/pet/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: values.id,
          name: values.name,
          breed: values.breed,
          parentName: values.parentName,
          species: "강아지",
          age: values.age,
          gender: values.gender === "남" ? "수컷" : "암컷",
          isNeutered: values.isNeutered === "예" ? true : false,
          hasGivenBirth: values.hasGivenBirth === "예" ? true : false,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to register pet");
      }

      setConfig((prev) => ({
        ...prev,
        petId: values.id || "",
      }));

      await router.push(`${URL.PET}/${values.id}/${URL.QUESTIONNAIRE}`);
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error("알 수 없는 오류가 발생했습니다.");
      }
    }
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
        <Form.Item<Partial<Setting>>
          label="환자ID"
          name="id"
          rules={[{ required: true, message: "환자ID를 입력해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<Partial<Setting>>
          label="환자이름"
          name="name"
          rules={[{ required: true, message: "환자이름를 입력해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<Partial<Setting>>
          label="견종"
          name="breed"
          rules={[{ required: true, message: "견종을 입력해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<Partial<Setting>>
          label="보호자 성함"
          name="parentName"
          rules={[{ required: true, message: "보호자 성함을 입력해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item<Partial<Setting>>
          label="성별"
          name="gender"
          rules={[{ required: true, message: "성별을 선택해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
        >
          <Radio.Group>
            <Radio value="남">남</Radio>
            <Radio value="여">여</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item<Partial<Setting>>
          label="중성화여부"
          name="isNeutered"
          rules={[{ required: true, message: "중성화여부를 선택해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
        >
          <Radio.Group>
            <Radio value="예">예</Radio>
            <Radio value="아니오">아니오</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item<Partial<Setting>>
          label="출산여부"
          name="hasGivenBirth"
          rules={[{ required: true, message: "출산여부를 입력해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
        >
          <Radio.Group>
            <Radio value="예">예</Radio>
            <Radio value="아니오">아니오</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item<Partial<Setting>>
          label="나이"
          name="age"
          rules={[{ required: true, message: "나이를 입력해주세요" }]}
          style={{ maxWidth: "480px", marginBottom: "10px" }}
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
              등록하기
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SettingForm;
