"use client";
import { settingAtom } from "@/app/data/settingStore";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { useAtom } from "jotai";
import React from "react";

const CoverTitle = () => {
  const [setting] = useAtom(settingAtom);
  return (
    <Flex vertical gap="small" align="flex-end">
      <Title
        level={1}
        style={{
          margin: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          textAlign: "justify",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        고양이 검진결과서
      </Title>
      <Title
        level={1}
        style={{
          margin: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          textAlign: "justify",
          color: "#fff",
        }}
      >
        {setting.date}
      </Title>
    </Flex>
  );
};

export default CoverTitle;