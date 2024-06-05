/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import NavigationTab from "@/components/NavigationTab";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";
import { Flex, FloatButton } from "antd";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import {
  FileTextOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useData } from "@/app/contexts/DataContext";

const page = () => {
  const componentRef = useRef(null);
  const { data, date } = useData();

  return (
    <>
      <div ref={componentRef}>
        <Flex vertical justify="start" align="center">
          <div
            style={{
              width: "1128px",
              height: "2000px",
              position: "relative",
            }}
          >
            <SectionTitle title="건강검진결과" data={data} date={date} />
            <SectionSubTitle title="고려메디컬센터의 혈액검사" />
          </div>
        </Flex>
      </div>
      <NavigationTab />
      <FloatButton.Group
        shape="square"
        style={{ bottom: "80px", right: "40px" }}
      >
        <FloatButton
          icon={<HomeOutlined />}
          description="Logout"
          shape="square"
        />
        <FloatButton
          icon={<LogoutOutlined />}
          description="Logout"
          shape="square"
        />
        <ReactToPrint
          trigger={() => (
            <FloatButton icon={<FileTextOutlined />} description="PDF" />
          )}
          content={() => componentRef.current}
          copyStyles={true}
          pageStyle="@page { size: 1300px 2000px; -webkit-print-color-adjust: exact; }"
        />
      </FloatButton.Group>
    </>
  );
};

export default page;
