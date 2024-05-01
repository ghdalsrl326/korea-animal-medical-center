"use client";
import { configAtom } from "@/app/data/configStore";
import { settingAtom } from "@/app/data/settingStore";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { useAtom } from "jotai";
import React from "react";

const CoverTitle = () => {
  const [setting] = useAtom(settingAtom);
  const [configStore] = useAtom(configAtom);

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
        검진결과서
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
        {configStore.date}
      </Title>
    </Flex>
  );
};

export default CoverTitle;
