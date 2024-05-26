/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import HealthExamDetailTable from "@/components/HealthExamDetailTable";
import HealthExamSummaryTable from "@/components/HealthExamSummaryTable";
import NavigationTab from "@/components/NavigationTab";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";
import { Flex, FloatButton } from "antd";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { FileTextOutlined } from "@ant-design/icons";
import { ReportMetaProps } from "@/app/data/reportMeta";

const page = ({ data, date }: ReportMetaProps) => {
  const componentRef = useRef(null);

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
            <SectionSubTitle title="신체검사 결과" />
            <HealthExamSummaryTable />
            <HealthExamDetailTable />
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
