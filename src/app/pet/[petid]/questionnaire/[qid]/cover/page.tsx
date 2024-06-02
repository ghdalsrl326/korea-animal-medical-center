/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { FileTextOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Flex, FloatButton } from "antd";
import CoverCard from "@/components/CoverCard";
import NavigationTab from "@/components/NavigationTab";
import CoverTitle from "@/components/CoverTitle";
import { ReportMetaProps } from "@/types/ReportMeta";

const page = ({ data, date }: ReportMetaProps) => {
  const componentRef = useRef(null);

  return (
    <>
      <div ref={componentRef}>
        <Flex vertical align="center">
          <div
            style={{ position: "relative", width: "1128px", height: "1634px" }}
          >
            <Image
              src="/images/cover.png"
              alt="cover"
              layout="fill"
              quality={100}
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
            <div style={{ position: "absolute", top: "40px", right: "20px" }}>
              <CoverCard data={data} date={date} />
            </div>
            <div style={{ position: "absolute", top: "400px", right: "140px" }}>
              <CoverTitle date={date} />
            </div>
          </div>
        </Flex>
      </div>
      <NavigationTab />
      <ReactToPrint
        trigger={() => (
          <FloatButton
            icon={<FileTextOutlined />}
            description="PDF"
            shape="square"
            style={{ bottom: "80px", right: "40px" }}
          />
        )}
        content={() => componentRef.current}
        copyStyles={true}
        pageStyle="@page { size: 1300px 1750px }"
      />
    </>
  );
};

export default page;
