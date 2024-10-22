"use client";
import { useResetAllStores } from "@/app/data/resetAllStores";
import { URL } from "@/app/data/url";
import { handleLogout } from "@/service/authClient";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const router = useRouter();
  const resetAllStores = useResetAllStores();

  const onLogout = async () => {
    const result = await handleLogout();
    if (result.error) {
      message.error(result.error);
    } else {
      message.success("Successfully logged out");
      resetAllStores();
      router.push(URL.LOGIN);
    }
  };

  return (
    <Button type="default" onClick={onLogout}>
      로그아웃
    </Button>
  );
};

export default LogoutButton;
