/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import NavigationTab from "@/components/NavigationTab";
import RadiationExamImageTable from "@/components/RadiationExamImageTable";
import SectionSubTitle from "@/components/SectionSubTitle";
import SectionTitle from "@/components/SectionTitle";
import { Flex, FloatButton } from "antd";
import React, { useRef } from "react";
import { FileTextOutlined } from "@ant-design/icons";
import { pdf } from "@react-pdf/renderer";
import HealthExamResultPDF from "@/components/HealthExamResultPDF";

const page = () => {
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
            <SectionTitle title="건강검진결과" />
            <SectionSubTitle title="방사선검사결과" />
            <RadiationExamImageTable />
          </div>
        </Flex>
      </div>
      <NavigationTab />
      <FloatButton
        icon={<FileTextOutlined />}
        description="PDF"
        shape="square"
        style={{ bottom: "80px", right: "40px" }}
        onClick={async () => {
          const doc = await (<HealthExamResultPDF />); // Your document component
          const asPdf = await pdf(doc);
          asPdf
            .toBlob()
            .then((blob) => {
              const url = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "HealthExamResults.pdf"); // Set the file name
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            })
            .catch((err) => {
              console.error("Error generating PDF", err);
            });
        }}
      />
    </>
  );
};

export default page;
