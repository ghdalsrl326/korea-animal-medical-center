/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import NavigationTab from "@/components/NavigationTab";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";
import { Flex, FloatButton } from "antd";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { FileTextOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";
import ExamResultContent from "@/components/ExamResultContent";

const page = () => {
  const componentRef = useRef(null);

  return (
    <>
      <div ref={componentRef}>
        <Flex vertical justify="start" align="center">
          <div
            style={{
              width: "1128px",
              height: "1200px",
              position: "relative",
            }}
          >
            <SectionTitle title="건강검진결과" />
            <SectionSubTitle title="종합검진소견" />
          </div>
          <div
            style={{
              position: "absolute",
              width: "1128px",
              height: "100%",
              top: "260px",
            }}
          >
            <ExamResultContent />
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
        pageStyle="@page { size: 1300px 2000px; -webkit-print-color-adjust: exact; }"
      />
    </>
  );
};

export default page;
