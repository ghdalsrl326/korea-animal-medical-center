import React from "react";
import Image from "next/image";
import Title from "antd/es/typography/Title";
import { Flex } from "antd";
import ModeButton from "@/components/ModeButton";
import { URL } from "../data/url";
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
  width: "600px",
  height: "522px",
  boxShadow: "0 4px 24px 0 rgba(34, 60, 80, 0.2)",
};
const containerStyle: React.CSSProperties = {
  height: "100vh",
};
const ModePage = () => {
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
          <Title level={3}>리포트 조회/신규</Title>
          <Flex
            style={contentStyle}
            gap="large"
            justify="center"
            align="center"
          >
            <ModeButton mode="신규" url={URL.SETTING} />
            <ModeButton mode="조회" url={URL.VIEWID} />
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};
export default ModePage;
