import React from "react";
import Image from "next/image";
import Title from "antd/es/typography/Title";
import { Flex } from "antd";
import MyReportsTable from "@/components/MyReportsTable";

const headerStyle: React.CSSProperties = {
  textAlign: "center",
};
const contentStyle: React.CSSProperties = {
  textAlign: "center",
  padding: "50px 0",
};
const layoutStyle: React.CSSProperties = {
  borderRadius: 8,
  overflow: "hidden",
  width: "1200px",
  height: "660px",
  boxShadow: "0 4px 24px 0 rgba(34, 60, 80, 0.2)",
};
const containerStyle: React.CSSProperties = {
  height: "100vh",
};
const Page = () => {
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
          <Title level={3}>나의 리포트</Title>
          <MyReportsTable />
        </Flex>
      </div>
    </Flex>
  );
};
export default Page;
