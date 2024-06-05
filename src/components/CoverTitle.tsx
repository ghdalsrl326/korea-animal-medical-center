"use client";
import { ReportMeta } from "@/types/ReportMeta";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const CoverTitle = ({ date }: ReportMeta) => {
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
        {date}
      </Title>
    </Flex>
  );
};

export default CoverTitle;
