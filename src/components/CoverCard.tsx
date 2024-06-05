"use client";
import { ReportMeta } from "@/types/ReportMeta";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const CoverCard = ({ data, date }: ReportMeta) => {
  return (
    <div
      style={{
        width: "295px",
        height: "168px",
        background: "#fff",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <Flex
        vertical={false}
        justify="center"
        style={{ height: "100%" }}
        gap="large"
      >
        <Flex
          vertical
          justify="space-around"
          align="stretch"
          style={{ marginBottom: "8px", textAlign: "justify" }}
        >
          <Title
            level={4}
            style={{
              margin: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              textAlign: "justify",
            }}
          >
            환 자 정 보
          </Title>
          <Title
            level={4}
            style={{
              margin: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              textAlign: "justify",
            }}
          >
            나 이
          </Title>
          <Title
            level={4}
            style={{
              margin: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              textAlign: "justify",
            }}
          >
            측 정 일
          </Title>
        </Flex>
        <Flex
          vertical
          justify="space-around"
          style={{
            marginBottom: "8px",
            textAlign: "justify",
          }}
        >
          <Title
            level={4}
            style={{
              margin: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              textAlign: "justify",
              fontWeight: "300",
            }}
          >
            {data && `${data.name} / ${data.breed}`}
          </Title>
          <Title
            level={4}
            style={{
              margin: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              textAlign: "justify",
              fontWeight: "300",
            }}
          >
            {data && data.age}
          </Title>
          <Title
            level={4}
            style={{
              margin: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              textAlign: "justify",
              fontWeight: "300",
            }}
          >
            {date}
          </Title>
        </Flex>
      </Flex>
    </div>
  );
};

export default CoverCard;
