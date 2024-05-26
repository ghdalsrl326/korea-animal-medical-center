"use client";
import { ReportMetaProps } from "@/app/data/reportMeta";
import { Flex } from "antd";
import React from "react";

const SectionCard = ({ data, date }: ReportMetaProps) => {
  //TODO: 초진/재진 추가
  return (
    <div
      style={{
        width: "380px",
        height: "100px",
        paddingLeft: "10px",
      }}
    >
      <Flex vertical={false}>
        <Flex
          vertical
          justify="center"
          style={{
            width: "100%",
            height: "100%",
            lineHeight: "0",
            fontWeight: "bold",
          }}
        >
          <Flex align="center" gap="large">
            <h4>환자정보</h4>
            <h5>{`${data?.name} / ${data?.breed}`}</h5>
          </Flex>
          <Flex align="center" gap="large">
            <h4>보호자성함</h4>
            <h5>{data?.parentName}</h5>
          </Flex>
          <Flex align="center" gap="large">
            <h4>측정일</h4>
            <h5>{date}</h5>
          </Flex>
        </Flex>
        <Flex
          vertical
          justify="center"
          style={{
            width: "100%",
            height: "100%",
            lineHeight: "0",
          }}
        >
          <h4></h4>
          <Flex align="center" gap="large">
            <h4>나이</h4>
            <h5>{data?.age}</h5>
          </Flex>
          <Flex align="center" gap="large">
            <h4>초진/재진</h4>
            {/* <h5>{setting.examinationType}</h5> */}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default SectionCard;
