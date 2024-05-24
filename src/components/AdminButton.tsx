"use client";
import { URL } from "@/app/data/url";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const AdminButton = () => {
  const router = useRouter();

  const handleAdmin = () => {
    router.push(URL.ADMIN);
  };

  return (
    <Button type="text" onClick={handleAdmin}>
      관리자
    </Button>
  );
};

export default AdminButton;
