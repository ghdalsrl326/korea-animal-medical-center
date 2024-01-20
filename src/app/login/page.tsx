import React from "react";
import Image from "next/image";
import LoginForm from "@/components/LoginForm";
import Title from "antd/es/typography/Title";
import { Layout, Flex } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "50px 0",
};

const layoutStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  borderRadius: 8,
  overflow: "hidden",
  width: "600px",
  height: "522px",
  boxShadow: "0 4px 24px 0 rgba(34, 60, 80, 0.2)",
};

const containerStyle: React.CSSProperties = {
  backgroundColor: "#F3F9FF",
  height: "100vh",
};

const LoginPage = () => {
  return (
    <Flex
      style={containerStyle}
      gap="large"
      vertical
      justify="center"
      align="center"
    >
      <div style={headerStyle}>
        <Image src="/images/logo.png" alt="logo" width={312} height={43} />
      </div>
      <div style={layoutStyle}>
        <Flex
          style={contentStyle}
          vertical
          gap="large"
          justify="center"
          align="center"
        >
          <Title level={3}>로그인</Title>
          <LoginForm />
        </Flex>
      </div>
    </Flex>
  );
};

export default LoginPage;
