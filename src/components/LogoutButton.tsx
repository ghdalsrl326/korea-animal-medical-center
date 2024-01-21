"use client";
import { URL } from "@/app/data/url";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push(URL.LOGIN);
  };

  return (
    <Button type="default" onClick={handleLogout}>
      로그아웃
    </Button>
  );
};

export default LogoutButton;
