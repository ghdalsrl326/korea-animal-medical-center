"use client";
import { configAtom } from "@/app/data/configStore";
import { URL } from "@/app/data/url";
import { handleLogout } from "@/service/authClient";
import { Button, message } from "antd";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const router = useRouter();
  const [config, setConfig] = useAtom(configAtom);

  const onLogout = async () => {
    const result = await handleLogout();
    if (result.error) {
      message.error(result.error);
    } else {
      message.success("Successfully logged out");
      setConfig((prev) => ({
        ...prev,
        mode: "",
        petId: "",
        qid: "",
        isFirstTime: true,
        date: "",
      }));
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
