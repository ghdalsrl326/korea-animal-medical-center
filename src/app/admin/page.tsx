/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Layout, Menu, Dropdown, message } from "antd";
import { Header } from "antd/es/layout/layout";
import ReportsTable from "@/components/ReportsTable";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { URL } from "@/app/data/url";
import { ReportMetaProps } from "../data/reportMeta";

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

const page = ({ data }: ReportMetaProps) => {
  const router = useRouter();
  const avatarMenuItems: MenuItem[] = [getItem("Logout", "logout")];

  const onAvatarMenuClick: MenuProps["onClick"] = async ({ key }) => {
    if (key === "logout") {
      try {
        const response = await fetch("/api/auth/logout", {
          method: "POST",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to logout");
        }

        message.success("Successfully logged out");
        router.push(URL.LOGIN);
      } catch (error) {
        if (error instanceof Error) {
          message.error(error.message);
        } else {
          message.error("An unknown error occurred during logout");
        }
      }
    }
  };

  const avatarMenu = (
    <Menu items={avatarMenuItems} onClick={onAvatarMenuClick} />
  );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={280} style={{ borderRight: "solid white 1px" }}>
        <Header
          style={{
            padding: 10,
          }}
        >
          <Image src="/images/logo.png" alt="logo" width={200} height={35} />
        </Header>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout style={{ background: "#001628" }}>
        <Header
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Dropdown overlay={avatarMenu} trigger={["click"]}>
            <Avatar
              style={{
                backgroundColor: "#fde3cf",
                color: "#f56a00",
                cursor: "pointer",
              }}
              icon={<UserOutlined />}
            />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <ReportsTable />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default page;
