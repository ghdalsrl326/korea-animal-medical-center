/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { DesktopOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import ReportsTable from "@/components/ReportsTable";
import Image from "next/image";
import FloatButtonGroup from "@/components/FloatButtonGroup";
import { useAdminData } from "../contexts/AdminContext";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("건강검진 프로그램", "1", <DesktopOutlined />),
];

const AdminPage = () => {
  const { data, myInfo } = useAdminData();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={280}
        style={{ borderRight: "solid black 1px" }}
        theme="light"
      >
        <Header
          style={{
            padding: 20,
            backgroundColor: "#fff",
          }}
        >
          <Image src="/images/logo.png" alt="logo" width={200} height={28} />
        </Header>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Content>
          <div
            style={{
              padding: 24,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              background: "#fff",
            }}
          >
            <ReportsTable data={data} myInfo={myInfo} />
          </div>
        </Content>
        <FloatButtonGroup admin />
      </Layout>
    </Layout>
  );
};

export default AdminPage;
