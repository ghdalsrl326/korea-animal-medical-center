import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import Image from "next/image";
import { Layout } from "antd";
import Title from "antd/es/typography/Title";
import SettingForm from "@/components/SettingForm";
import NavigationTab from "@/components/NavigationTab";
import LogoutButton from "@/components/LogoutButton";

const page = () => {
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image src="/images/logo.png" alt="logo" width={197} height={27} />
        <LogoutButton />
      </Header>
      <Content
        style={{
          padding: "50px 0 0 20%",
          background: "#F9F9FB",
          height: "calc(100vh - 64px)",
        }}
      >
        <Title level={3}>환자정보</Title>
        <SettingForm />
      </Content>
      <NavigationTab />
    </Layout>
  );
};

export default page;
