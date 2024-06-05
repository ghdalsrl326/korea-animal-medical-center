"use client";
import React, { RefObject } from "react";
import { FloatButton, message } from "antd";
import {
  FileTextOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import ReactToPrint from "react-to-print";
import { useRouter } from "next/navigation";
import { handleLogout } from "@/service/authClient";
import { URL } from "@/app/data/url";

type Props = {
  componentRef: RefObject<HTMLDivElement>;
};

const FloatButtonGroup = ({ componentRef }: Props) => {
  const router = useRouter();

  const onChangeMode = () => {
    router.push(URL.MODE);
  };

  const onLogout = async () => {
    const result = await handleLogout();
    if (result.error) {
      message.error(result.error);
    } else {
      message.success("Successfully logged out");
      router.push(URL.LOGIN);
    }
  };

  return (
    <FloatButton.Group
      shape="square"
      style={{
        bottom: "80px",
        right: "40px",
      }}
    >
      <FloatButton
        icon={<HomeOutlined />}
        shape="square"
        tooltip={<div>신규/조회</div>}
        onClick={onChangeMode}
      />
      <FloatButton
        icon={<LogoutOutlined />}
        shape="square"
        tooltip={<div>로그아웃</div>}
        onClick={onLogout}
      />
      <ReactToPrint
        trigger={() => (
          <FloatButton icon={<FileTextOutlined />} tooltip={<div>PDF</div>} />
        )}
        content={() => componentRef.current}
        copyStyles={true}
        pageStyle="@page { size: 1300px 2000px; -webkit-print-color-adjust: exact; }"
      />
    </FloatButton.Group>
  );
};

export default FloatButtonGroup;
