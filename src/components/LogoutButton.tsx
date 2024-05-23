"use client";
import { URL } from "@/app/data/url";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
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
  };

  return (
    <Button type="default" onClick={handleLogout}>
      로그아웃
    </Button>
  );
};

export default LogoutButton;
