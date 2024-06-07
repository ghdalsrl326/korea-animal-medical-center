/* eslint-disable @next/next/no-img-element */
"use client";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

type Props = {
  src: string;
};

const Signature = ({ src }: Props) => {
  return (
    <Flex vertical justify="center" align="flex-end" style={{ width: "100%" }}>
      <Flex
        vertical={false}
        align="center"
        style={{
          background: "#f9eded",
          width: "fit-content",
          minWidth: "300px",
          padding: "10px",
        }}
        gap="large"
      >
        <Title
          level={5}
          style={{
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textAlign: "justify",
          }}
        >
          수의사 서명:
        </Title>
        <img src={src} alt="Uploaded Signature" width={200} />
      </Flex>
    </Flex>
  );
};

export default Signature;
